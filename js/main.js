
// Ejercicio 1
const mainImage = document.querySelector("#mainImage");

mainImage.style.cursor = 'pointer';

mainImage.addEventListener("click", () => {
    mainImage.classList.toggle("image")
})





// Ejercicio 2
// stickers section
// Variables
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

// Styles
button.style.cursor = 'pointer';

// Evento
button.addEventListener("click", () => {
    suma = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);
    if (suma <= 10) {
        result.innerHTML = `Felicitaciones! estas llevando <b>${suma}</b> stickers.`
    }
    else if (suma > 10) {
        result.innerHTML = "Lo sentimos... llevas mas stickers de lo permitido."
    }
})





// Ejercicio 3
// Variables
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const button2 = document.querySelector("#button2");
const passwordButton = document.querySelector("#passwordButton");

// Evento
button2.addEventListener("click", () => {
    suma = select1.value + select2.value + select3.value;
    if (suma === "911") {
        passwordButton.textContent = "password 1 es correcto";
    }
    else if (suma === "714") {
        passwordButton.innerHTML = "password 2 es correcto";
    }
    else {
        passwordButton.innerHTML = "password incorrecto";
    }
})






