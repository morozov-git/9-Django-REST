from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken


class UserModelSerializer(ModelSerializer):
	class Meta:
		model = User
		# fields = '__all__'
		fields = fields = ['id', 'username', 'first_name', 'last_name', 'email']

	def get_tokens_for_user(model):
		refresh = RefreshToken.for_user(model)

		return {
			'refresh': str(refresh),
			'access': str(refresh.access_token),
		}

# class ToDoSerializer(ModelSerializer):
# 	class Meta:
# 		model = ToDo
# 		fields = '__all__'
#
#
# class PorjectModelSerializer(ModelSerializer):
# 	class Meta:
# 		model = Porject
# 		fields = '__all__'
