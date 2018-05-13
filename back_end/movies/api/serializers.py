from rest_framework import serializers
from movies.models import Movie, Cover, Video, Genre

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
        read_only_fields = ['pk', 'url']
