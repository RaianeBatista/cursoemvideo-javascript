// Aula sobre Objetos

let num = [5, 8, 4];

// Declaração de objetos
// Objetos são variaveis que guardam valores (atributos) e funcionalidade(Métodos)

let amigo = {
  nome: "José",
  sexo: "M",
  peso: 85.4,
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  },
};

//console.log(typeof amigo);
//console.log( amigo);
amigo.engordar(2);
console.log(amigo.nome);
