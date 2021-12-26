from django.shortcuts import render

# Create your views here.
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin, \
	DestroyModelMixin
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import Project
from .filters import ProjectFilter
from .serializers import ProjectModelSerializer, ProjectModelSerializerWithParams


# class ProjectModelViewSet(ModelViewSet):
# 	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
# 	queryset = Project.objects.all()
# 	serializer_class = ProjectModelSerializer


class ProjectCustomViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin,
						   GenericViewSet):
	queryset = Project.objects.all()
	serializer_class = ProjectModelSerializer
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

	def get_serializer_class(self):
		if self.request.version == 'v1':
			return ProjectModelSerializerWithParams
		return ProjectModelSerializer

	# def destroy(self, request, *args, **kwargs):
	# 	project = self.get_object()
	# 	project.is_active = False
	# 	project.save()
	# 	serializer = self.get_serializer(project)
	# 	return Response(serializer.data)

#######################
# class ProjectModelViewSet(ModelViewSet):
# 	queryset = Project.objects.all()
# 	serializer_class = ProjectModelSerializer
#
# 	def get_queryset(self):
# 		name = self.request.query_params.get('name', '')
# 		User = Project.objects.all()
# 		if name:
# 			Project = Project.filter(name__contains=name)
# 		return Project
#
#

##############DjangoFilter
class ProjectDjangoFilterViewSet(ModelViewSet):
	queryset = Project.objects.all()
	serializer_class = ProjectModelSerializer
	# filterset_fields = ['id', 'name', 'description_project']
	filterset_class = ProjectFilter


class ProjectLimitOffsetPagination(LimitOffsetPagination):
	default_limit = 20


class ProjectLimitOffsetPaginationViewSet(ProjectCustomViewSet):
	queryset = Project.objects.all()
	serializer_class = ProjectModelSerializer
	pagination_class = ProjectLimitOffsetPagination
