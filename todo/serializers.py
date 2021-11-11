from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from users.models import User
from .models import ToDo
from project.models import Project

class ToDoModelSerializer(ModelSerializer):
	class Meta:
		model = ToDo
		# fields = '__all__'
		fields = ['name', 'project', 'description_todo', 'owner', 'is_close', 'is_active']