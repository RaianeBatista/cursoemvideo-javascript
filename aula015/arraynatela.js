let valores = [8, 1, 7, 4, 2, 9];
//valores.sort();
//console.log(valores);

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

//Condição Tradicional para exibição de percurso do ARRAY
for (let pos = 0; pos < valores.length; pos++) {
  // console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

// Versão mais recente do ECMASCRIPT
// Para cada posição EM (dentro)  num(variável composta), vou mostrar o num[pos], só funciona para arrays e objetos
for (let pos in valores) {
  //console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

//Método indexOf(7) Buscando valores dentro de um vetor, retorna a chave/posição onde o valor se encontra n array

console.log(valores.indexOf(7));

// Quando o método indexOf não encontra o valor no vetor, ele retorna o -1
console.log(valores.indexOf(3));
