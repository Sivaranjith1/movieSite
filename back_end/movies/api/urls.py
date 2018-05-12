from django.conf.urls import url
from .views import *

app_name = 'movies'
urlpatterns = [
    url('^all$', MovieAPIView.as_view(), name='all movies'),
]
