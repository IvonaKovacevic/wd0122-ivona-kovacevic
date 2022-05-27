// Stringhe
// a.indexOf();
let saluto = "Ciao Ciao a tutti quanti ragazzi";
let pos1 = saluto.indexOf("Ciao");
console.log(pos1);

let sostituisci = saluto.replace("Ciao", "Salve");
console.log(sostituisci);

let pos2 = saluto.lastIndexOf("Ciao");
console.log(pos2);

let pos3 = saluto.length;
console.log(pos3);

// ESERCIZIO 1 richiesto
let es1 = saluto.toUpperCase();
console.log(es1);

let es11 = es1.slice(4, 9);
console.log(es11);

let es12 = es1.slice(11, 17);
console.log(es12);

let concatenazione = es11.concat(es12);
console.log(concatenazione);

// ES 2-3 Crea arrey di persone

let persone = ["Ivona", "Bojana", "Dijana"];
console.log(persone[2]);

let nuovaPersona = "Evica";

persone = ["Ivona", "Bojana", "Dijana", nuovaPersona];
console.log(persone);

let senzaEvica = persone.pop();
console.log(senzaEvica);

let senzaDijana = persone.pop();
console.log(senzaDijana);

console.log(persone);

let conMomir = persone.push("Momir");
console.log(conMomir);
console.log(persone);
