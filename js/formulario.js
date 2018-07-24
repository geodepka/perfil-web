function enviar() {
  var nome = document.getElementById("nome");
  if (nome.value != "") {
    alert("Obrigado " +nome.value+ " ! Mas esta área temporariamente não está funcionando");
  } else {
    alert("Por gentileza, coloque seus dados");
  }
}
