let contador = 0;

let numero = document.querySelector("#numero");

document.querySelector("#mais").addEventListener("click", function () {
    contador++;
    numero.innerHTML = contador;
});

document.querySelector("#menos").addEventListener("click", function () {
    contador--;
    numero.innerHTML = contador;
});