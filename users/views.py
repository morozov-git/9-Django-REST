from django.shortcuts import render

# Create your views here.
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
	queryset = User.objects.all()
	serializer_class = UserModelSerializer
