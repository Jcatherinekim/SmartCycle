from django.db import models
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    CATEGORY_CHOICES = [
        ("outdoors", "Outdoors"),
        ("games", "Games"),
        ("music", "Music"),
        ("sports", "Sports"),
        ("technology", "Technology"),
        ("food", "Food"),
    ]
    name = models.CharField(max_length=50, choices=CATEGORY_CHOICES, unique=True)

    def __str__(self):
        return self.get_name_display()  # Display human-readable name

def create_categories(sender, **kwargs):
    if sender.name == "events":  # Make sure it's for the correct app
        print("🔹 Creating categories...")  # Debugging line
        for code, label in Category.CATEGORY_CHOICES:
            obj, created = Category.objects.get_or_create(name=code)
            print(f"✅ Category '{obj.name}' - {'Created' if created else 'Already exists'}")  # Debugging

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=255)
    categories = models.ManyToManyField(Category, related_name="events")  # Allow multiple categories

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,  # ✅ Reference CustomUser
        on_delete=models.CASCADE
    )

    attendees = models.ManyToManyField(
        settings.AUTH_USER_MODEL,  # ✅ Reference CustomUser
        related_name="rsvp_events",
        blank=True
    )

    def __str__(self):
        return self.title
