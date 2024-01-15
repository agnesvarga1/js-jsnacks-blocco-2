//for loop
// snack 4
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
let unNumero;

do {
  unNumero = Number(prompt("Iserisci un numero"));
} while (isNaN(unNumero));

if (unNumero % 2 === 0) {
  document.writeln(unNumero);
} else {
  document.writeln(unNumero + 1);
}
