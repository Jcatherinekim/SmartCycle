from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

def upload_to(instance, filename):
    return f'profile_pics/{instance.email}/{filename}'

class CustomUser(AbstractUser):
    username = None  # Remove username
    email = models.EmailField(unique=True)  # Use email for login
    city = models.CharField(max_length=100, blank=True, null=True)
    profile_picture = models.ImageField(upload_to=upload_to, blank=True, null=True)

    # Fix related_name clashes
    groups = models.ManyToManyField(Group, related_name="customuser_set", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="customuser_permissions_set", blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
