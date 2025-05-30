let num = [5, 8, 2, 9, 3];
//num[3] = 6;

//console.log(`Nosso vetor é o ${num}`);

//console.log(num);

// Método push, acrescenta valores a um Array [] ao final do array
//num.push(7);

// Atributo length, exibe o comprimento do array => console.log(num.length)
num.length;

// Método sort(), ordena os elementos por ordem crescente
num.sort();

//Método push, acrescenta um elmento no final do array
num.push(14);

//console.log(`O vetor tem ${num.length} posições`);
//console.log(num[0])
//console.log(`O primeiro valor do vetor é ${num[0]}`);
//console.log(num)

//Exibindo um vetor de forma organizada

// for (num = 0; num <= 4; num++) {
//   console.log(num);
// }

for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
