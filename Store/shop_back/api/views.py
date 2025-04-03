from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# 
# @api_view(['GET'])
# def product_list(request):
#     products = Product.objects.all()
#     serializer = ProductSerializer(products, many=True)
#     return Response(serializer.data)
@api_view(['GET'])
def product_list(request):
    show_all = request.GET.get('all', 'false').lower() == 'true'
    if show_all:
        products = Product.objects.all()  # Админ
    else:
        products = Product.objects.filter(is_active=True)  # только активные
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

# 
@api_view(['GET'])
def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=404)

# 
@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

# 
@api_view(['GET'])
def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    except Category.DoesNotExist:
        return Response({'error': 'Category not found'}, status=404)

# 
@api_view(['GET'])
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        show_all = request.GET.get('all', 'false').lower() == 'true'
        if show_all:
            products = Product.objects.filter(category=category)  # Админ
        else:
            products = Product.objects.filter(category=category, is_active=True)  # только активные
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    except Category.DoesNotExist:
        return Response({'error': 'Category not found'}, status=404)

