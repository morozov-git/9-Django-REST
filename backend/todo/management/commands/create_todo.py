# from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from  todo.models import ToDo


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        todo = ToDo.objects.create({'name' = 'test_todo', 'users' = [1]})
        # todo.set_password('1234qwer')
        # todo.is_superuser = True
        # todo.is_staff = True
        todo.save()

