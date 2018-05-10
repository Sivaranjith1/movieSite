# Generated by Django 2.0.2 on 2018-05-10 12:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Episode',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('episode_number', models.IntegerField()),
                ('description', models.TextField(blank=True)),
                ('publish_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('publish_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Serie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('publish_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fil', models.FileField(upload_to='')),
                ('upload_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name='movie',
            name='video',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.Video'),
        ),
        migrations.AddField(
            model_name='episode',
            name='serie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.Serie'),
        ),
        migrations.AddField(
            model_name='episode',
            name='video',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movies.Video'),
        ),
    ]
