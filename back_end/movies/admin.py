from django.contrib import admin
from .models import *


class VideoAdmin(admin.ModelAdmin):
    list_display = ['upload_date', 'fil']

admin.site.register(Video, VideoAdmin)

class CoverAdmin(admin.ModelAdmin):
    list_display = ['image']

admin.site.register(Cover, CoverAdmin)

class GenreAdmin(admin.ModelAdmin):
    list_display = ['name']

admin.site.register(Genre, GenreAdmin)

class MovieAdmin(admin.ModelAdmin):
    list_display = ['title']

admin.site.register(Movie, MovieAdmin)

class EpisodeAdmin(admin.StackedInline):
    model = Episode
    extra = 1


class SerieAdmin(admin.ModelAdmin):
    list_display = ['title']
    
    inlines = [
        EpisodeAdmin,
    ]

admin.site.register(Serie, SerieAdmin)
