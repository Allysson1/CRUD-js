var titulo = document.querySelector(".titulo");
titulo.textContent = "Monster Academy"

    // pega valor do cliente da tabela

    //var paciente = document.querySelector("#primeiro-paciente");

    var clientes = document.querySelectorAll(".cliente");

for (var i = 0; i < clientes.length; i++) {

    var cliente = clientes[i];

    var tdPeso = cliente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = cliente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = cliente.querySelector(".info-imc");



function validaPeso(peso){
    if (peso >=0 && peso<=300){
        return true;
    }
    else {
        return false;
    }
}
  
function validaAltura(altura){
    if (altura >=0 && altura<=3.0){
        return true;
    }
    else {
        return false;
    }
}
var pesoValido = validaPeso(peso);
var alturaValida = validaAltura(altura);



if (!alturaValida){
    console.log("Altura Inválido");
    alturaValida = false;
    tdImc.textContent = "altura inválida";
    cliente.classList.add("cliente-invalido");
}

if (!pesoValido) {
    console.log("peso Inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    cliente.classList.add("cliente-invalido");

}



    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}


function validaPeso(peso){
    if (peso >=0 && peso<=300){
        return true;
    
    }
    else {
        return false;
    }
}


function validaAltura(altura){
    if (altura >=0 && altura <=3.0){
        return true;
    }
    else {
        return false;
    }
}





function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


