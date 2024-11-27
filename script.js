/*esercizio 1*/
/*crea una funzione che controlli due numeri interi. 
ritorna true se uno  dei due è 50 o se la somma dei due è 50 */

function controllaNumeri (a,b) {
    return a === 50 || b === 50 || a + b === 50 ;
}
console.log (controllaNumeri (50,10)); /*true*/
console.log (controllaNumeri (20,30)); /*true*/
console.log (controllaNumeri (20,70)); /*false*/


/* esercizio 2 */
/*crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
passa la stringa e la posizione come parametri e ritorna la stringa modificata.*/

function rimuoviCarattere(stringa, posizione) {
    return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
}

console.log(rimuoviCarattere ("ciao", 1)); 
console.log(rimuoviCarattere ("epicode", 3)); 
console.log(rimuoviCarattere ("esercizio", 0)); 



/* esercizio 3 */
/*crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. 
ritorna true se rispecchiano queste condizioni, altrimenti ritorna false.*/

function numeriNelRange (num1, num2) {
    // Funzione di supporto per controllare se un numero è compreso in un intervallo
    function dentroAlRange (num, min, max) {
        return num >= min && num <= max;
    }

    // Verifica se entrambi i numeri sono compresi tra 40 e 60 o tra 70 e 100
    const nelPrimoRange = dentroAlRange (num1, 40, 60) && dentroAlRange (num2, 40, 60);
    const nelSecondoRange = dentroAlRange (num1, 70, 100) && dentroAlRange (num2, 70, 100);

    return nelPrimoRange || nelSecondoRange ;
}

console.log(numeriNelRange (40, 55)); 
console.log(numeriNelRange (72, 88)); 
console.log(numeriNelRange (45, 75)); 
console.log(numeriNelRange (30, 50)); 



/* esercizio 4 */
/*crea una funzione che accetti un nome di città come paramettro e 
ritorni il nome stesso se inizia con lo o new altrimenti ritorna false*/

function ritornanNomeCitta (nomeCitta) {
    if (nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")) {
        return nomeCitta;
    }
    return false;
}

console.log(ritornanNomeCitta ("Los Angeles")); 
console.log(ritornanNomeCitta ("New York"));    
console.log(ritornanNomeCitta ("Roma"));     
console.log(ritornanNomeCitta ("New Orleans")); 
console.log(ritornanNomeCitta ("Orlando"));      


/* esercizio 5 */
/*crea una. funzione  che calcoli e ritorni la somma di tutti gli elementi di un array.
 l array deve essere passato come un parametro.*/

function elemtiArray(array) {
    // Usa il metodo reduce per calcolare la somma
    return array.reduce((somma, elemento) => somma + elemento, 0);
}

console.log(elemtiArray([1, 7, 3, 9])); 
console.log(elemtiArray([10, -7, 15])); 
console.log(elemtiArray([]));      


/* esercizio 6 */
/*crea una funzione che controlli che un array non  contenga i numeri 1 o 3 .
 se non li contiene ritorna true altrimenti ritorna false */

 function nonContieneUnoTre(array) {
    // Controlla che l'array non contenga né 1 né 3
    return !array.includes(1) && !array.includes(3);
}

console.log(nonContieneUnoTre ([2, 4, 5])); // true (non contiene 1 o 3)
console.log(nonContieneUnoTre ([1, 2, 3])); // false (contiene 1 e 3)
console.log(nonContieneUnoTre ([0, 2, 4])); // true (non contiene 1 o 3)
console.log(nonContieneUnoTre ([3, 6, 9])); // false (contiene 3)


/* esercizio 7 */
/* crea una funzione per trovare il tipo di angolo i cui gradi sonno passati come parametro. 
Angolo Acuto: meno di 90 gradi => ritorna acuto ,
Angolo Ottuso: tra i 90 e i 180 => ritorna ottuso ,
Angolo Retto: 90 gradi => ritorna retto , 
Angolo Piatto: 180 gradi => ritorna piatto */


function tipoDiAngolo(gradi) {
    if (gradi < 90) {
        return "acuto"; // Angolo acuto
    } else if (gradi === 90) {
        return "retto"; // Angolo retto
    } else if (gradi > 90 && gradi < 180) {
        return "ottuso"; // Angolo ottuso
    } else if (gradi === 180) {
        return "piatto"; // Angolo piatto
    } else {
        return "non valido"; 
    }
}

console.log(tipoDiAngolo (45));  // "acuto"
console.log(tipoDiAngolo (90));  // "retto"
console.log(tipoDiAngolo (135)); // "ottuso"
console.log(tipoDiAngolo (180)); // "piatto"
console.log(tipoDiAngolo (200)); // "non valido"

/*esercizio 8 */ 
/*crea una funzione che crei un acronimo a partire da una frase. 
es fabbrica italiana automibili torino e deve ritornare FIAT.*/

function craAcronimo(frase) {
    // Dividi la frase in parole, prendi la prima lettera di ogni parola e convertila in maiuscolo
    return frase
        .split(" ") // Divide la frase in un array di parole
        .map(word => word[0].toUpperCase()) // Prendi la prima lettera di ogni parola e trasformala in maiuscolo
        .join(""); // Combina le lettere in un'unica stringa
}

console.log(craAcronimo("fabbrica italiana automobili torino")); // "FIAT"
console.log(craAcronimo("national aeronautics space administration")); // "NASA"
console.log(craAcronimo("united nations educational scientific cultural organization")); // "UNESCO"