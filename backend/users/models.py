from django.contrib.auth.models import AbstractUser, BaseUserManager, Group, Permission
from django.db import models

def upload_to(instance, filename):
    return f'profile_pics/{instance.email}/{filename}'

# Custom User Manager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Creates and returns a regular user."""
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        extra_fields.setdefault("is_active", True)  # Ensure user is active
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # Hash password before saving
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Creates and returns a superuser."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if not password:
            raise ValueError("Superuser must have a password.")  # Ensure password is set

        return self.create_user(email, password, **extra_fields)

# Custom User Model
class CustomUser(AbstractUser):
    username = None  # Remove username
    email = models.EmailField(unique=True)  # Use email for login
    city = models.CharField(max_length=100, blank=True, null=True)
    profile_picture = models.ImageField(upload_to="profile_pics/", blank=True, null=True)

    objects = CustomUserManager()  # Use the custom manager

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []  # No need for username

    def __str__(self):
        return self.email
