/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  let rectangleArea = l1 * l2;

  return rectangleArea;
}

console.log(area(5, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.

*/
function crazySum(numero1, numero2) {
  if (numero1 === numero2) {
    return (numero1 + numero2) * 3;
  } else {
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
  let differenzaAssoluta = Math.abs(numero - 19);

  if (numero > 19) {
    differenzaAssoluta *= 3;
  }

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
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
}

console.log(epify("Ciao")); // Restituirà "EPICODECiao"
console.log(epify("EPICODESchool")); // Restituirà "EPICODESchool"

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
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

console.log("ESERCIZIO 8");

function upperFirst(stringa) {
  console.log(stringa);
  let parole = stringa.split(" ");
  // la funzione split va a dividere una stringa in tanti elementi da mettere dentro all'array.Per dirgli come farlo gli dico che deve usare uno spazio
  // ottenendo tipo ["ciao", "bel", "mondo"] che è un array

  // devo ciclare su ogni elemento dell'array parole
  for (let i = 0; i <= parole.length - 1; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
    // con charAt(0)gli diciamo di prendere la prima lettera dell'iesimo elemento dell'array.
    // poi con toUpperCase() mettiamo le lettere maiuscole + slice(con cui gli diciamo di prendere dal 1 quindi esclude ciao dalla trasformazione in maiuscole)
  }

  return parole.join(" ");
  // ora che il mio array ha tutti gli elementi con la  prima lettera maiuscola posso far diventare l'array di nuovo una stringa con
  // la funzione join concatendando le parole con uno spazio vuoto.
}

// esempio
let risu = upperFirst("ciao bel mondo");
console.log(risu);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa2) {
  return stringa2.slice(1, -1);
  // gli dico di partire dalla e di hello e fermarsi alla l di world
}

let risultatoOttenuto = cutString("Hello World");
console.log(risultatoOttenuto); // Output: "ello Worl"

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  // inizio array vuoto
  let lista = [];
  // faccio un ciclo for lungo n in quanto nell'array ci voglio pushare per n volte un numero casuale
  for (let i = 0; i <= n; i++) {
    let numeri = Math.floor(Math.random() * 11);

    // usiamo Math.floor perché arrotonda il numero
    // usiamo  Math.random che ci restituisce un numero casuale tra 0 e 1 escluso.
    // Moltiplicando il risultato ottenuto da Math.random() per 11, otteniamo un numero casuale compreso tra 0 (incluso) e 11 (escluso).
    // Quindi, nel complesso, l'espressione Math.floor(Math.random() * 11) genera un numero intero casuale compreso tra 0 e 10.
    lista.push(numeri);
  }
  return lista;
}

// Esempio
let r = giveMeRandom(5);
console.log(r);
