# Generated by Django 3.0.6 on 2020-05-19 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0003_auto_20200519_0805'),
    ]

    operations = [
        migrations.AddField(
            model_name='storefront',
            name='location',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='business',
            name='storeType',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
