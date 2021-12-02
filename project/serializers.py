from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from rest_framework_simplejwt.tokens import RefreshToken

from users.models import User
from todo.models import ToDo
from .models import Project


class ProjectModelSerializer(ModelSerializer):
	class Meta:
		model = Project
		# fields = '__all__'
		# fields = ['name', 'description_project',  'owner', 'is_active']
		fields = ['name', 'description_project', 'is_active']


class ProjectModelSerializerWithParams(ModelSerializer):
	class Meta:
		model = Project
		# fields = '__all__'
		fields = fields = ['name', 'description_project',  'owner', 'is_active']

	def get_tokens_for_todo(model):
		refresh = RefreshToken.for_project(model)

		return {
			'refresh': str(refresh),
			'access': str(refresh.access_token),
		}