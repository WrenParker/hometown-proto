from django.db import models

class Business(models.Model):
  name=models.CharField(max_length=100)
  owner=models.CharField(max_length=100)
  phone=models.CharField(max_length=10)
  email=models.EmailField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)
