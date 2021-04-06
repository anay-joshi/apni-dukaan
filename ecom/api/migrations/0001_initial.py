from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(
            name="anay",
            email="anay@gmail.com",
            is_staff=True,
            is_superuser=True,
            phone=123456789,
            gender="Male",
        )

        user.set_password("12345")
        user.save()

    operations = [
        migrations.RunPython(seed_data),
    ]
