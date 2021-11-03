from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
	username = models.CharField(max_length=64, unique=True)
	first_name = models.CharField(max_length=64)
	last_name = models.CharField(max_length=64)
	email = models.EmailField(verbose_name='email', unique=True)
	is_active = models.BooleanField(verbose_name='is_active', default=True)
