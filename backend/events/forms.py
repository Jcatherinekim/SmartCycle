from django import forms
from .models import Event, Category

class EventForm(forms.ModelForm):
    categories = forms.ModelMultipleChoiceField(
        queryset=Category.objects.all(),
        widget=forms.CheckboxSelectMultiple,  # Use checkboxes for multiple selection
    )

    class Meta:
        model = Event
        fields = ['title', 'description', 'date', 'location', 'categories']
