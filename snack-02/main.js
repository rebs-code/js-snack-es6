"use strict";

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
const teams = [
  {
    teamName: "Juventus",
    points: 0,
    foulsAgainst: 0,
  },
  {
    teamName: "Inter",
    points: 0,
    foulsAgainst: 0,
  },
  {
    teamName: "Milan",
    points: 0,
    foulsAgainst: 0,
  },
  {
    teamName: "Atalanta",
    points: 0,
    foulsAgainst: 0,
  },
  {
    teamName: "Salernitana",
    points: 0,
    foulsAgainst: 0,
  },
];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
teams.forEach((team) => {
  team.points = Math.floor(Math.random() * 100) + 1;
  team.foulsAgainst = Math.floor(Math.random() * 100) + 1;
});

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let newTeams = [];
teams.forEach(({ teamName, foulsAgainst }) => {
  let newObj = {};
  newObj.teamName = teamName;
  newObj.foulsAgainst = foulsAgainst;
  newTeams.push(newObj);
});

//stampo il nuovo array in console
console.log(newTeams);
