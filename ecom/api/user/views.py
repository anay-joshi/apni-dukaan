from django.shortcuts import render

# Create your views here.
import random


def generate_session_token(length=10):

    # 1st loop for lower case alpha , 2nd loop = numbers , 3rd loop for genearting 10 digit token
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(97, 123)] + [str(i) for i in range(10)])for _ in range(length))
