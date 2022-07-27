var botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona-cliente");

  //estrai informaçoes do formulario de cadastro de clientes
  var cliente = obtemClienteDoForm(form);
  console.log(cliente);

  //cria um novo elemento tr (linha)
  var clienteTr = constroiTr(cliente);

  var erros = validaCliente(cliente);


  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  //adiciona a linha na tabela
  var tabela = document.querySelector("#tabela-cliente");
  tabela.appendChild(clienteTr);

  form.reset();

  var erros = document.querySelector("#erro");
  erros.innerHTML = "";
});

function obtemClienteDoForm(form) {
  var cliente = {
    nome: form.nome.value,
    treino: form.treino.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return cliente;
}

function constroiTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function constroiTr(cliente) {
  var clienteTr = document.createElement("tr");
  clienteTr.classList.add("cliente");

  clienteTr.appendChild(constroiTd(cliente.nome, "info-nome"));
  clienteTr.appendChild(constroiTd(cliente.treino, "info-treino"));
  clienteTr.appendChild(constroiTd(cliente.peso, "info-peso"));
  clienteTr.appendChild(constroiTd(cliente.altura, "info-altura"));
  clienteTr.appendChild(constroiTd(cliente.gordura, "info-gordura"));
  clienteTr.appendChild(constroiTd(cliente.imc, "info-imc"));
  return clienteTr;
}

function validaCliente(cliente) {

  var erros = [];

  if (!validaPeso(cliente.peso)) {
    erros.push("Peso inválido");
  }

  if (!validaAltura(cliente.altura)) {
    erros.push("Altura inválida");
  }

  if (cliente.nome.length == 0) {
    erros.push("Nome inválido ou em branco");
  }

  if (cliente.treino.length == 0) {
    erros.push("Treino inválido ou em branco");
  }

  if (cliente.peso.length == 0) {
    erros.push("Peso inválido ou em branco");
  }

  if (cliente.altura.length == 0) {
    erros.push("Altura inválida ou em branco");
  }

  if (cliente.gordura.length == 0) {
    erros.push("Gordura inválida ou em branco");
  }

  return erros;
}


function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#erro");
  ul.innerHTML = "";

for (var i = 0; i < erros.length; i++) {
  var li = document.createElement("li");
  li.textContent = erros[i];
  ul.appendChild(li);
}
}