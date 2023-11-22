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

//assegno due variabili indentificative del peso minore al primo oggetto dell'array
let minWeightBike = bicycles[0].name;
let minWeight = bicycles[0].weight;

//ciclo attraverso gli elementi dell'array con destructuring per prendere la chiave name e weight da ogni elemento
bicycles.forEach(({ name, weight }) => {
  //se il peso dell'elemento corrente è inferiore al peso minimo, il valore viene riassegnato
  if (weight < minWeight) {
    minWeightBike = name;
    minWeight = weight;
  }
});

//creo un div e stampo in pagina
const myDiv = document.createElement("div");
myDiv.innerText = `La bici con peso minore è ${minWeightBike} con un peso di ${minWeight} kg.`;
document.body.appendChild(myDiv);
