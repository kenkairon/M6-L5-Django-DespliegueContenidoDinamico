document.addEventListener('DOMContentLoaded', function () {
    // Escuchar el evento de apertura del modal
    $('#modalEstadisticas').on('shown.bs.modal', function () {
        fetch('estadisticas/') // URL de tu vista que devuelve JSON
            .then(response => response.json())
            .then(data => {
                // Obtener el contexto del lienzo
                const ctx = document.getElementById('graficaEdades').getContext('2d');

                // Limpiar cualquier gráfico previo
                if (window.myChart) {
                    window.myChart.destroy();
                }

                // Crear el gráfico
                window.myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Promedio', 'Mayores de 18', 'Menores de 18'],
                        datasets: [{
                            label: 'Cantidad',
                            data: [data.promedio, data.mayores, data.menores],
                            backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
                            borderColor: ['#388E3C', '#1976D2', '#FFA000'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            })
            .catch(error => {
                console.error('Error al obtener las estadísticas:', error);
                Swal.fire('Error', 'No se pudieron cargar las estadísticas.', 'error');
            });
    });
});

