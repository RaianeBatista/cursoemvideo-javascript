// var hora = 19;
// console.log(`São ${hora} horas`);

// if (hora > 0 && hora < 13) {
//   console.log("Tenha Bom dia");
// } else if (hora < 18) {
//   console.log("Tenha uma boa tarde");
// } else {
//   console.log("Tenha uma boa noite.");
// }

var agora = new Date()
var hora = agora.getHours()
//var hora = 1;

console.log(`Agora são exatamente ${hora} horas`);

if (hora > 5 && hora < 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora <= 18) {
  console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite!");
} else {
  console.log("Boa madrugada");
}
