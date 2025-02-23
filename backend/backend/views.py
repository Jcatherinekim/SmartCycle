from rest_framework.response import Response
from rest_framework.views import APIView
from events.models import Event
from events.serializers import EventSerializer

class HomePageView(APIView):
    def get(self, request):
        query = request.GET.get("q", "")  # Get search query from URL parameters
        if query:
            events = Event.objects.filter(title__icontains=query)  # Search by title
        else:
            events = Event.objects.all()

        serialized_events = EventSerializer(events, many=True)
        return Response({
            "message": "Welcome to the Home Page!",
            "events": serialized_events.data,
        })

