"use strict";

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//la funzione ritorna un nuovo array che ha i numeri compresi fra gli indici indicati da a e b
function myFunc(array, a, b) {
    let newArray = array.filter((item) => array.indexOf(item) > a && array.indexOf(item) < b);
    console.log(newArray);
}

//esecuzione
myFunc(myArray, 1, 5);

