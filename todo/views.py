from django.shortcuts import render

# Create your views here.
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from .models import ToDo
from .serializers import ToDoModelSerializer


class TodoModelViewSet(ModelViewSet):
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
	queryset = ToDo.objects.all()
	serializer_class = ToDoModelSerializer