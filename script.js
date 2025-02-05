const numeroA = document.getElementById("numeroa");
const numeroB = document.getElementById("numerob");
const form = document.getElementById("form");
const erro = document.querySelector(".erro");
const mensagem = document.querySelector(".mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (numeroA.value === "" || numeroB.value === "") {
    mensagem.style.display = "none";
    erro.style.display = "block";
    return;
  }

  if (numeroA.value < numeroB.value) {
    erro.style.display = "none";
    mensagem.innerText = `Sim! ${numeroB.value} é maior que ${numeroA.value}`;
    mensagem.style.display = "block";
  } else if (numeroA.value === numeroB.value) {
    erro.style.display = "none";
    mensagem.innerText = `Não! ${numeroB.value} é igual a ${numeroA.value}`;
    mensagem.style.display = "block";
  } else {
    erro.style.display = "none";
    mensagem.innerText = `Não! ${numeroB.value} é menor que ${numeroA.value}`;
    mensagem.style.display = "block";
  }

  numeroA.value = "";
  numeroB.value = "";
});
