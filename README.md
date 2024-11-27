# M6-L5-Django-DespliegueContenidoDinamico
Educativo y de Aprendizaje Personal
---

## Tabla de Contenidos
- [Requisitos](#requisitos)
- [Configuración del Entorno](#configuración-del-entorno)
- [Activación del Entorno](#Activación-del-Entorno)
- [Instalar Django y Guardar dependencias](Instalar-Django-y-Guardar-dependencias)
- [Pasos del Proyecto](#pasos-del-proyecto)
  - [Configuración Inicial](#configuración-inicial)
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
10. vamos a la configuración proyecto_eductativo/setting.py
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
## Creación de vistas y modelos
11. creo una carpeta  templates .... templates/base.html
    ```bash
    {% load static %}
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{% block title %}Dashboard{% endblock %}</title>
        {% load bootstrap4 %}
        <link rel="stylesheet" href="{% static 'css/styles.css' %}">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
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
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ">
                        <a class="custom-nav-item rounded-sm" href="#">
                            <i class="bi bi-person-circle"></i> Perfil
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="custom-nav-item rounded-sm" href="#">
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
                        <a class="nav-link active" href="#"><i class="fas fa-home"></i> Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-users"></i> Estudiantes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-book"></i> Cursos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-chart-line"></i> Reportes</a>
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
                                <i class="fas fa-users fa-3x text-primary mb-3"></i>
                                <h5 class="card-title">Estudiantes</h5>
                                <p class="card-text">Gestión de todos los estudiantes registrados.</p>
                                <a href="#" class="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow">
                            <div class="card-body text-center">
                                <i class="fas fa-book fa-3x text-success mb-3"></i>
                                <h5 class="card-title">Cursos</h5>
                                <p class="card-text">Gestiona todos los cursos disponibles.</p>
                                <a href="#" class="btn btn-success">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow">
                            <div class="card-body text-center">
                                <i class="fas fa-chart-line fa-3x text-warning mb-3"></i>
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
                    <a href="#" class="text-white mr-3">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-white mr-3">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-white mr-3">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="text-white mr-3">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>

        {% bootstrap_javascript jquery="full" %}
    </body>

    </html>
12. principal/views.py
    ```bash
    from django.shortcuts import render

    # Create your views here.
    def nombre(request):
        return render(request, 'index.html', {'messages':'Hola y bienvenido'})

13. proyecto_educativo/urls.py
    ```bash
    from django.contrib import admin
    from django.urls import path, include
    from principal import views

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('',views.nombre, name='nombre'),
    ]

14. python manage.py migrate

15. Creamos en la aplicacion  principal/templates/index.html
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
16. Crear static/css/styles.css
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






