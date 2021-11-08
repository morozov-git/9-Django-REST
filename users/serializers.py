from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import User


class UserModelSerializer(ModelSerializer):
	class Meta:
		model = User
		# fields = '__all__'
		fields = fields = ['username', 'first_name', 'last_name', 'email']