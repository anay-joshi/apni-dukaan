from django.urls import path, include
from rest_framework.authtoken import views
from .views import home

urlpatterns = [

    path('', home, name='api.home'), # in short it means '' route is handled by home method from views
]