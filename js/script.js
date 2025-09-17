/**
 * RACCOLTA DATI
 * 
 * nessun dato utente richiesto
 * Stampare i primi 100 numeri e:
 * se divisibile per 3 sostituirlo con Fizz
 * se divisibile per 5 sostituirlo con Buzz
 * se divisibile per entrambi sostituirlo con FizzBuzz
 * 
 * Inizializzare result
 * 
 * OPERAZIONI LOGICHE
 * 
 * Generare i numeri richiesto (100 fisso al momento)
 * SE (numero % 3 === 0 && numero % 5 === 0 )
 *  è divisibile per entrambi, result = FizzBuzz
 * ALTRIMENTI SE (numero % 3 === 0)
 *  è divisibile per 3, result = Fizz
 * ALTRIMENTI SE (numero % 5 === 0)
 *  è divisibile per 5, result = Buzz
 * ALTRIMENTI
 *  result = numero
 * 
 * STAMPA RISULTATO
 * stampare result
 */

let result = null;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
    } else if (i % 3 === 0) {
        result = "Fizz";
    } else if (i % 5 === 0) {
        result = "Buzz";
    } else {
        result = i;
    }

    console.log(result);
}