from django.db import models

# Create your models here.
class User(models.Model):
	first_name = models.CharField(max_length=64)
	last_name = models.CharField(max_length=64)
	image = models.ImageField(upload_to='user_image', max_length=2000, blank=True)
	age = models.PositiveIntegerField(verbose_name='age', default=18)
