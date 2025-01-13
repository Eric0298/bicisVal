const modelos = {
    electrica: ["Modelo E1", "Modelo E2", "Modelo E3"],
    clasica: ["Modelo C1", "Modelo C2", "Modelo C3"]
};

const tarifas = {
    electrica: 5, 
    clasica: 3
};

// Actualiza el desplegable de modelo de bicicleta
function actualizarOpcionesBicicleta() {
    const tipo = document.getElementById("tipo-bicicleta").value;
    const modeloSelect = document.getElementById("modelo-bicicleta");
    modeloSelect.innerHTML = '<option value="" disabled selected>Seleccione el modelo</option>';
    modelos[tipo].forEach(modelo => {
        const option = document.createElement("option");
        option.value = modelo;
        option.textContent = modelo;
        modeloSelect.appendChild(option);
    });
}

// Calcula el costo de alquiler
function calcularCosto() {
    const tipo = document.getElementById("tipo-bicicleta").value;
    const horas = parseFloat(document.getElementById("tiempo-uso").value) || 0;
    const tarifaPorHora = tarifas[tipo];
    if (horas && tarifaPorHora) {
        const costoTotal = horas * tarifaPorHora;
        document.getElementById("precio-total").textContent = `Total: $${costoTotal.toFixed(2)}`;
    } else {
        document.getElementById("precio-total").textContent = "Total: $0";
    }
}

// Envía los formularios con alertas de confirmación
document.getElementById("formulario-alquiler").onsubmit = function(event) {
    event.preventDefault();
    alert("Su reserva de bicicleta ha sido procesada.");
}

document.getElementById("formulario-reparacion").onsubmit = function(event) {
    event.preventDefault();
    alert("Su cita de reparación ha sido reservada.");
}
