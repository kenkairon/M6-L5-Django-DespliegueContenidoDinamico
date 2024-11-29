from django.shortcuts import render
from django.http import JsonResponse
from .models import Estudiante

def lista_estudiantes(request):
    estudiantes = Estudiante.objects.all()
    return render(request, 'estudiantes/lista_estudiantes.html', {'estudiantes': estudiantes})

def estadisticas_edades(request):
    estudiantes = Estudiante.objects.all()
    edades = [estudiante.edad for estudiante in estudiantes]
    total = len(edades)
    promedio = sum(edades) / total if total > 0 else 0
    mayores = sum(1 for edad in edades if edad >= 18)
    menores = total - mayores

    data = {
        'total': total,
        'promedio': promedio,
        'mayores': mayores,
        'menores': menores
    }
    return JsonResponse(data)



