from rest_framework import viewsets
from django.http import JsonResponse
from django.contrib.auth import get_user_model

from .serializers import OrderSerializer
from .models import Order
from django.views.decorators.csrf import csrf_exempt


def validate_user_session(id, token):
    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(pk=id)
        if user.session_token == token:
            return True
        else:
            return False

    except UserModel.DoesNotExist:
        return False
