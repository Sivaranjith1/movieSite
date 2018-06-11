from django.shortcuts import render
from .serializers import *
from rest_framework import generics, mixins
from movies.models import *
from .pagination import GenrePagination

class MovieAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_fields = 'pk'
    serializer_class = MovieListSerializer
    queryset = Movie.objects.all()

    '''
    def get_queryset(self):
        qs = Movie.objects.all()

        return qs

    '''
    '''
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    '''

    def get_serializer_context(self, *args, **kwargs):
        return {'request': self.request}

class MovieDetail(generics.RetrieveAPIView):
    lookup_fields = 'pk'
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


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

class SerieListView(generics.ListAPIView):
    lookup_fields = 'pk'
    serializer_class = SerieListSerializer
    queryset = Serie.objects.all()

class SerieDetailView(generics.RetrieveAPIView):
    lookup_fields = 'pk'
    serializer_class = SerieDetailSerializer
    queryset = Serie.objects.all()

class EpisodeDetailView(generics.RetrieveAPIView):
    lookup_fields = 'pk'
    serializer_class = EpisodeDetailSerializer
    queryset = Episode.objects.all()

class GenreListView(generics.ListAPIView):
    serializer_class = GenreSerializer
    queryset = Genre.objects.all()
    pagination_class = GenrePagination

class GenreDetailView(generics.RetrieveAPIView):
    serializer_class = GenreDetailSerializer
    queryset = Genre.objects.all()