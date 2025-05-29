// var agora = new Date();
// var diaSem = agora.getDay();
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/

// if (diaSem == 0)
var diaSem = 4;
console.log(`Dia da semana: ${diaSem}`);

switch (diaSem) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunfa-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("[ERRO] Dia inválido");
    break;
}
