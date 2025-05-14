function cambiarTextoBoton() {
    const operacion = document.getElementById("operacion").value;
    document.getElementById("btnOperacion").textContent =
        operacion === "primo" || operacion === "par" ? "Verificar" : "Calcular";
}

function realizarOperacion() {
    const numero = parseInt(document.getElementById("numero").value);
    const operacion = document.getElementById("operacion").value;
    const resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero < 1) {
        resultado.textContent = "Por favor, ingresa un número válido (mayor que 0).";
        return;
    }

    const operaciones = {
        primo: () => esPrimo(numero) ? "Sí es primo" : "No es primo",
        par: () => numero % 2 === 0 ? "Es par" : "Es impar",
        factorial: () => "Factorial: " + factorial(numero),
        sumaPares: () => "Suma de pares: " + sumaPares(numero),
        sumaImpares: () => "Suma de impares: " + sumaImpares(numero)
    };

    resultado.textContent = operaciones[operacion]?.() || "Selecciona una operación.";
}

const esPrimo = n => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const factorial = n => {
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
};

const sumaPares = n => {
    let suma = 0;
    for (let i = 2; i <= n; i += 2) suma += i;
    return suma;
};

const sumaImpares = n => {
    let suma = 0;
    for (let i = 1; i <= n; i += 2) suma += i;
    return suma;
};
