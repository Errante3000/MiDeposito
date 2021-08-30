function init(){
    var q = document.getElementById('q');
    var w = document.getElementById('w');
    var e = document.getElementById('e');
    var r = document.getElementById('r');
    var pantalla = document.getElementById('pantalla');
}

q.onclick = function(e){
    pantalla.textContent = pantalla.textContent + "q";
}

w.onclick = function(e){
    pantalla.textContent = pantalla.textContent + "r";
}

e.onclick = function(e){
    pantalla.textContent = pantalla.textContent + "e";
}

r.onclick = function(e){
    pantalla.textContent = pantalla.textContent + "r";
}

function desdeTeclado(e){
    let codigo = e.charCode;
    let caracter = String.fromCharCode(codigo);
    let posibles_caracteres = ["q", "w", "e", "r"];
    console.log(codigo);
    if(posibles_caracteres.includes(caracter)){
        pantalla.textContent = pantalla.textContent + caracter;
    }
    else if (codigo == 13){
        pantalla.textContent = " ";
    }
}

document.onkeypress = desdeTeclado;
