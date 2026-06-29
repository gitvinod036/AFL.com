from django.db import models
from django.contrib.auth.models import User


class Inquiry(models.Model):
    INQUIRY_TYPES = [
        ('demo', 'Book a Demo'),
        ('contact', 'Contact Us'),
    ]

    name = models.CharField(max_length=200)
    email = models.EmailField()
    company_name = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    message = models.TextField()
    inquiry_type = models.CharField(max_length=20, choices=INQUIRY_TYPES, default='demo')
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'Inquiries'

    def __str__(self):
        return f"{self.name} — {self.get_inquiry_type_display()}"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    company_name = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"Profile: {self.user.email}"
