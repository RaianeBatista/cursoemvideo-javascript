let num = [2, 8, 9, 5, 3];

// console.log(num);
// console.log(`Nosso vetor é o ${num} `);

// // Altera valor do array ou acrescenta
// num[2] = 7;

//Acrescentando valores no final no Array
// num.push(1);
// console.log(num);

//Atributo para verificar  o comprimnto do Array

console.log(`O array tem ${num.length} posições`);

// Organiza os elementos em ordem crescente
// num.sort();
// console.log(num);
// console.log(`O primeiro valor do vetor é ${num[0]}`);

// Usando for
//for (let pos = 0; pos < num.length; pos++) {
// console.log(`A posição ${pos} tem o valor ${num[pos]}`);
//}

// Usando for in
for (pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

//Método indeOf, retorna a posição do valor no arrays, quando o valor, não está no arrays(não ocorrência), ele retorna -1
// num.indexOf(5);
// console.log(`A posição do elemento no array é: ${num.indexOf(5)}`);

let posi = num.indexOf(2);
if (posi == -1) {
  console.log("O elemento não existe");
} else {
  console.log(`O valor está na posição ${posi}`);
}
