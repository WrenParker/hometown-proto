from rest_framework import serializers
from business.models import Business, Keyword, StoreFront, Item



class KeywordSerializer(serializers.ModelSerializer):
  class Meta:
    model = Keyword
    fields = "__all__"

class StoreFrontSerializer(serializers.ModelSerializer):
  class Meta:
    model = StoreFront
    fields = "__all__"

class InventorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Item
    fields = "__all__"


class BusinessSerializers(serializers.ModelSerializer):
  keywords = serializers.SlugRelatedField(
    many=True,
    read_only=False,
    queryset=Keyword.objects.all(),
    slug_field='keyword'
  )

  storefront = StoreFrontSerializer(many=True, read_only=True)
  inventory = InventorySerializer(many=True, read_only=True)

  class Meta:
    model = Business
    fields = "__all__"