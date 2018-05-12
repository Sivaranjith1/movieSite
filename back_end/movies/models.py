from django.db import models

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

class Movie(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    publish_date = models.DateTimeField()
    coverImage = models.ForeignKey(Cover, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return str(self.title)


class Serie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    publish_date = models.DateTimeField()
    coverImage = models.ForeignKey(Cover, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return str(self.title)


class Episode(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    episode_number = models.IntegerField()
    description = models.TextField(blank=True)
    publish_date = models.DateTimeField()
    serie = models.ForeignKey(Serie, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return str(self.title)