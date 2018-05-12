from rest_framework import serializers
from movies.models import *

class CoverSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Cover
        fields = [
            'pk',
            'image',
        ]
        read_only_fields = ['pk']

class MovieSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField(read_only=True)
    coverImage = CoverSerializer(many=True)

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
        ]
        read_only_fields = ['pk', 'url']
