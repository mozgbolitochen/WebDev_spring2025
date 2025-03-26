# from django.urls import path
# from .views import (
#     ProductListCreateView, ProductDetailView,
#     CategoryListCreateView, CategoryDetailView, CategoryProductsView
# )

# urlpatterns = [
#     path('products/', ProductListCreateView.as_view(), name='product-list'),
#     path('products/<int:id>/', ProductDetailView.as_view(), name='product-detail'),
#     path('categories/', CategoryListCreateView.as_view(), name='category-list'),
#     path('categories/<int:id>/', CategoryDetailView.as_view(), name='category-detail'),
#     path('categories/<int:id>/products/', CategoryProductsView.as_view(), name='category-products'),
# ]
from django.urls import path
from .views import product_list, product_detail, category_list, category_detail, category_products

urlpatterns = [
    path('products/', product_list, name='product-list'),
    path('products/<int:id>/', product_detail, name='product-detail'),
    path('categories/', category_list, name='category-list'),
    path('categories/<int:id>/', category_detail, name='category-detail'),
    path('categories/<int:id>/products/', category_products, name='category-products'),
]
