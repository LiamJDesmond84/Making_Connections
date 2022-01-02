from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse

def index(request):
    return redirect("/register")

def register(request):
    return HttpResponse("placeholder for users to create a new user record")

def login(request):
    return HttpResponse("placeholder for users to log in")

def users(request):
    return HttpResponse("placeholder to later display all the list of users")