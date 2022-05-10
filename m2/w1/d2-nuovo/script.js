function iniziaAcquisto() {
  let budget = 1000;
  let pezziTotali = 0;

  while (budget > 0) {
    let prezzi = Math.floor(Math.random() * 100);

    if (prezzi <= budget) {
      pezziTotali += 1;
      budget -= prezzi;

      document.getElementById("mioBudget").innerHTML +=
        "<p> Il totale della spesa effettuata: £" +
        prezzi +
        "<br> Resto: £" +
        budget +
        "</p>";
    }
    if (budget < 200) {
      break;
    }
  }

  document.getElementById("mioBudget").innerHTML +=
    "<p>Acquisti totali:" + pezziTotali + "</p>";
}
