from django.test import TestCase
import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import UserCustomViewSet
from .models import User


# Create your tests here.

# class TestUserCustomViewSet(TestCase):
# 	url = '/api/users/'
#
# 	# Подготовка тестов
# 	def setUp(self) -> None:
# 		pass
#
# 	def test_get_list(self):
# 		# Создать объект класса APIRequestFactory
# 		factory = APIRequestFactory()
# 		request = factory.get(self.url)
# 		# Указываем какой тип запроса передается в Model
# 		view = UserCustomViewSet.as_view({'get': 'list'})
# 		response = view(request)
# 		# Получаем ответ и проверяем код ответа
# 		self.assertEqual(response.status_code, status.HTTP_200_OK)
#
# 	# Очистка
# 	def tearDown(self) -> None:
# 		pass
