from django.contrib import admin
from .models import Inquiry


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'inquiry_type', 'company_name', 'is_read', 'created_at']
    list_filter = ['inquiry_type', 'is_read', 'created_at']
    search_fields = ['name', 'email', 'company_name', 'message']
    readonly_fields = ['created_at']
    list_editable = ['is_read']
