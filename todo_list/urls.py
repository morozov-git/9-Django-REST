"""todo_list URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users.views import UserCustomViewSet, UserDjangoFilterViewSet, UserLimitOffsetPaginationViewSet
# from users.views import UserModelViewSet
from todo.views import ToDoCustomViewSet, ToDoDjangoFilterViewSet, ToDoLimitOffsetPaginationViewSet
from project.views import ProjectCustomViewSet, ProjectDjangoFilterViewSet, ProjectLimitOffsetPaginationViewSet
from users import views

router = DefaultRouter()
# router.register('todo', ToDoModelViewSet)
router.register('todo', ToDoCustomViewSet, basename='todo')
router.register('todo_page', ToDoLimitOffsetPaginationViewSet, basename='todo_page')
router.register('todo_filter', ToDoDjangoFilterViewSet, basename='todo_filter')
# router.register('project', ProjectModelViewSet)
router.register('project', ProjectCustomViewSet, basename='project')
router.register('project_page', ProjectLimitOffsetPaginationViewSet, basename='project_page')
router.register('project_filter', ProjectDjangoFilterViewSet, basename='project_filter')
# router.register('users', UserModelViewSet)
router.register('users', UserCustomViewSet, basename='users')
router.register('users_page', views.UserLimitOffsetPaginationViewSet, basename='users_page')
router.register('users_filter', UserDjangoFilterViewSet, basename='users_filter')

urlpatterns = [
	path('admin/', admin.site.urls),
	path('api-auth/', include('rest_framework.urls')),
	path('api/', include(router.urls)),
	# path('users/api-view/', views.UserAPIVIew.as_view()),
	# path('users/generic/retrieve/<int:pk>/', views.UserRetrieveAPIView.as_view())
	# path('users/viewsets/', include(router.urls)),

]
