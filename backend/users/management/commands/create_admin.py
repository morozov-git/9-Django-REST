# from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
# from  backend.users.models import User
from  users.models import User
from todo_list.settings import DEBUG

class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        if DEBUG == True:
            count = ''
            while True:
                try:
                    admin = User.objects.create(username=f'test{count}', email=f'test{count}@example.com',
                                                password='1234qwer')
                    admin.set_password('1234qwer')
                    admin.is_superuser = True
                    admin.is_staff = True
                    admin.save()
                    break
                except:
                    if count == '':
                        count = 0
                    else:
                        count += 1

