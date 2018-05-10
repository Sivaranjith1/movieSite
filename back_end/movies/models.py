from django.db import models

# Create your models here.
class Video(models.Model):
    fil = models.FileField()
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.fil)

class Movie(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    publish_date = models.DateTimeField()

    def __str__(self):
        return str(self.title)


class Serie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    publish_date = models.DateTimeField()

    def __str__(self):
        return str(self.title)


class Episode(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    episode_number = models.IntegerField()
    description = models.TextField(blank=True)
    publish_date = models.DateTimeField()
    serie = models.ForeignKey(Serie, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.title)