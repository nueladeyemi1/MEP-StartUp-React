from rest_framework import serializers
from .models import MepProjects
class MepSerializer(serializers.ModelSerializer):
    class Meta:
        image_url = serializers.SerializerMethodField('get_image_url')
        model = MepProjects
        fields = ('id','name', 'feature', 'image', 'description')
        def get_image_url(self, obj):
            return obj.image.url