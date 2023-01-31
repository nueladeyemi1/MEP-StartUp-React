import re
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout


from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import generics, permissions, status
from rest_framework.response import  Response
from rest_framework.views import APIView

from .utils import get_tokens_for_user

from .models import MepProjects
from .serializers import MepSerializer


class MepListView(generics.ListAPIView):
    queryset = MepProjects.objects.all()
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = MepSerializer
    def get(self, request, *args, **kwargs):
        posts = MepProjects.objects.all()
        serializer = MepSerializer(posts, many=True, context={"request":request})
        return Response(serializer.data)

class DetailMepView(generics.RetrieveAPIView):
    queryset = MepProjects.objects.all()
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = MepSerializer

class CreateMep(generics.CreateAPIView):
    queryset = MepProjects.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = MepSerializer

class DeleteMep(generics.DestroyAPIView):
    queryset = MepProjects.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = MepSerializer

class UpdateMep(generics.UpdateAPIView):
    queryset = MepProjects.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = MepSerializer


class SignInView(APIView):
    authentication_classes = []

    def post(self, request):

        if 'email' not in request.data or 'password' not in request.data:
            return Response({'msg': 'Credentials missing'}, status=status.HTTP_400_BAD_REQUEST)
        print('----', request.data)
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            auth_data = get_tokens_for_user(request.user)
            return Response({'msg': 'Login Success', 'email': email, **auth_data}, status=status.HTTP_200_OK)
            
        return Response({'msg': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)



class SignOutView(APIView):
    # authentication_classes = []
    #permission_classes = (permissions.IsAuthenticated,)
    def post(self, request):
        # if 'email' not in request.data:
        #     return Response({'msg': 'Credentials missing'}, status=status.HTTP_400_BAD_REQUEST)
        email = request.data.get('email')
        if request.user.is_authenticated:
            logout(request)
            return Response({'msg': 'Successfully Logged out', 'email': email}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'this user is not logged in', 'email': email})