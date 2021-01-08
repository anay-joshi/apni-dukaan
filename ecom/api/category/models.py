from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50) # created a column in cateory table
    description = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True) # created_at is a one time thing
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return self.name
    