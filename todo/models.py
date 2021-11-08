from django.db import models

from project.models import Project
from users.models import User
# from project.models import Project
# Create your models here.



# Create your models here.
class ToDo(models.Model):
	name = models.CharField(max_length=64)
	project = models.OneToOneField(max_length=64, blank=True, to=Project, on_delete=models.CASCADE)
	description_todo = models.TextField(verbose_name='описание', blank=True, null=True)
	owner = models.ForeignKey(User, null=False, db_index=True, on_delete=models.CASCADE)
	users = models.ManyToOneRel(User, to=User.id, field_name='Users')
	link = models.URLField(verbose_name='ссылка', unique=True)
	is_active = models.BooleanField(verbose_name='is_active', default=True)
	create_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
	update_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
