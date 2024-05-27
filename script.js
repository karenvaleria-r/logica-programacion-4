function generarFibonacci() {
    // Obtener el valor del input
    const entrada = document.getElementById('entradaNumero').value;
    const numero = parseInt(entrada);

    // Validar que el input sea un numero
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingrese un numero valido");
        return;
    }

    // Generar y mostrar la serie de Fibonacci
    const serieFibonacci = obtenerSerieFibonacci(numero);
    document.getElementById('resultado').innerText = serieFibonacci.join(', ');
}

function obtenerSerieFibonacci(n) {
    let serie = [0, 1];

    for (let i = 2; i < n; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
    }

    return serie.slice(0, n);
}
