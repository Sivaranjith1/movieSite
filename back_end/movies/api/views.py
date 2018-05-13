from django.shortcuts import render
from .serializers import CoverSerializer, MovieSerializer
from rest_framework import generics, mixins
from movies.models import Movie, Cover

class MovieAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_fields = 'pk'
    serializer_class = MovieSerializer

    def get_queryset(self):
        qs = Movie.objects.all()

        return qs

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def get_serializer_context(self, *args, **kwargs):
        return {'request': self.request}


class CoverAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_fields = 'pk'
    serializer_class = CoverSerializer

    def get_queryset(self):
        qs = Cover.objects.all()

        return qs

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def get_serializer_context(self, *args, **kwargs):
        return {'request': self.request}