from mep.models import MyUser
from django.core.management.base import BaseCommand
class Command(BaseCommand):

    def handle(self, *args, **options):
        if MyUser.objects.count() == 0:
            
            username = 'admin'
            email = 'admin@gmail.com'
            password = 'admin'
            print('Creating account for %s (%s)' % (username, email))
            admin = MyUser.objects.create_superuser(email=email,about_me='me', password=password)
            admin.is_active = True
            admin.is_admin = True
            admin.save()
        else:
            print('Admin accounts can only be initialized if no Accounts exist')