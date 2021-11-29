from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from rest_framework_simplejwt.tokens import RefreshToken

from users.models import User
from .models import ToDo
from project.models import Project

class ToDoModelSerializer(ModelSerializer):
	class Meta:
		model = ToDo
		# fields = '__all__'
		# fields = ['name', 'project', 'description_todo', 'owner', 'is_close', 'is_active']
		# fields = ['name', 'project', 'description_todo', 'is_close', 'is_active']
		fields = ['name', 'description_todo']


class ToDoModelSerializerWithUser(ModelSerializer):
	class Meta:
		model = ToDo
		# fields = '__all__'
		fields = fields = ['name', 'project', 'description_todo', 'owner', 'is_close', 'is_active']

	def get_tokens_for_todo(model):
		refresh = RefreshToken.for_todo(model)

		return {
			'refresh': str(refresh),
			'access': str(refresh.access_token),
		}