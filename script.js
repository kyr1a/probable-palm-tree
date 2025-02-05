const numeroA = document.getElementById("numeroa");
const numeroB = document.getElementById("numerob");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  console.log("oi");
  event.preventDefault();
  if (numeroA.value < numeroB.value) {
    alert(`Sim! ${numeroB.value} é maior que ${numeroA.value}`);
    return;
  }
  if (numeroA.value === numeroB.value) {
    alert(`Não! ${numeroB.value} é igual a ${numeroA.value}`);
    return;
  } else {
    alert(`Não! ${numeroB.value} é menor que ${numeroA.value}`);
  }

  numeroA.value = "";
  numeroB.value = "";
});
