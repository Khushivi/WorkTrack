# from django.shortcuts import render

# Create your views here.
# app/views.py
from rest_framework import viewsets
from .models import ActivityLog
from .serializers import ActivityLogSerializer

class ActivityLogViewSet(viewsets.ModelViewSet):
    queryset = ActivityLog.objects.all()
    serializer_class = ActivityLogSerializer

