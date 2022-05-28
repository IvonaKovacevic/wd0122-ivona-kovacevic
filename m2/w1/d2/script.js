// // esercitazione
// // WHILE DO WHILE
// let rep = 1;
// while (rep <= 10) {
//   console.log(`lifting weights repetinion : ${rep}`);
//   rep++;
// }

// let num = 1;
// while (num > 7) {
//   console.log(`Esegui ${num} ripetizioni`);
//   num++;
// }

// for (let i = 0; i <= 100; i++) {
//   console.log(`Esegui ${i} addominali`);
// }

// ESERCIZIO:

function iniziaAcquisto() {
  let budget = 1000;
  let pezziTotali = 0;

  while (budget > 0) {
    let prezzo = Math.trunc(Math.random() * 100);

    if (prezzo <= budget) {
      pezziTotali += 1;
      budget -= prezzo;

      document.getElementById(
        "mioBudget"
      ).innerHTML += `<p> Il totale della spesa effettuata $: ${prezzo} <br> Resto $:${budget}</p>`;
    }

    if (budget < 100) {
      break;
    }
  }
  document.getElementById("mioBudget").innerHTML +=
    "<p>Acquisti totali:" + pezziTotali + "</p>";
}
