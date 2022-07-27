let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  console.log(this.value);
  let clientes = document.querySelectorAll(".ClienteASerConsultado");

  if (this.value.length > 0) {
    for (let i = 0; i < clientes.length; i++) {
      let cliente = clientes[i];
      let tdTreino = cliente.querySelector(".info-tipo-treino");
      let treino = tdTreino.textContent;
      let expressao = new RegExp(this.value, "i");
      if (!expressao.test(treino)) {
        cliente.classList.add("invisivel");
      } else {
        cliente.classList.remove("invisivel");
      }
    }
  } else {
    for (let i = 0; i < clientes.length; i++) {
      let cliente = clientes[i];
      cliente.classList.remove("invisivel");
    }
  }
});
