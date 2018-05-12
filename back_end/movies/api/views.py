from django.shortcuts import render
from .serializers import MovieSerializer
from rest_framework import generics, mixins
from movies.models import *

class MovieAPIView(generics.ListAPIView):
    lookup_fields = 'pk'
    serializer_class = MovieSerializer

    def get_queryset(self):
        qs = Movie.objects.all()

        return qs

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def get_serializer_context(self, *args, **kwargs):
        return {'request': self.request}
