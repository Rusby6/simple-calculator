const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");

const sumar = document.getElementById("mas");
const restar = document.getElementById("menos");
const mult = document.getElementById("por");
const dividir = document.getElementById("entre");
const borrar = document.getElementById("ce");

const result = document.getElementById("resultado");

// Función para validar y obtener números
function obtenerNumeros() {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    
    if (isNaN(n1) || isNaN(n2)) {
        return { valido: false, n1: n1, n2: n2 };
    }
    return { valido: true, n1: n1, n2: n2 };
}

// Evento para sumar
sumar.addEventListener("click", (e) => {
    const numeros = obtenerNumeros();
    if (!numeros.valido) {
        result.value = "Error";
        return;
    }
    result.value = numeros.n1 + numeros.n2;
});

// Evento para restar
restar.addEventListener("click", (e) => {
    const numeros = obtenerNumeros();
    if (!numeros.valido) {
        result.value = "Error";
        return;
    }
    result.value = numeros.n1 - numeros.n2;
});

// Evento para multiplicar
mult.addEventListener("click", (e) => {
    const numeros = obtenerNumeros();
    if (!numeros.valido) {
        result.value = "Error";
        return;
    }
    result.value = numeros.n1 * numeros.n2;
});

// Evento para dividir
dividir.addEventListener("click", (e) => {
    const numeros = obtenerNumeros();
    if (!numeros.valido) {
        result.value = "Error";
        return;
    }
    if (numeros.n2 === 0) {
        result.value = "Infinito";
        return;
    }
    result.value = numeros.n1 / numeros.n2;
});

// Evento para borrar (CE)
borrar.addEventListener("click", (e) => {
    num1.value = "";
    num2.value = "";
    result.value = "";
});

// Efectos hover - Usando las constantes correctas
sumar.addEventListener("mouseenter", () => {
    sumar.style.backgroundColor = "aquamarine";
});

sumar.addEventListener("mouseleave", () => {
    sumar.style.backgroundColor = "";
});

restar.addEventListener("mouseenter", () => {
    restar.style.backgroundColor = "cornflowerblue";
});

restar.addEventListener("mouseleave", () => {
    restar.style.backgroundColor = "";
});

mult.addEventListener("mouseenter", () => {
    mult.style.backgroundColor = "greenyellow";
});

mult.addEventListener("mouseleave", () => {
    mult.style.backgroundColor = "";
});

dividir.addEventListener("mouseenter", () => {
    dividir.style.backgroundColor = "gold";
});

dividir.addEventListener("mouseleave", () => {
    dividir.style.backgroundColor = "";
});

borrar.addEventListener("mouseenter", () => {
    borrar.style.backgroundColor = "firebrick";
});

borrar.addEventListener("mouseleave", () => {
    borrar.style.backgroundColor = "";
});