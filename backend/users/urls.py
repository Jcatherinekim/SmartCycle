from django.urls import path, include
from .views import RegisterUserView, UserProfileView, login_user
from dj_rest_auth.views import LoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter


urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', login_user, name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path("google/login/", GoogleLogin.as_view(), name="google-login"),
]
