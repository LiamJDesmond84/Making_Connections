from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path("guess/", views.process),
    # path("results", views.results)
]