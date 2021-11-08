from django.shortcuts import render

# Create your views here.
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from .models import Project
from .serializers import ProjectModelSerializer


class ProjectModelViewSet(ModelViewSet):
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
	queryset = Project.objects.all()
	serializer_class = ProjectModelSerializer
