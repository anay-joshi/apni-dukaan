from django.shortcuts import render

from rest_framework import viewsets

# Create your views here.
from .serializers import ProductSerializer

from .models import Product

class ProductViewSet(viewsets.ModelViewset):
    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer
