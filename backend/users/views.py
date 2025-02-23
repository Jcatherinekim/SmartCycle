from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate, get_user_model
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser
from .serializers import UserSerializer

User = get_user_model()  # Get the custom user model

# ✅ User Signup
class RegisterUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# ✅ User Profile (Get & Update)
class UserProfileView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


def perform_create(self, serializer):
    if not self.request.user.is_authenticated:
        raise serializers.ValidationError({"error": "User must be logged in to create an event."})
    
    serializer.save(created_by=self.request.user)


# ✅ User Login (Email & Password Authentication)
@csrf_exempt  # Temporarily disable CSRF for testing (remove in production)
@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    email = request.data.get("email")
    password = request.data.get("password")

    try:
        user = CustomUser.objects.get(email=email)  # Get user by email
        if user.check_password(password):  # ✅ Manually verify password
            login(request, user)  # ✅ Log user in if using session-based auth
            return Response({
                "message": "Login successful!",
                "user_id": user.id,
                "email": user.email
            })
        else:
            return Response({"error": "Invalid password"}, status=400)

    except CustomUser.DoesNotExist:
        return Response({"error": "User does not exist"}, status=400)