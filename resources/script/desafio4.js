  function somar() {
            let n1 = Number(document.querySelector("#numero1").value);
            let n2 = Number(document.querySelector("#numero2").value);
            let paragrafo = document.querySelector("#resultado");
            let button = document.querySelector("button");
            
            let soma = n1 + n2;
            button.addEventListener("click", ()=>{
            document.querySelector("#resultado").innerHTML = "resultado: " + soma;
        });
            
    
        }

