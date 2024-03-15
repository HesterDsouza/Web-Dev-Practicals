from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'prac21_app/home.html')

def about(request):
    return render(request, 'prac21_app/about.html')