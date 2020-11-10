/* Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente */

//creo il mio array iniziale

var nomi = ["Michele", "Giovanni", "Fabio", "Simone", "Chiara", "Lucia"];

//array vuoto con nomi filtrati

var nomiRange = [];

//prompt con richiesta numeri

//primo prompt

var primoNum = parseInt(prompt("Primo numero"));

//cliclo while finchè utente non mette numeri range o non mette numeri
while (primoNum > nomi.length || isNaN(primoNum)) {
  alert("Numero fuori range inserisci numero da 0 a " + nomi.length);
  primoNum = parseInt(prompt("Primo numero"));
}

//secondo prompt

var secondoNum = parseInt(prompt("Secondo numero"));

//cliclo while finchè utente non mette numeri range o non mette numeri
while (secondoNum > nomi.length || isNaN(secondoNum)) {
  alert("Numero fuori range inserisci numero da 0 a " + nomi.length);
  secondoNum = parseInt(prompt("Secondo numero"));
}

console.log(primoNum, secondoNum); //vedo numeri immessi

var lunghezzaArray = secondoNum + 1; //creo variabile con secondoNum incrementato di 1 per far tornare il range desiderato nel loop

//ciclo tra gli indici partendo dal primo numero immesso fino al secondo incrementato di 1 per rientrare nel range voluto
for (var i = primoNum; i < lunghezzaArray; i++) {
  console.log(nomi[i]);
  nomiRange.push(nomi[i]); // pusho i nuovi nomi nell' array vuoto
}

console.log("Nuovo array nomi filtrato: ", nomiRange); // stampo array nuovo filtrato
