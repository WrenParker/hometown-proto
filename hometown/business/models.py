from django.db import models
from django.contrib.auth.models import User

class Business(models.Model):
  
  name = models.CharField(max_length=100)
  description = models.CharField(max_length=100)
  owner = models.ForeignKey(User, related_name="business", on_delete=models.CASCADE, null=True)
  phone = models.CharField(max_length=10)
  email = models.EmailField(max_length=100)
  storeType = models.CharField(max_length=100, null=True)
  created_at = models.DateTimeField(auto_now_add=True)

class Keyword(models.Model):
  business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name="keywords",blank=True, null=True)
  keyword = models.CharField(max_length=15)


class StoreFront(models.Model):
  business = models.ForeignKey(Business, related_name="storefront", on_delete=models.CASCADE)
  color = models.CharField(max_length=10)
  location = models.CharField(max_length=20, null=True)
  img = models.ImageField(null=True)

class Item(models.Model):
  business = models.ForeignKey(Business, related_name="inventory", on_delete=models.CASCADE)
  name = models.CharField(max_length = 25)
  description = models.CharField(max_length = 100)
  quantity = models.IntegerField(null=True)
  img = models.ImageField(null=True)
