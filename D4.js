/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  // Calcola l'area del rettangolo: lunghezza1 * lunghezza2
  let rectangleArea = l1 * l2;

  // Restituisci l'area calcolata
  return rectangleArea;
}

// richiamo il nome della funzione e gli passo dei valori
console.log(area(5, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.

*/
function crazySum(numero1, numero2) {
  // Verifico se i due numeri sono uguali
  if (numero1 === numero2) {
    // Se sono uguali, torna la loro somma moltiplicata per tre
    return (numero1 + numero2) * 3;
  } else {
    // Altrimenti, restituisce solo la somma dei due numeri
    return numero1 + numero2;
  }
}

// Esempio
let risultato1 = crazySum(8, 8); // I due numeri sono uguali, quindi torna 48
let risultato2 = crazySum(2, 6); // I due numeri sono diversi, quindi torna 8

console.log("Il risultato 1 è:", risultato1);
console.log("Il risultato 2 è:", risultato2);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
  // Calcolo la differenza assoluta tra il numero e 19
  let differenzaAssoluta = Math.abs(numero - 19);

  // Controllo se il numero fornito è maggiore di 19
  if (numero > 19) {
    // Se sì, moltiplica la differenza assoluta per tre
    differenzaAssoluta *= 3;
  }

  // Restituisce il risultato
  return differenzaAssoluta;
}

// Esempio
let risultato = crazyDiff(80);
console.log("Il risultato è:", risultato);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  return (n >= 20 && n <= 100) || n === 400;
}

// Esempio
console.log(boundary(40)); //true
console.log(boundary(13)); //false
console.log(boundary(120)); //false
console.log(boundary(400)); //true

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  // Verifica se la stringa inizia già con "EPICODE"
  if (stringa.startsWith("EPICODE")) {
    // Se sì, ritorna la stringa originale
    return stringa;
  } else {
    // Altrimenti, aggiungi "EPICODE" all'inizio e ritorna la nuova stringa
    return "EPICODE" + stringa;
  }
}

// Esempi
console.log(epify("Ciao")); // Restituirà "EPICODECiao"
console.log(epify("EPICODESchool")); // Restituirà "EPICODESchool"

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
  // Verifica cheil numero sia positivo e poi anche che sia un multiplo di 3 o di 7
  return numero > 0 && (numero % 3 === 0 || numero % 7 === 0);
}

// Esempi
console.log(check3and7(9)); // Restituirà true (multiplo di 3)
console.log(check3and7(14)); // Restituirà true (multiplo di 7)
console.log(check3and7(5)); // Restituirà false (non multiplo di 3 o 7)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function stringainvertita(stringa) {
  // split per convertire la stringa in un array di caratteri,
  // reverse per invertire l'array
  // join per ricreare la stringa invertita.
  return stringa.split("").reverse().join("");
}

// Esempio
let result = stringainvertita("EPICODE");
console.log(result); // Restituirà "EDOCIPE"

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
