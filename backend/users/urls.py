from django.urls import path
from .views import RegisterUserView, UserProfileView, login_user

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', login_user, name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
]
