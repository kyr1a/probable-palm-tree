const trash = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
<g fill="#ce2b2b" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M10,2l-1,1h-5v2h1v15c0,0.52222 0.19133,1.05461 0.56836,1.43164c0.37703,0.37703 0.90942,0.56836 1.43164,0.56836h10c0.52222,0 1.05461,-0.19133 1.43164,-0.56836c0.37703,-0.37703 0.56836,-0.90942 0.56836,-1.43164v-15h1v-2h-5l-1,-1zM7,5h10v15h-10zM9,7v11h2v-11zM13,7v11h2v-11z"></path></g></g>
</svg>`;

$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const tarefa = $("#input").val().trim();

    if (tarefa.length < 3) {
      alert("A tarefa deve ter pelo menos 3 caracteres!");
      return;
    }

    const novaTarefa = $(
      `<li class="tarefa"><span>${tarefa}</span><div class="trash">${trash}</div></li>`
    );
    $(novaTarefa).appendTo("#lista");
    $("#input").val("");
  });

  $("#lista").on("click", "li", function (e) {
    $(this).toggleClass("riscado");
  });
  $("#lista").on("click", ".trash", function (e) {
    $(this).parent().remove();
  });
});
