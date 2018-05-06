from django.db import models

# Create your models here.
class Video(models.Model):
    fil = models.FileField()
    upload_date = modles.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.fil)

class Movie (models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    title = modles.CharField(max_length=100)
    description = models.TextField(blank=True)
    publish_date = models.DateTimeField()

    def __str__(self):
        return str(self.title)
