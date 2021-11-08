from django.db import models
from users.models import User
from todo.models import ToDo
# Create your models here.


class Project(models.Model):
	name = models.CharField(max_length=64)
	description_project = models.TextField(verbose_name='описание', blank=True)
	todo_link = models.ManyToManyField(ToDo, blank=True)
	owner = models.ForeignKey(User, null=False, db_index=True, on_delete=models.CASCADE)
	users = models.ManyToOneRel(User, null=False, db_index=True)
	link = models.URLField(verbose_name='ссылка', unique=True)
	is_active = models.BooleanField(verbose_name='is_active', default=True)
	start_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
	update_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
