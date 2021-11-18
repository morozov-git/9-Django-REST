from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import User


class UserModelSerializer(ModelSerializer):
	class Meta:
		model = User
		# fields = '__all__'
		fields = fields = ['id', 'username', 'first_name', 'last_name', 'email']


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
