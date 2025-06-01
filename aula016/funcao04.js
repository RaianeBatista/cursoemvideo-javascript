//Calcular o fatorial de um número
// Fatorial ==> 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
  let fat = 1;
  //Ele começa em 5, e enquanto o contador  for maior que 1, vai perdendo 1 a cada passada do loop, até chegar em 1 => 5 4 3 2 1 
  for (let c = n; c > 1; c--) {
    fat *= c;
  }
  return fat;
}
console.log(fatorial(5));
