// Ciclo While
// snack 1:
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

//chiedi utentente un numero tramitte prompt
//salva in var
//condizione se il numero piu di 50
//if NOT ripeti prompt e

//somma i valori input
//else stampa numeri
//esco dal loop se numero dato > 50 or al interno del arr la somma

//declara un arr vuoto
const arrNums = [];
//variabile init
let num = 0;
//var aiutante
let sum = 0;

do {
  //chiedi utente digitare un numero
  //se numero e minore di 50 ripeti prompt

  do {
    //chiedi utente un numero finche non digita un vero num
    num = Number(prompt("Inserisci un numero"));
  } while (isNaN(num));
  //push in arr
  arrNums.push(num);
  console.log(arrNums);
  let i = 0;
  //prendi elementi del arr
  while (i < arrNums.length) {
    //somma dei elmenti
    sum = sum + arrNums[i];
    i++;
  }
  //num diventa somma cosi se sum > 50 esco dal loop
  num = sum;
  sum = 0;
  console.log(num);
} while (num < 50);

console.log(arrNums);
console.log("somma in arr " + num);
