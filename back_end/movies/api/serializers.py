from rest_framework import serializers
from movies.models import Movie, Cover, Video, Genre, Serie, Episode

class CoverSerializer(serializers.ModelSerializer):
    #url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Cover
        fields = [
     #       'url',
            'pk',
            'image',
        ]
        read_only_fields = ['pk', ]#'url',]

    '''
    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)
    '''

class VideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Video
        fields = [
            'pk',
            'fil',
            'upload_date',
        ]
        read_only_fields = ['pk',]

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = [
            'pk',
            'name',
        ]
        read_only_fields = ['pk',]


class MovieSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField(read_only=True)
    coverImage = CoverSerializer(many=False)
    video = VideoSerializer(many=False)
    genre = GenreSerializer(many=False)
    
    class Meta:
        model = Movie
        fields = [
            'url',
            'pk',
            'video',
            'title',
            'description',
            'publish_date',
            'coverImage',
            'genre',
        ]
        read_only_fields = ['pk', ]#'url']

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

    def create(self, vd):
        videoAdd = vd.pop('video')
        genreAdd = vd.pop('genre')
        coverAdd = vd.pop('coverImage')

        videoModel = Video.objects.create(videoAdd)
        genreModel = Genre.objects.create(genreAdd)
        coverModel = Cover.objects.create(coverAdd)

        movieModel = Movie.objects.create(
            video = videoModel,
            coverImage = coverModel,
            genre = genreModel,
            **vd
        )

        return movieModel

class MovieListSerializer(serializers.ModelSerializer):
    coverImage = CoverSerializer(many=False)
    genre = GenreSerializer(many=False)
    url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Movie
        fields = [
            'url',
            'title',
            'description',
            'coverImage',
            'genre',
        ]

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

class EpisodeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields = [
            'title',
            'episode_number',
            'description',
        ]

class EpisodeDetailSerializer(serializers.ModelSerializer):
    video = VideoSerializer(many=False)
    serie = SerieListSerializer(many=False)
    
    class Meta:
        model = Episode
        fields = [
            'title',
            'episode_number',
            'description',
            'publish_date',
            'video',
            'serie',
        ]

class SerieListSerializer(serializers.ModelSerializer):
    coverImage = CoverSerializer(many=False)
    genre = GenreSerializer(many=False)

    class Meta:
        model = Serie
        fields = [
            'title',
            'description',
            'coverImage',
            'genre'
        ]


class SerieDetailSerializer(serializers.ModelSerializer):
    coverImage = CoverSerializer(many=False)
    genre = GenreSerializer(many=False)
    episode = EpisodeListSerializer(many=True)

    class Meta:
        model = Serie
        fields = [
            'title',
            'description',
            'upload_date',
            'coverImage',
            'genre',
            'episode',
        ]