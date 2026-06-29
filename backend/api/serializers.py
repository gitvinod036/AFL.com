from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Inquiry, UserProfile


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = ['id', 'name', 'email', 'company_name', 'phone', 'message', 'inquiry_type', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_email(self, value):
        if not value:
            raise serializers.ValidationError('Email is required.')
        return value.lower()

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError('Message must be at least 10 characters.')
        return value.strip()


class UserSerializer(serializers.ModelSerializer):
    company_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'company_name']
        read_only_fields = fields

    def get_company_name(self, obj):
        profile = getattr(obj, 'profile', None)
        return profile.company_name if profile else ''


class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=150)
    last_name = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, min_length=8)
    confirm_password = serializers.CharField(write_only=True)
    company_name = serializers.CharField(max_length=200, required=False, allow_blank=True)

    def validate_email(self, value):
        email = value.lower()
        if User.objects.filter(email__iexact=email).exists():
            raise serializers.ValidationError('An account with this email already exists.')
        return email

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({'confirm_password': 'Passwords do not match.'})
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        company_name = validated_data.pop('company_name', '')
        email = validated_data.pop('email')
        password = validated_data.pop('password')

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=validated_data['first_name'].strip(),
            last_name=validated_data['last_name'].strip(),
        )
        UserProfile.objects.create(user=user, company_name=company_name.strip())
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data['email'].lower()
        user = authenticate(username=email, password=data['password'])
        if not user:
            try:
                existing = User.objects.get(email__iexact=email)
                user = authenticate(username=existing.username, password=data['password'])
            except User.DoesNotExist:
                pass
        if not user:
            raise serializers.ValidationError({'detail': 'Invalid email or password.'})
        if not user.is_active:
            raise serializers.ValidationError({'detail': 'This account has been deactivated.'})
        data['user'] = user
        return data
