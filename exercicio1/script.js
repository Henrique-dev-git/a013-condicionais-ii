const num = Number(prompt("Digite um número para análise : ")); //seu numero aqui - já realizada a conversaão para number.

//Solução 1 - if aninhados
alert("Primeira Solução - if´s ");
if (num % 2 === 0) {
  alert(`O número ${num} é divisível por 2!`);
} else {
  alert(`O número ${num} não é divisível por 2!`);
}
if (num % 3 === 0) {
  alert(`O número ${num}  é divisível por 3!`);
} else {
  alert(`O número ${num} não é divisível por 3!`);
}

// Solução 2 - operadores lógicos
console.log("/n");

