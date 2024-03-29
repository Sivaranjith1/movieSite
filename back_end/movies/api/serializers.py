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
    url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Genre
        fields = [
            'url',
            'pk',
            'name',
        ]
        read_only_fields = ['pk',]

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)


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
            'pk',
            'title',
            'description',
            'coverImage',
            'genre',
        ]

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

class EpisodeListSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Episode
        fields = [
            'url',
            'pk',
            'title',
            'episode_number',
        ]

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

class SerieListSerializer(serializers.ModelSerializer):
    coverImage = CoverSerializer(many=False)
    genre = GenreSerializer(many=False)
    url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Serie
        fields = [
            'url',
            'pk',
            'title',
            'description',
            'coverImage',
            'genre'
        ]

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)


class SerieDetailSerializer(serializers.ModelSerializer):
    coverImage = CoverSerializer(many=False)
    genre = GenreSerializer(many=False)
    episode = EpisodeListSerializer(many=True)
    url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Serie
        fields = [
            'url',
            'pk',
            'title',
            'description',
            'upload_date',
            'coverImage',
            'genre',
            'episode',
        ]

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

class EpisodeDetailSerializer(serializers.ModelSerializer):
    video = VideoSerializer(many=False)
    serie = SerieListSerializer(many=False)
    url = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Episode
        fields = [
            'url',
            'pk',
            'title',
            'episode_number',
            'description',
            'publish_date',
            'video',
            'serie',
        ]

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

class GenreDetailSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField(read_only=True)
    serieGenre = SerieListSerializer(many=True)
    movieGenre = MovieListSerializer(many=True)

    class Meta:
        model = Genre
        fields = [
            'url',
            'pk',
            'name',
            'serieGenre',
            'movieGenre',
        ]
        read_only_fields = ['pk',]

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)