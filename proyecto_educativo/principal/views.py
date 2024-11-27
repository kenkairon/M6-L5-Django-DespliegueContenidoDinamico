from django.shortcuts import render

# Create your views here.
def nombre(request):
    return render(request, 'index.html', {'messages':'Hola y bienvenido'})