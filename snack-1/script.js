// Ciclo While
// snack 1:
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

//declara un arr vuoto
//chiedi utentente un numero tramitte prompt
//salva in var
//condizione se il numero piu di 50
//if NOT ripeti prompt e
//push in arr
//somma i valori input
//else stampa numeri
//esco dal loop se numero dato
const arrNums = [];

let num = 0;

do {
  do {
    num = Number(prompt("Inserisci un numero"));
  } while (isNaN(num));
  arrNums.push(num);

  let i = 0;
  while (i < arrNums.length) {
    num = num + arrNums[i];
    i++;
  }
  console.log(arrNums);
  console.log(num);
} while (num < 50);
