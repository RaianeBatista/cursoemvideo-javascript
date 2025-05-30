// alert("Olá");

function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var dataAtual = new Date();
  var hora = dataAtual.getHours();
   //var hora = 20
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = "images/fotomanha.png";
    document.body.style.background = "#b98106";
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE
    img.src = "images/fototarde.png";
    document.body.style.background = "#628659";
  } else {
    //BOA NOITE
    img.src = "images/fotonoite.png";
    document.body.style.background = "#010115f7";
  }
}
