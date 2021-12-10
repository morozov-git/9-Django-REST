from django.db import models

from project.models import Project
from users.models import User
# from project.models import Project
# Create your models here.



# Create your models here.
class ToDo(models.Model):
	name = models.CharField(max_length=64)
	project = models.ManyToManyField(blank=True, to=Project)
	description_todo = models.TextField(verbose_name='описание', blank=True, null=True)
	users = models.ManyToManyField(User, db_index=True)
	# user = models.ManyToOneRel(User, to=User, field_name=User.id, on_delete=models.CASCADE)
	# users = models.ManyToManyField(User, blank=True)
	link = models.URLField(verbose_name='ссылка', unique=False, blank=True)
	is_active = models.BooleanField(verbose_name='is_active', default=True)
	is_close = models.BooleanField(verbose_name='is_close', default=False)
	create_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
	update_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
