from django.db import models
from django.urls import reverse

from rest_framework.reverse import reverse as api_reverse

class Genre(models.Model):
    name = models.CharField(max_length=80)

    def __str__(self):
        return str(self.name)

class Video(models.Model):
    fil = models.FileField()
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.fil)

class Cover(models.Model):
    image = models.ImageField(upload_to='cover/%Y/%m/%d')

    def __str__(self):
        return str(self.image)

    
    def get_api_url(self, request=None):
        return api_reverse("movies:cover_images", kwargs={'pk': self.pk}, request=request)

class Movie(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    publish_date = models.DateTimeField()
    coverImage = models.ForeignKey(Cover, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return str(self.title)

    def get_api_url(self, request=None):
        return api_reverse("movies:movie-detail", kwargs={'pk': self.pk}, request=request)


class Serie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    upload_date = models.DateTimeField(auto_now_add=True)
    coverImage = models.ForeignKey(Cover, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return str(self.title)

    def get_api_url(self, request=None):
        return api_reverse("movies:serie-detail", kwargs={'pk': self.pk}, request=request)

    def get_episode(self):
        episodes = Episode.objects.filter(serie=self)
        return episodes


class Episode(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True)
    episode_number = models.IntegerField()
    description = models.TextField(blank=True)
    publish_date = models.DateTimeField()
    serie = models.ForeignKey(Serie, on_delete=models.SET_NULL, null=True, related_name='episode')

    def __str__(self):
        return str(self.title)

    def get_api_url(self, request=None):
        return api_reverse("movies:episode-detail", kwargs={'pk': self.pk}, request=request)