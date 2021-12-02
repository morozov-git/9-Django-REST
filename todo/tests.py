
from django.test import TestCase

from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User

from .views import ToDoCustomViewSet
from .models import ToDo


# Create your tests here.

# class TestToDoCustomViewSet(TestCase):
# 	url = '/api/todo/'

	# # Подготовка тестов
	# def setUp(self) -> None:
	# 	pass

	# def test_get_list(self):
	# 	# Создать объект класса APIRequestFactory
	# 	factory = APIRequestFactory()
	# 	request = factory.get(self.url)
	# 	# Указываем какой тип запроса передается в Model
	# 	view = ToDoCustomViewSet.as_view({'get': 'list'})
	# 	response = view(request)
	# 	# Получаем ответ и проверяем код ответа
	# 	self.assertEqual(response.status_code, status.HTTP_200_OK)

	# def test_create_guest(self):
	# 	# Создать объект класса APIRequestFactory
	# 	factory = APIRequestFactory()
	# 	request = factory.post(self.url, {
	# 		'name': 'test_todo',
	# 		'description_todo': 'test_description_todo',
	# 		}, format='json')
	# 	# Указываем какой тип запроса передается в Model
	# 	view = ToDoCustomViewSet.as_view({'post': 'create'})
	# 	response = view(request)
	# 	# Получаем ответ и проверяем код ответа
	# 	self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

	# def test_create_admin(self):
	# 	# Создать объект класса APIRequestFactory
	# 	factory = APIRequestFactory()
	# 	request = factory.post(self.url, {
	# 		'name': 'test_todo',
	# 		'description_todo': 'test_description_todo',
	# 		}, format='json')
	# 	# Создаем пользователя для создания заметки
	# 	admin = User.objects.create_superuser('admintest', 'admintest@mail.ru', '123qweA!')
	# 	# Проходим авторизацию
	# 	force_authenticate(request, admin)
	# 	# Указываем какой тип запроса передается в Model
	# 	view = ToDoCustomViewSet.as_view({'post': 'create'})
	# 	response = view(request)
	# 	# Получаем ответ и проверяем код ответа
	# 	self.assertEqual(response.status_code, status.HTTP_201_CREATED)

	# def test_get_detail(self):
	# 	# Создать объект класса APIClient
	# 	client = APIClient()
	# 	# Создаем todo через ORM для проверки детализации
	# 	todo = ToDo.objects.create(name='test_todo', description_todo='test_description')
	# 	# запрос
	# 	response = client.get(f'{self.url}{todo.id}/')
	# 	# получаем ответ и проверяем код ответа
	# 	self.assertEqual(response.status_code, status.HTTP_200_OK)

	# def test_get_guest(self):
	# 	# создать объект класса APIClient
	# 	client = APIClient()
	# 	# создать ToDo через ORM  для проверки детализации
	# 	todo = ToDo.objects.create(name='test_todo', description_todo='test_description')
	# 	# запрос
	# 	response = client.put(f"{self.url}{todo.id}/", {'name': 'test_todo', 'description_todo': 'test_description'})
	# 	# получаем ответ и проверяем код ответа
	# 	self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

	# def test_get_admin(self):
	# 	# создать объект класса APIClient
	# 	client = APIClient()
	# 	# создать ToDo через ORM  для проверки детализации
	# 	todo = ToDo.objects.create(name='test_todo', description_todo='test_description')
	# 	# Создаем пользователя
	# 	admin = User.objects.create_superuser('admin', 'admin@mail.ru', '123qweA!')
	# 	# авторизация
	# 	client.login(username='admin', password='123qweA!')
	# 	# запрос
	# 	response = client.put(f'{self.url}{todo.id}/', {'name': 'test_todo', 'description_todo': 'test_description'})
	# 	# получаем ответ и проверяем код ответа
	# 	self.assertEqual(response.status_code, status.HTTP_200_OK)
	# 	# получаем ToDo
	# 	todo_test = ToDo.objects.get(id=todo.id)
	# 	# делаем проверку что измениня произошли
	# 	self.assertEqual(todo_test.name, 'test_todo1')
	# 	self.assertEqual(todo_test.description_todo, 'test_description1')
	# 	# Разлогинится
	# 	client.logout()


	# # Очистка
	# def tearDown(self) -> None:
	# 	pass


# class TestMath(APISimpleTestCase):
#
# 	def test_sqrt(self):
# 		# импорт модуль
# 		import math
# 		# передаем данные в модуль
# 		response = math.sqrt(4)
# 		self.assertEqual(response, 2)



