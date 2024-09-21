//https://docs.google.com/spreadsheets/d/1jShCYuehjLvxboJXRZ0Hak3dowp1LajLafkKcw6NoIQ/edit?usp=sharing
//AKfycbyziymwW00uaYhV0Z9IaMGRuBji599hm_ltxLrG5Mg
//https://script.google.com/macros/s/AKfycbx8M6CfSYzj_LQwt2_KuYKdxUcFGnDNlj9cBrq35oi2g0Y3LGdZOgYHYUZzBHmr8I6g/exec

// Función para manejar el contador de visitas
function updateVisitCount() {
    const apiUrl = "https://script.google.com/macros/s/AKfycbx8M6CfSYzj_LQwt2_KuYKdxUcFGnDNlj9cBrq35oi2g0Y3LGdZOgYHYUZzBHmr8I6g/exec"; // La URL que copiaste del despliegue

    // Realizar una solicitud GET al script de Google Apps
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Número de visitas:', data.visitCount);
        })
        .catch(error => {
            console.error('Error al actualizar el contador:', error);
        });
}

// Llamar a la función cuando se carga la página
document.addEventListener('DOMContentLoaded', updateVisitCount);

