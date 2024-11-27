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

10. Configuración del proyecto: settings.py

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

11. Crear la carpeta templates y el archivo base.html

   ```markdown
   ```python 
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
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
    </body>
    </html>
