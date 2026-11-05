    function mudarCor() {

            let cor = document.querySelector("#cor").value;
            let texto = document.querySelector("#texto");

            if (cor == "Preto") {
                texto.style.color = "preto";
            }
            else if (cor == "azul") {
                texto.style.color = "blue";
            }
            else if (cor == "verde") {
                texto.style.color = "green";
            }

        }