from django.db import models
from django.contrib.auth.models import User
from movies.models import Movie, Episode

from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class HarSett(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.SET_NULL, null=True)
    movie = models.ForeignKey(Movie, on_delete=models.SET_NULL, null=True)
    episode = models.ForeignKey(Episode, on_delete=models.SET_NULL, null=True)
    timeSeen = models.DurationField()

    def __str__(self):
        return str(self.profile)