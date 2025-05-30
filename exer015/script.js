function verificar() {
  var data = new Date();
  var anoAtual = data.getFullYear();
  var formAno = document.getElementById("txtano");
  //  var res = document.getElementById('res')
  var res = document.querySelector("div#res");

  if (formAno.value.length == 0 || Number(formAno.value > anoAtual)) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var formSex = document.getElementsByName("radsex");
    var idade = anoAtual - Number(formAno.value);
    // res.innerHTML = `Idade calculada ${idade}`;
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (formSex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "images/img-bebe-m.png");
      } else if (idade < 20) {
        // Jovem
        img.setAttribute("src", "images/img-jovem-m.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "images/img-adulto-m.png");
      } else {
        //idoso
        img.setAttribute("src", "images/img-idoso-m.png");
      }
    } else if (formSex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "images/img-bebe-f.png");
      } else if (idade < 20) {
        //Jovem
        img.setAttribute("src", "images/img-jovem-f.png");
      } else if (idade < 50) {
        //adulta
        img.setAttribute("src", "images/img-adulto-f.png");
      } else {
        //Idosa
        img.setAttribute("src", "images/img-idoso-f.png");
      }
    }
  
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
      res.appendChild(img);
      img.style.display = "block";
      img.style.margin = "20px auto";
  }
}
