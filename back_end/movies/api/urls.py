from django.conf.urls import url
from .views import *

app_name = 'movies'
urlpatterns = [
    url('^all$', MovieAPIView.as_view(), name='all movies'),
    url('^cover/$', CoverAPIView.as_view(), name='cover_images'),
    url('^(?P<pk>\d+)/$', MovieDetail.as_view(), name='movie-detail'),

    url('^serie/$', SerieListView.as_view(), name='serie-list'),
    url('^serie/(?P<pk>\d+)/$', SerieDetailView.as_view(), name='serie-detail'),
    url('^episode/(?P<pk>\d+)/$', EpisodeDetailView.as_view(), name='episode-detail'),

]
