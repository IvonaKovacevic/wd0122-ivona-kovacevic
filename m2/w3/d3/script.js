//ES 1: funzione che calcola l'eta

function calcEta(x) {
  return 2022 - x;
}
console.log(calcEta(2015));
console.log(calcEta(2000));

//ES 2: Funzione freccia, invocala e mostra output

// FUNZ ''lunga''
// function sum(a,b){
//     return a + b
// }
// FUNZ ''un po' meno lunga''
// let sum2=(a,b)=>{
//     return a+b
// }

//FUNZ freccia (giusta)
let sum2 = (a, b) => a + b;
console.log(sum2(4, 3));
console.log(sum2(1000, 9));

// Un altro esempio di arrow function

let numPositivo = (num) => num >= 0;
console.log(numPositivo(-2));
console.log(numPositivo(2));

//ES 3 : definisci una funzione all'interno di un'altra funzione

//ES 4 : Utilizza gli operatori che conosci, in particolare quelli di comparazione

console.log(0 === 0);
console.log(0 === "0");
console.log(0 != 7);
console.log(7 >= 7);
console.log(7 === "7");
console.log(7 !== "7");
