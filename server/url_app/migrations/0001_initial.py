# Generated by Django 4.2.7 on 2024-01-04 14:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UrlModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=255)),
                ('uuid', models.CharField(max_length=5)),
                ('users', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
