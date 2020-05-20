from business.models import Business, Keyword, StoreFront, Item
from rest_framework import viewsets, permissions
from .serializers import BusinessSerializers, KeywordSerializer, StoreFrontSerializer, InventorySerializer

class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):

        if request.method in permissions.SAFE_METHODS:
          
          return True

        return obj.owner == request.user

class BusinessViewSet(viewsets.ModelViewSet):

  permission_classes = [
    permissions.AllowAny
  ]

  queryset = Business.objects.all()

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