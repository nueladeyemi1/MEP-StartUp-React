from rest_framework import serializers
from .models import MepProjects
class MepSerializer(serializers.ModelSerializer):
    class Meta:
        image_url = serializers.ImageField(required=False)
        model = MepProjects
        fields = ('id','name', 'feature', 'image', 'description')