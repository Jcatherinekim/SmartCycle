from rest_framework import serializers
from .models import Event, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]

class EventSerializer(serializers.ModelSerializer):
    categories = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Category.objects.all()  # Handle multiple category selection
    )

    class Meta:
        model = Event
        fields = ["id", "title", "description", "date", "location", "categories", "created_by"]
