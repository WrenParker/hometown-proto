from business.models import Business, Keyword, StoreFront, Item
from rest_framework import viewsets, permissions
from .serializers import BusinessSerializers, KeywordSerializer, StoreFrontSerializer, InventorySerializer

class BusinessViewSet(viewsets.ModelViewSet):
  queryset = Business.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = BusinessSerializers

class KeywordViewSet(viewsets.ModelViewSet):
  queryset = Keyword.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = KeywordSerializer

class StoreFrontViewSet(viewsets.ModelViewSet):
  queryset = StoreFront.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = StoreFrontSerializer

class InventoryViewSet(viewsets.ModelViewSet):
  queryset = Item.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = InventorySerializer