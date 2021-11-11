from django.shortcuts import render

# Create your views here.
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import ToDo
from .serializers import ToDoModelSerializer
from .filters import ToDoFilter
from rest_framework.response import Response


# class ToDoModelViewSet(ModelViewSet):
# 	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
# 	queryset = ToDo.objects.all()
# 	serializer_class = ToDoModelSerializer


class ToDoCustomViewSet(CreateModelMixin, ListModelMixin, RetrieveModelMixin, GenericViewSet):
	queryset = ToDo.objects.all()
	serializer_class = ToDoModelSerializer
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]


#######################
# class ToDoModelViewSet(ModelViewSet):
# 	queryset = ToDo.objects.all()
# 	serializer_class = ToDoModelSerializer
#
# 	def get_queryset(self):
# 		name = self.request.query_params.get('name', '')
# 		User = ToDo.objects.all()
# 		if name:
# 			ToDo = ToDo.filter(name__contains=name)
# 		return ToDo


##############DjangoFilter
class ToDoDjangoFilterViewSet(ModelViewSet):
	queryset = ToDo.objects.all()
	serializer_class = ToDoModelSerializer
	# filterset_fields = ['id', 'name', 'description_todo']
	filterset_class = ToDoFilter


class ToDoLimitOffsetPagination(LimitOffsetPagination):
	default_limit = 10


class ToDoLimitOffsetPaginationViewSet(ToDoCustomViewSet):
	queryset = ToDo.objects.all()
	serializer_class = ToDoModelSerializer
	pagination_class = ToDoLimitOffsetPagination
