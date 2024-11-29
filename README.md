# M6-L5-Django-DespliegueContenidoDinamico
Educativo y de Aprendizaje Personal
---

## Tabla de Contenidos
- [Requisitos](#requisitos)
- [Configuración del Entorno](#configuración-del-entorno)
- [Activación del Entorno](#Activación-del-Entorno)
- [Configuración Inicial](#configuración-inicial)
- [Pasos del Proyecto](#pasos-del-proyecto)
  - [Configuración del Proyecto](#configuración-del-proyecto)
  - [Creación de Vistas y Modelos](#creación-de-vistas-y-modelos)
 

---

## Requisitos

- Python 3.9 o superior
- Django 4.0 o superior
- Bootstrap 5

---

## Configuración del Entorno

1. Crear el entorno virtual:
   ```bash
   python -m venv venv


## Activación del Entorno

2. Activar el entorno virtual:
    ### Windows
    ```bash
    venv\Scripts\activate

## Configuración Inicial
## Instalar Django y Guardar dependencias

3. Intalación Django
    ```bash
    pip install django

4. Instalamos la actualizacion de pip
    ```bash
    python.exe -m pip install --upgrade pip

4. Instalamos boostrap 4
   ```bash
   pip install beautifulsoup4==4.12.3 Django==5.1.3 django-bootstrap4==24.4 soupsieve==2.6

## Guardar las dependencias
5. Instalación dependencias
    ```bash
   pip freeze > requirements.txt

## Pasos del Proyecto
6. Crear el Proyecto
    ```bash
    django-admin startproject proyecto_educativo

7. Ingresar al directorio del Proyecto
    ```bash
    cd proyecto_educativo

8. Creamos la Aplicación principal
    ```bash
    python manage.py startapp principal

## Configuración del Proyecto

9. Conectar el proyecto con la aplicación: Agregar 'principal' en la lista INSTALLED_APPS dentro del archivo proyecto_educativo/settings.py:

    ```bash
    INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'principal',
    'bootstrap4',
    ]

10. Configuración del proyecto: proyecto_educativo/settings.py en la sección TEMPLATES

    ```bash
    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [BASE_DIR,'templates'],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        },
    ]
    
11. creo una carpeta templates/base.html y agregas {% load static %} al principio lo descomentas y funciona
    ```bash
    <!--{% load static %}-->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{% block title %}Dashboard{% endblock %}</title>
        {% load bootstrap4 %}
        <link rel="stylesheet" href="{% static 'css/styles.css' %}">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
        <!-- SweetAlert2 -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        {% bootstrap_css %}
    </head>
    <body class="bg-light">
        <!-- Header -->
        <header class="navbar navbar-expand-lg navbar-dark bg-primary p-3">
            <a class="navbar-brand" href="#">EduDashboard</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="custom-nav-item rounded-sm" href="#">
                            <i class="bi bi-person-circle"></i> Perfil
                        </a>
                    </li>
                    <li class="nav-item">
                        <a id="logout" class="custom-nav-item rounded-sm" href="javascript:void(0);">
                            <i class="bi bi-box-arrow-right"></i> Cerrar sesión
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="d-flex">
            <!-- Sidebar -->
            <nav class="bg-light border-right" style="width: 250px; height: 100vh;">
                <ul class="nav flex-column p-3">
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><i class="bi bi-house-door"></i> Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-people"></i> Estudiantes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-book"></i> Cursos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-bar-chart"></i> Reportes</a>
                    </li>
                </ul>
            </nav>
            <!-- Main Content -->
            <main class="flex-grow-1 p-4">
                {% block content %}
                <div class="card shadow mb-4">
                    <div class="card-header bg-info text-white">
                        <h2 class="h4 mb-0">Bienvenido al Dashboard</h2>
                    </div>
                    <div class="card-body">
                        <p>Aquí puedes administrar tus datos de estudiantes, cursos y más. Utiliza el menú lateral para
                            navegar por las secciones.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow">
                            <div class="card-body text-center">
                                <i class="bi bi-people-fill text-primary fs-1 mb-3"></i>
                                <h5 class="card-title">Estudiantes</h5>
                                <p class="card-text">Gestión de todos los estudiantes registrados.</p>
                                <a href="#" class="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow">
                            <div class="card-body text-center">
                                <i class="bi bi-journal-bookmark-fill text-success fs-1 mb-3"></i>
                                <h5 class="card-title">Cursos</h5>
                                <p class="card-text">Gestiona todos los cursos disponibles.</p>
                                <a href="#" class="btn btn-success">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow">
                            <div class="card-body text-center">
                                <i class="bi bi-graph-up-arrow text-warning fs-1 mb-3"></i>
                                <h5 class="card-title">Reportes</h5>
                                <p class="card-text">Consulta los reportes generados.</p>
                                <a href="#" class="btn btn-warning">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
                {% endblock %}
            </main>
        </div>
        <!-- Footer -->
        <footer class="bg-dark text-white text-center p-4 mt-auto">
            <div class="container">
                <p class="mb-0">© 2024 EduDashboard - Todos los derechos reservados.</p>
                <div class="social-icons mt-3">
                    <a href="#" class="text-white me-3">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="text-white me-3">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="text-white me-3">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="#" class="text-white me-3">
                        <i class="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
        {% bootstrap_javascript jquery="full" %}
        <!-- JavaScript principal -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="{% static 'js/main.js' %}" defer></script>
    </body>

</html>
## Creación de vistas y modelos

12. principal/views.py
    ```bash
    from django.shortcuts import render

    def index(request):
    context = {
        'message': 'Bienvenido a EduDashboard',
        'description': 'Esta plataforma te ayuda a organizar información educativa de manera sencilla.',
        'cta': 'Explorar Estudiantes',
        'cta_link': '/estudiantes/'
    }
    return render(request, 'principal/index.html', context)

13. principal/urls.py
    ```bash
    from django.urls import path
    from . import views
    urlpatterns = [
        path('', views.index, name='index'),
    ]
14. proyecto_educativo/urls.py
    ```bash
    from django.contrib import admin
    from django.urls import path, include
    from principal import views

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('',views.nombre, name='nombre'),
    ]
15. python manage.py migrate
16. Creamos en la aplicacion  principal/templates/index.html
    ```bash
    {% extends 'base.html' %}
    {% block title %}Inicio{% endblock %}
    {% block content %}
    <div class="jumbotron">
        <h1 class="display-4 alert alert-primary">¡Hola Mundo!</h1>
        <!-- AQui va poner la variable-->
        <p class="lead">{{ message }}</p>
        <hr class="my-4">
        <p class="alert alert-success">Este es un proyecto educativo con Django.</p>
    </div>
    {% endblock %}

17. En el proyecto_educativo/settings.py para poder trabajar con la carpeta static y los csss
    ```bash
        import os
        # Internationalization
        # https://docs.djangoproject.com/en/5.1/topics/i18n/

        LANGUAGE_CODE = 'en-us'

        TIME_ZONE = 'UTC'

        USE_I18N = True

        USE_TZ = True


        # Static files (CSS, JavaScript, Images)
        # https://docs.djangoproject.com/en/5.1/howto/static-files/

        STATIC_URL = 'static/'
        STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

18. crear la carpeta static/css/styles.css
    ```bash
    /* Estilo para los elementos del menú sin la clase nav-link */
    .custom-nav-item {
        font-size: 16px;
        color: #ffffff;
        /* Color blanco para el texto */
        padding: 8px 16px;
        /* Espaciado interno para los enlaces */
        display: flex;
        align-items: center;
        text-decoration: none;
        /* Eliminamos el subrayado */
        transition: background-color 0.3s, color 0.3s;
        /* Transición suave para los efectos de hover */
    }

    /* Efecto de hover para los elementos */
    .custom-nav-item:hover {
        background-color: rgba(255, 255, 255, 0.1);
        /* Fondo suave al pasar el ratón */
        color: #f1f1f1;
        /* Color más claro al pasar el ratón */
    }

    /* Estilo para los iconos dentro de los enlaces */
    .custom-nav-item i {
        margin-right: 8px;
        /* Espacio entre el icono y el texto */
    }

    /* Efecto de hover para los elementos */
    .custom-nav-item:hover {
        background-color: #00bcd4;
        /* Fondo celeste al pasar el ratón */
        color: #ffffff;
        /* Color blanco al pasar el ratón */
    }


    /* Efecto de transición para enlaces y botones */
    .nav-link,
    .navbar-toggler {
        transition: all 0.3s ease;
    }

    .nav-link:hover,
    .navbar-toggler:hover {
        background-color: rgba(255, 255, 255, 0.1);
        /* Fondo al pasar el mouse */
        border-radius: 5px;
        /* Bordes redondeados */
    }

    /* Estilo para la barra de navegación */
    nav {
        background-color: #f8f9fa;
        /* Fondo claro */
        border-right: 1px solid #ddd;
        /* Borde sutil */
    }

    /* Estilo para los elementos de la lista */
    .nav-item {
        transition: background-color 0.3s, transform 0.3s;
        /* Transición suave */
    }

    /* Estilo para los enlaces */
    .nav-link {
        color: #333;
        /* Color oscuro para los enlaces */
        font-weight: 500;
        padding: 12px 20px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        /* Centra el icono y el texto */
        transition: color 0.3s, background-color 0.3s;
        /* Transiciones suaves */
    }

    /* Iconos y texto */
    .nav-link i {
        margin-right: 10px;
        /* Espacio entre el icono y el texto */
    }

    /* Efecto hover en el enlace */
    .nav-link:hover {
        background-color: #3498db;
        /* Fondo azul elegante */
        color: #fff;
        /* Color blanco para el texto */
        transform: translateX(10px);
        /* Desplazamiento ligero hacia la derecha */
    }

    /* Efecto hover en el item de la lista */
    .nav-item:hover {
        background-color: #f1f1f1;
        /* Fondo claro al pasar el mouse */
        border-radius: 5px;
        /* Bordes redondeados */
    }

    /* Cuando el enlace está activo (seleccionado) */
    .nav-link.active {
        background-color: #3498db;
        /* Fondo azul cuando está activo */
        color: #fff;
        /* Texto blanco */
    }

    /* Efecto hover para iconos también */
    .nav-link i {
        transition: transform 0.3s;
        /* Suaviza el movimiento del icono */
    }

    .nav-link:hover i {
        transform: rotate(10deg);
        /* Rotación ligera del icono al pasar el mouse */
    }

    /* Estilos personalizados para el SweetAlert */
    .custom-popup {
        border-radius: 10px;
        /* Bordes redondeados */
        font-family: 'Poppins', sans-serif;
        /* Fuente personalizada */
    }

    .custom-title {
        color: #0062cc;
        /* Color del título */
        font-weight: bold;
        /* Negrita en el título */
    }

    .custom-confirm-button {
        background-color: #28a745;
        /* Color de fondo verde */
        border-color: #28a745;
        /* Borde verde */
        color: white;
        font-weight: bold;
        border-radius: 5px;
        /* Bordes redondeados en el botón */
        padding: 10px 20px;
        /* Más relleno en el botón */
    }

    .custom-cancel-button {
        background-color: #dc3545;
        /* Color de fondo rojo */
        border-color: #dc3545;
        /* Borde rojo */
        color: white;
        font-weight: bold;
        border-radius: 5px;
        padding: 10px 20px;
    }

    /* Aumentar el tamaño de los iconos */
    .swal2-icon {
        font-size: 40px;
        /* Aumenta el tamaño del icono */
        transition: transform 0.5s ease-in-out;
        /* Añade una transición suave para el efecto */
    }

    /* Estilo para girar el icono de advertencia como manecillas de reloj */
    .rotate-icon-clockwise {
        animation: rotateClockwise 2s infinite linear;
        /* Gira en sentido horario */
    }

    /* Animación de rotación similar a las manecillas del reloj */
    @keyframes rotateClockwise {
        0% {
            transform: rotate(0deg);
            /* Empieza en 0 grados */
        }

        100% {
            transform: rotate(360deg);
            /* Completa una vuelta completa (360 grados) */
        }
    }

    /* Estilo para girar el icono de advertencia como manecillas de reloj */
    .rotate-icon-clockwise {
        animation: rotateClockwise 2s infinite linear;
        /* Gira en sentido horario */
    }

    /* Animación de rotación similar a las manecillas del reloj */
    @keyframes rotateClockwise {
        0% {
            transform: rotate(0deg);
            /* Empieza en 0 grados */
        }

        100% {
            transform: rotate(360deg);
            /* Completa una vuelta completa (360 grados) */
        }
    }
    /* Footer Styles */
    footer {
        background-color: #343a40;
        /* Fondo oscuro */
        color: #fff;
        /* Color de texto blanco */
        padding: 40px 0;
        /* Padding mayor para más espacio */
        font-size: 14px;
        /* Tamaño de fuente pequeño y legible */
    }

    footer .container {
        max-width: 1140px;
        /* Limitar el ancho del footer */
        margin: 0 auto;
    }

    /* Ajustes de los iconos sociales */
    footer .social-icons a {
        font-size: 20px;
        /* Tamaño de los iconos */
        transition: transform 0.3s, color 0.3s;
        /* Transición suave */
    }

    footer .social-icons a:hover {
        color: #3498db;
        /* Color azul cuando se pasa el mouse */
        transform: translateY(-5px);
        /* Elevación del icono al pasar el mouse */
    }

    /* Espaciado entre iconos */
    footer .social-icons a:not(:last-child) {
        margin-right: 15px;
        /* Espacio entre los iconos */
    }

    /* Estilo para el texto en el pie de página */
    footer p {
        margin-bottom: 0;
        /* Sin margen inferior */
    }

    /* Efecto de sombra suave en el pie de página */
    footer {
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    }
19. Activamos el Servidor
    ```bash
    python manage.py runserver

20. Agregamos js static/js e ingresamos estos datos javascript
    ```bash
    // Event listener para el botón de cerrar sesión
    document.getElementById('logout').addEventListener('click', function (e) {
        e.preventDefault(); // Evita la acción por defecto de seguir el enlace

        // Mostrar el mensaje de confirmación usando SweetAlert
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Deseas cerrar sesión?",
            iconHtml: '<i class="bi bi-clock-fill" style="font-size: 80px; color: #f39c12;"></i>', // Icono de Bootstrap
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: 'custom-popup', // Personaliza el cuadro de la alerta
                title: 'custom-title', // Personaliza el título
                confirmButton: 'custom-confirm-button', // Personaliza el botón de confirmar
                cancelButton: 'custom-cancel-button' // Personaliza el botón de cancelar
            },
            willOpen: () => {
                // Añadir la clase de rotación tipo manecillas de reloj al icono cuando se abre la alerta
                const icon = document.querySelector('.swal2-icon');
                if (icon) {
                    icon.classList.add('rotate-icon-clockwise'); // Añadir la clase de rotación tipo reloj
                }
            },
            willClose: () => {
                // Eliminar la clase de rotación cuando la alerta se cierre
                const icon = document.querySelector('.swal2-icon');
                if (icon) {
                    icon.classList.remove('rotate-icon-clockwise'); // Eliminar la clase de rotación
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Añadir un retraso antes de redirigir para que el usuario tenga tiempo de ver la alerta
                setTimeout(() => {
                    window.location.href = '/logout'; // Cambia '/logout' por la URL real de logout
                }, 1000); // Retraso de 1000 milisegundos (1 segundo)
            }
        });
    });

21. en el templates principal vamos agregar un la carpeta include

22. Vamos a entrar a la carpete proyecto_educativo
    ```bash
    cd proyecto_educativo

23. Vamos a crear una aplicación llamada estudiantes
    ```bash
    python manage.py startapp estudiantes

24. Creamos en estudiantes/models.py 
    ```bash
    from django.db import models

    class Estudiante(models.Model):
        nombre = models.CharField(max_length=100)
        apellido = models.CharField(max_length=100)
        edad = models.PositiveIntegerField()
        email = models.EmailField(unique=True)

        def __str__(self):
            return f"{self.nombre} {self.apellido}"
25. Hacemos las migraciones correspondiente
    ```bash
    python manage.py makemigrations
    python manage.py migrate

26. EN aplicacion estudiantes creo un templates/estudiantes/lista_estudiantes.html
    ```bash
    {% extends 'base.html' %}
    {% block title %}Lista de Estudiantes{% endblock %}
    {% block content %}
    <h1 class="my-4">Estudiantes</h1>
    <table class="table table-bordered table-striped" style="border-radius: 10px; overflow: hidden;">
        <!-- Encabezado con bordes redondeados -->
        <thead class="bg-dark text-white" style="border-top-left-radius: 10px; border-top-right-radius: 10px;">
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {% for estudiante in estudiantes %}
            <tr>
                <td>{{ estudiante.nombre }}</td>
                <td>{{ estudiante.apellido }}</td>
                <td>{{ estudiante.email }}</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
    {% endblock %}

27. en la aplicación estudiantes/views.py , en la vista importo el modelo y lo renderizo, y creo la función lista_estudiantes
    ```bash
    from django.shortcuts import render
    from .models import Estudiante

    def lista_estudiantes(request):
        estudiantes = Estudiante.objects.all()
        return render(request, 'estudiantes/lista_estudiantes.html', {'estudiantes': estudiantes})

28. en la aplicación estudiante vamos a crear una urls.py, llamamos las vistas, e invoco la función  lista_estudiantes
    ```bash
    from django.urls import path
    from . import views

    urlpatterns = [
        path('', views.lista_estudiantes, name='lista_estudiantes'),
    ]

  
29. proyecto_educativo/setting.py agregamos 'estudiantes',
    ```bash
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'principal',
        'estudiantes',
        'bootstrap4',
    ]
30. proyecto_educativo/urls.py
    ```bash
    from django.contrib import admin
    from django.urls import path, include
    from principal import views

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('principal.urls')),  # Inicio
        path('estudiantes/', include('estudiantes.urls')),  # Estudiantes
    ]

31. Acciones de Migracion
    ```bash
    python manage.py makemigrations
    python manage.py migrate

32. Llenamos datos  en la base de datos
    ```bash
    python manage.py shell

    from estudiantes.models import Estudiante

    datos_estudiantes = [
        {"nombre": "Juan", "apellido": "Pérez", "edad": 20, "email": "juan.perez@gmail.com"},
        {"nombre": "Ana", "apellido": "Gómez", "edad": 22, "email": "ana.gomez@gmail.com"},
        {"nombre": "Carlos", "apellido": "López", "edad": 21, "email": "carlos.lopez@gmail.com"},
        {"nombre": "María", "apellido": "Martínez", "edad": 23, "email": "maria.martinez@gmail.com"},
        {"nombre": "Luis", "apellido": "Fernández", "edad": 19, "email": "luis.fernandez@gmail.com"},
    ]

    for dato in datos_estudiantes:
        Estudiante.objects.create(**dato)

    print("Estudiantes cargados exitosamente.")

33. Creamos el superusuario
    ```bash
    createsuperuser 

33. estudiantes/admin.py 
    ```bash
    from django.contrib import admin
    from .models import Estudiante
    # Register your models here.
    admin.site.register(Estudiante)

34. Activamos el servidor
    ```bash
    python manage.py runserver

35. Verificamos las paginas http://127.0.0.1:8000/ y http://127.0.0.1:8000/admin
    ```bash
    admin
    admin1234

36. Tenemos que estar en la carpeta principal de principal proyecto_educativo
    ```bash
    cd proyecto_educativo
37. Creamos la aplicación cursos
    ```bash
    python manage.py startapp cursos

38. proyecto_eductativo/settings.py
    ```bash
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'principal',
        'estudiantes',
        'cursos',
        'bootstrap4',
    ]
39. No vamos cursos/models.py
    ```bash
    from django.db import models

    class Curso(models.Model):
        nombre = models.CharField(max_length=150)
        descripcion = models.TextField()
        duracion = models.PositiveIntegerField(help_text="Duración en horas")

        def __str__(self):
            return self.nombre

40. Ahora ejecutamos las migraciones
     ```bash
     python manage.py makemigrations
     python manage.py migrate

41. Poblamos la base de datos cursos
    ```bash
    from cursos.models import Cursos

    datos_cursos = [
        {"nombre": "Matemáticas", "descripcion": "Curso avanzado de matemáticas.", "duracion": 120},
        {"nombre": "Historia", "descripcion": "Estudio de las civilizaciones antiguas.", "duracion": 90},
        {"nombre": "Programación", "descripcion": "Introducción a la programación en Python.", "duracion": 150},
        {"nombre": "Inglés", "descripcion": "Curso intensivo de inglés intermedio.", "duracion": 100},
        {"nombre": "Ciencias", "descripcion": "Curso de biología y química básica.", "duracion": 80},
    ]

    for dato in datos_cursos:
        Cursos.objects.create(**dato)

    print("Cursos cargados exitosamente.")

42. creamos el templates/cursos/listas_cursos.html
    ```bash
    {% extends 'base.html' %}
    {% block title %}Lista de Cursos{% endblock %}
    {% block content %}
    <h1 class="mt-4">Cursos</h1>
    <div class="table-responsive">
        <table class="table table-bordered table-striped" style="border-radius: 10px; overflow: hidden;">
            <!-- Encabezado con bordes redondeados -->
            <thead class="bg-dark text-white" style="border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <tr>
                    <th>Nombre</th>
                    <th>Duración (horas)</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {% for curso in cursos %}
                <tr>
                    <td>{{ curso.nombre }}</td>
                    <td>{{ curso.duracion }}</td>
                    <td>{{ curso.descripcion }}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
    {% endblock %}
43. Configurar la vista de cursos/views.py
    ```bash
    from django.shortcuts import render
    from .models import Curso

    def lista_cursos(request):
        cursos = Curso.objects.all()
        return render(request, 'cursos/lista_cursos.html', {'cursos': cursos})

44. Agregale a cursos una urls.py  cursos/urls.py
    ```bash
    from django.urls import path
    from . import views

    urlpatterns = [
        path('', views.lista_cursos, name='lista_cursos'),
    ]

45. Trabajaremos cursos/admin.py
    ```bash
    from .models import Curso
    # Register your models here.
    admin.site.register(Curso)

46. Visitamos la página http://127.0.0.1:8000/admin 


47. Tenemos que estar en la carpeta principal de principal proyecto_educativo
    ```bash
    cd proyecto_educativo

48. Creamos la aplicación reportes
    ```bash
    python manage.py startapp reportes

49. proyecto_eductativo/settings.py
    ```bash
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'principal',
        'estudiantes',
        'cursos',
        'reportes',
        'bootstrap4',
    ]
50. No vamos reportes/models.py
    ```bash
    from django.db import models

    class Reporte(models.Model):
        titulo = models.CharField(max_length=200)
        contenido = models.TextField()
        fecha_creacion = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.titulo

51. Ahora ejecutamos las migraciones
     ```bash
     python manage.py makemigrations
     python manage.py migrate

52. Ahora Poblamos la base de datos con Reportes 
    ```bash
    from reportes.models import Reporte
    datos_reportes = [
        {"titulo": "Reporte de Estudiantes", "contenido": "Este es un reporte detallado de estudiantes."},
        {"titulo": "Progreso de Cursos", "contenido": "Reporte sobre el progreso en los cursos actuales."},
        {"titulo": "Evaluación Mensual", "contenido": "Resumen de evaluaciones realizadas en el último mes."},
        {"titulo": "Reporte Anual", "contenido": "Resumen anual de todas las actividades realizadas."},
        {"titulo": "Estadísticas Generales", "contenido": "Estadísticas generales de la plataforma educativa."},
    ]

    for dato in datos_reportes:
        Reporte.objects.create(**dato)

    print("Reportes cargados exitosamente.")
53. creamos el templates/reportes/listas_reportes.html
    ```bash
    <table class="table table-bordered table-striped" style="border-radius: 10px; overflow: hidden;">
        <!-- Encabezado con bordes redondeados -->
        <thead class="bg-dark text-white" style="border-top-left-radius: 10px; border-top-right-radius: 10px;">
            <tr>
                <th scope="col">Título</th>
                <th scope="col">Fecha de Creación</th>
            </tr>
        </thead>
        <tbody>
            {% for reporte in reportes %}
            <tr>
                <td>{{ reporte.titulo }}</td>
                <td>{{ reporte.fecha_creacion }}</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
    <a href="{% url 'index' %}" class="btn btn-success">
        <i class="bi bi-arrow-clockwise"></i> Volver
    </a>
    {% endblock %}
54. Configurar la vista de reportes/views.py
    ```bash
    from django.shortcuts import render
    from .models import Reporte

    def lista_reportes(request):
        reportes = Reporte.objects.all()
        return render(request, 'reportes/lista_reportes.html', {'reportes': reportes})

55. Agregale a cursos una urls.py  reportes/urls.py
    ```bash
    from django.urls import path
    from . import views

    urlpatterns = [
        path('', views.lista_reportes, name='lista_reportes'),
    ]

56. Trabajaremos reportes/admin.py
    ```bash
    from django.contrib import admin
    from .models import Reporte
    # Register your models here.
    .site.register(Reporte)

57. Corremos el Servidor 
    ```bash
    python manage.py runserver

58. Visitamos la página http://127.0.0.1:8000/admin y http://127.0.0.1:8000 


















