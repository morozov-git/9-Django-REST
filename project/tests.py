from django.test import TestCase

from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User

from .views import ProjectCustomViewSet
from .models import Project
from todo.models import ToDo


# Create your tests here.

# class TestProjectCustomViewSet(APITestCase):
# 	url = '/api/project/'

	# def test_get_list(self):
	# 	# делаем запрос
	# 	response = self.client.get(self.url)
	# 	self.assertEqual(response.status_code, status.HTTP_200_OK)

	# def test_edit_admin(self):
	# 	# создать todo через ORM  для связи с проектом
	# 	todo = ToDo.objects.create(name='test_name_todo', description_todo='test_description_todo')
	# 	# создаем проект
	# 	project = Project.objects.create(name='test_name_project', description_project='test_description_project')
	# 	# создаем пользователя
	# 	admin = User.objects.create_superuser('admintest', 'admintest@mail.ru', '123qweA!')
	# 	# авторизация
	# 	self.client.login(username='admintest', password='123qweA!')
	# 	# запрос
	# 	response = self.client.put(f'{self.url}{Project.id}/', {'name': 'test_name_project', 'description_project': '111test_description_project1'})
	# 	# получаем ответ и проверяем код ответа
	# 	self.assertEqual(response.status_code, status.HTTP_200_OK)
	# 	# получаем todo
	# 	todo_test = ToDo.objects.get(id=ToDo.id)
	# 	# делаем проверку что измениня произошли
	# 	self.assertEqual(todo.description_todo, 'test_name_todo')
	# 	self.assertEqual(project.description_project, '111test_description_project1')
	# 	# Разлогинится
	# 	self.client.logout()

	# def test_edit_mixer(self):
	# 	# создали todo
	# 	todo = mixer.blend(ToDo)
	# 	# Создать пользователя
	# 	admin = User.objects.create_superuser('admintest', 'admintest@mail.ru', '123qweA!')
	# 	# залогинится
	# 	self.client.login(username='admintest', password='123qweA!')
	# 	# запрос
	# 	response = self.client.put(f'{self.url}{Project.id}/',
	# 							   {'description_todo': 'test_description_todo', 'project': Project.id})
	# 	# получаем ответ и проверяем код ответа
	# 	self.assertEqual(response.status_code, status.HTTP_200_OK)
	# 	# получаем todo
	# 	todo_test = ToDo.objects.get(id=Project.id)
	# 	# делаем проверку что измениня произошли
	# 	self.assertEqual(ToDo.description_todo, 'test_description_todo')
	# 	# Разлогинится
	# 	self.client.logout()

	# def test_edit_mixer_todo(self):
	# 	# создали ToDo
	# 	todo = mixer.blend(ToDo, name='test_name_todo', description_todo='test_description_todo')
	# 	self.assertEqual(ToDo.description_todo, 'test_description_todo')
	# 	# Создать пользователя
	# 	admin = User.objects.create_superuser('admintest', 'admintest@mail.ru', '123qweA!')
	# 	# залогинится
	# 	self.client.login(username='admintest', password='123qweA!')
	# 	# запрос
	# 	response = self.client.put(f'{self.url}{ToDo.id}/',
	# 							   {'name': 'test_name_todo', 'description_todo': '11test_description_todo1'})
	# 	# получаем ответ и проверяем код ответа
	# 	self.assertEqual(response.status_code, status.HTTP_200_OK)
	# 	# получаем ToDo
	# 	todo_test = ToDo.objects.get(id=ToDo.id)
	# 	# делаем проверку что измениня произошли
	# 	self.assertEqual(ToDo.description_todo, '11test_description_todo1')
	# 	# Разлогинится
	# 	self.client.logout()
