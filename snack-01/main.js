"use strict";

//creo un array di oggetti
const bicycles = [
  { name: "Bike 1", weight: 10 },
  { name: "Bike 2", weight: 12 },
  { name: "Bike 3", weight: 9 },
  { name: "Bike 4", weight: 11 },
  { name: "Bike 5", weight: 8 },
];

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let minWeightBike = bicycles[0].name;
let minWeight = bicycles[0].weight;

bicycles.forEach(({ name, weight }) => {
    if (weight < minWeight) {
        minWeightBike = name;
        minWeight = weight;
    }
});

const myDiv = document.createElement("div");

myDiv.innerText = `La bici con peso minore è ${minWeightBike} con un peso di ${minWeight} kg.`;

document.body.appendChild(myDiv);
