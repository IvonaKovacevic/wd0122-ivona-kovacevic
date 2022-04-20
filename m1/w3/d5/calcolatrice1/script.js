function aggiungiNumero(dugme) {
  let numero = dugme.innerHTML;

  let display = document.querySelector("#operazioni");

  //   display.value += numero;
  display.value = display.value + numero;

  console.log(display);
}

function uguale() {
  let display = document.querySelector("#operazioni");
  display.value = eval(display.value);
}

function canc() {
  let display = document.querySelector("#operazioni");

  display.value = "";
}
