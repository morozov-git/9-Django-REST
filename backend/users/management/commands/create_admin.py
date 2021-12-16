# from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from  users.models import User


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        admin = User.objects.create(username='test', email='test@example.com', password='1234qwer')
        admin.set_password('1234qwer')
        admin.is_superuser = True
        admin.is_staff = True
        admin.save()



