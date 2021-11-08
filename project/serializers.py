from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from users.models import User
from todo.models import ToDo
from .models import Project


class ProjectModelSerializer(ModelSerializer):
	class Meta:
		model = Project
		# fields = '__all__'
		fields = ['name', 'description_project',  'owner', 'is_active']
