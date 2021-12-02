import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType
from todo.models import ToDo
from users.models import User
from project.models import Project


# 1.Создали тип для описания  пользователя
# 2.DjangoObjectType = позволяет автоматически создать
# нужные типы полей для указанной модели и указать нужные поля!!
class UserType(DjangoObjectType):
	class Meta:
		model = User
		fields = '__all__'


# 1.Создали тип для описания ToDo
# 2.DjangoObjectType = позволяет автоматически создать
# нужные типы полей для указанной модели и указать нужные поля!!
class ToDoType(DjangoObjectType):
	class Meta:
		model = ToDo
		fields = '__all__'


# 1.Определяем поле "user_by_id` Поле и указывает тип int заполнения обязательно
# 2. resolve_user_by_id отдает список всех пользователей если нет параметра
# иначе отдает конретного пользователя

class Query(ObjectType):
	user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))

	def resolve_user_by_id(root, info, id=None):
		if id:
			return User.objects.get(id=id)
		return User.objects.all()

	# 1.Определяем поле "todo_by_user` как список ToDo ставим не обязательным
	# 2. resolve_todo_by_user отдает с фильтрацией по username

	todo_by_user = graphene.List(ToDoType, username=graphene.String(required=False))

	def resolve_todo_by_user(self, info, username=None):
		user_id = User.objects.get(username=username).id
		todo_list = ToDo.objects.all()
		if user_id:
			todo_list = ToDo.objects.filter(user=user_id)
		return todo_list

schema = graphene.Schema(query=Query)
