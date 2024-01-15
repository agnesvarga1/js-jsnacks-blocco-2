//for loop
// snack 4
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
let unNumero;

function getUserNumber() {
  do {
    unNumero = Number(prompt("Iserisci un numero"));
  } while (isNaN(unNumero));
  return unNumero;
}

for (let i = 0; i < 5; i++) {
  getUserNumber();
  if (unNumero % 2 === 0) {
    document.writeln(`<p>numero pari:  ${unNumero}</p>`);
  } else {
    document.writeln(`<p>Numero dispari + 1: ${unNumero + 1}</p>`);
  }
}
