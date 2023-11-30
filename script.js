var input = document.querySelector("#text");
var resultado = document.querySelector("#result")

function contador(){
    var texto = input.value;
    resultado.innerHTML = ('Caracteres: ' + texto.length)
    
}