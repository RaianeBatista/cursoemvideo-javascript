function parimp(n) {
  if (n % 2 == 0) {
    console.log(`O número ${n} é par`);
  } else {
    console.log(`O número ${n} é ímpar`);
  }
}

let res = parimp(8);

// Exemplo do Guanabara
function venum(i) {
  if (i % 2 == 1) {
    return "Ímpar";
  } else {
    return "Par";
  }
}
console.log(venum(23));
