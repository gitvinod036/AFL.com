from django.urls import path
from .views import (
    InquiryCreateView,
    HealthCheckView,
    RegisterView,
    LoginView,
    LogoutView,
    MeView,
)

urlpatterns = [
    path('health/', HealthCheckView.as_view(), name='health-check'),
    path('inquiries/', InquiryCreateView.as_view(), name='inquiry-create'),
    path('auth/register/', RegisterView.as_view(), name='auth-register'),
    path('auth/login/', LoginView.as_view(), name='auth-login'),
    path('auth/logout/', LogoutView.as_view(), name='auth-logout'),
    path('auth/me/', MeView.as_view(), name='auth-me'),
]
