from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_estudiantes, name='lista_estudiantes'),
    path('estadisticas/', views.estadisticas_edades, name='estadisticas_edades'),
]