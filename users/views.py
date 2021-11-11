from django.db.migrations import serializer
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView, \
	get_object_or_404
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, DestroyModelMixin
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet, GenericViewSet, ViewSet
from .models import User
from .serializers import UserModelSerializer
from .filters import UserFilter
from django_filters import rest_framework as filters
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action


# class UserModelViewSet(ModelViewSet):
# 	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
# 	queryset = User.objects.all()
# 	serializer_class = UserModelSerializer


###########################
# class UserAPIVIew(APIView):
# 	renderer_classes = [JSONRenderer]
#
# 	def get(self, request, format=None):
# 		Users = User.objects.all()
# 		serializer = UserModelSerializer(Users, many=True)
# 		return Response(serializer.data)

############################
# class UserCreateAPIView(CreateAPIView):
# 	renderer_classes = [JSONRenderer]
# 	queryset = User.objects.all()
# 	serializer_class = UserModelSerializer
#
#
# class UserListAPIView(ListAPIView):
# 	renderer_classes = [JSONRenderer]
# 	queryset = Users.objects.all()
# 	serializer_class = UserModelSerializer
#
# class UserUpdateAPIView(UpdateAPIView):
#    renderer_classes = [JSONRenderer]
#    queryset = User.objects.all()
#    serializer_class = UserModelSerializer
#
# class UserRetrieveAPIView(RetrieveAPIView):
# 	renderer_classes = [JSONRenderer]
# 	queryset = User.objects.all()
# 	serializer_class = UserModelSerializer
#
# class UserDestroyAPIView(DestroyAPIView):
# 	renderer_classes = [JSONRenderer]
# 	queryset = User.objects.all()
# 	serializer_class = UserModelSerializer

###########################
# class UserViewSet(viewsets.ViewSet):
# 	renduserserer_classes = [JSONRenderer]
#
# 	@action(detail=True, methods=['get'])
# 	def user_name_only(self, request, pk=None):
# 		user = get_object_or_404(User, pk=pk)
# 		return Response({'user.username': user.username})
#
# 	def list(self, request):
# 		articles = User.objects.all()
# 		serializer = UserModelSerializer(articles, many=True)
# 		return Response(serializer.data)
#
# 	def retrieve(self, request, pk=None):
# 		article = get_object_or_404(User, pk=pk)
# 		serializer = UserModelSerializer(article)
# 		return Response(serializer.data)

####################
#class UserCustomViewSet(CreateModelMixin, UpdateModelMixin, ListModelMixin, RetrieveModelMixin, DestroyModelMixin, GenericViewSet):
class UserCustomViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
	queryset = User.objects.all()
	serializer_class = UserModelSerializer
	renderer_classes = [JSONRenderer, BrowsableAPIRenderer]


#######################
# class UserModelViewSet(ModelViewSet):
# 	queryset = User.objects.all()
# 	serializer_class = UserModelSerializer
#
# 	def get_queryset(self):
# 		name = self.request.query_params.get('username', '')
# 		User = User.objects.all()
# 		if name:
# 			User = User.filter(name__contains=name)
# 		return User


##############DjangoFilter
class UserDjangoFilterViewSet(ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserModelSerializer
	# filterset_fields = ['id', 'username', 'first_name']
	filterset_class = UserFilter


class UserLimitOffsetPagination(LimitOffsetPagination):
	default_limit = 1


class UserLimitOffsetPaginationViewSet(UserCustomViewSet):
	queryset = User.objects.all()
	serializer_class = UserModelSerializer
	pagination_class = UserLimitOffsetPagination
