from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    ordering = ['email']  # Use 'email' instead of 'username'
    list_display = ('email', 'city', 'profile_picture')

    fieldsets = (
        (None, {'fields': ('email', 'password', 'city', 'profile_picture')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'city', 'profile_picture')}
        ),
    )

admin.site.register(CustomUser, CustomUserAdmin)
