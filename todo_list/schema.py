import graphene
from graphene import ObjectType
from graphene_django import DjangoObjectType
from todo.models import ToDo
from users.models import User
from project.models import Project


# """ Запросы с параметрами """

# # 1.Создали тип для описания  пользователя
# # 2.DjangoObjectType = позволяет автоматически создать
# # нужные типы полей для указанной модели и указать нужные поля!!
# class UserType(DjangoObjectType):
# 	class Meta:
# 		model = User
# 		fields = '__all__'
#
#
# # 1.Создали тип для описания ToDo и Project
# # 2.DjangoObjectType = позволяет автоматически создать
# # нужные типы полей для указанной модели и указать нужные поля!!
# class ToDoType(DjangoObjectType):
# 	class Meta:
# 		model = ToDo
# 		fields = '__all__'
#
# class ProjectType(DjangoObjectType):
# 	class Meta:
# 		model = Project
# 		fields = '__all__'
#
#
# # 1.Определяем поле "user_by_id` Поле и указывает тип int заполнения обязательно
# # 2. resolve_user_by_id отдает список всех пользователей если нет параметра
# # иначе отдает конретного пользователя
#
# class Query(ObjectType):
# 	user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))
#
# 	def resolve_user_by_id(root, info, id=None):
# 		if id:
# 			return User.objects.get(id=id)
# 		return User.objects.all()
#
# 	# 1.Определяем поле "todo_by_user` как список ToDo ставим не обязательным
# 	# 2. resolve_todo_by_user отдает с фильтрацией по username
#
# 	todo_by_user = graphene.List(ToDoType, username=graphene.String(required=False))
#
# 	def resolve_todo_by_user(self, info, username=None):
# 		user_id = User.objects.get(username=username).id
# 		todo_list = ToDo.objects.all()
# 		if user_id:
# 			todo_list = ToDo.objects.filter(user=user_id)
# 		return todo_list
#
# 	todo_by_project = graphene.List(ProjectType, project_name=graphene.String(required=False))
#
# 	def resolve_todo_by_project(self, info, project_name=None):
# 		project_id = Project.objects.get(name=project_name).id
# 		todo_list = ToDo.objects.all()
# 		if project_id:
# 			todo_list = ToDo.objects.filter(project=project_id)
# 		return todo_list
#
# schema = graphene.Schema(query=Query)


# """ Изменениe данных """

# 1.Создали тип для описания  пользователя
# 2.DjangoObjectType = позволяет автоматически создать
# нужные типы полей для указанной модели и указать нужные поля!!
class UserType(DjangoObjectType):
	class Meta:
		model = User
		fields = '__all__'


# 1.Создали тип для описания ToDo и Project
# 2.DjangoObjectType = позволяет автоматически создать
# нужные типы полей для указанной модели и указать нужные поля!!
class ToDoType(DjangoObjectType):
	class Meta:
		model = ToDo
		fields = '__all__'


class ProjectType(DjangoObjectType):
	class Meta:
		model = Project
		fields = '__all__'


# 1.Определяем поле "user_by_id` КАК Поле и указывает тип  ID  заполнения обязательно
# 2. resolve_author_by_id отдает список всех пользователей если нет параметра
# иначе отдает конретного пользователя
class Query(ObjectType):
	user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))

	def resolve_user_by_id(root, info, id=None):
		if id:
			return User.objects.get(id=id)
		return User.objects.all()

	# 1.Определяем поле "todo_by_user` как список ToDo  ставим не обязательным
	# 2. resolve_todo_by_user отдает с фильтрацией по username

	todo_by_user = graphene.List(ToDoType, username=graphene.String(required=False))

	def resolve_todo_by_user(self, info, username=None):
		user_id = User.objects.get(username=username).id
		todo = ToDo.objects.all()
		if username:
			todo = ToDo.filter(user=user_id)
		return todo


# Любое изменнеие это мутация
class UserUpdateMutation(graphene.Mutation):
	# Класс для передачи параметров
	class Arguments:
		first_name = graphene.String()
		last_name = graphene.String()
		email = graphene.String(required=True)
		id = graphene.ID()

	# user будет содержать итоговый объект после изменения.
	user = graphene.Field(UserType)

	# Логика изменения
	@classmethod
	def mutate(self, root, info, first_name, last_name, email, id):
		user = User.objects.get(id=id)
		user.first_name = first_name
		user.last_name = last_name
		user.email = email
		user.save()
		# Возвращаем объект мутации с измеененным пользователем
		return UserUpdateMutation(user=user)


# Любое изменнеие это мутация
class UserCreateMutation(graphene.Mutation):
	# Класс для передачи параметров
	class Arguments:
		username = graphene.String(required=True)
		first_name = graphene.String()
		last_name = graphene.String()
		email = graphene.String(required=True)

	# user будет содержать итоговый объект после изменения.
	user = graphene.Field(UserType)

	# Логика изменения
	@classmethod
	def mutate(cls, root, info, username, first_name, last_name, email):
		user = User(username=username, first_name=first_name, last_name=last_name, email=email)
		user.save()
		# Возвращаем объект мутации с созданным автором
		return UserCreateMutation(user=user)


# Любое изменнеие это мутация
class UserDeleteMutation(graphene.Mutation):
	# Класс для передачи параметров
	class Arguments:
		id = graphene.ID()

	# user будет содержать итоговый объект после изменения.
	user = graphene.Field(UserType)

	# Логика изменения
	@classmethod
	def mutate(self, root, info, id):
		user = User.objects.get(id=id).delete()
		# Возвращаем объект мутации с измеененным автором
		return UserDeleteMutation(user=user)


# Объект для нескольких мутаций (нужно передать в схему)
class Mutations(graphene.ObjectType):
	update_user = UserUpdateMutation.Field()
	create_user = UserCreateMutation.Field()
	delete_user = UserDeleteMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)
