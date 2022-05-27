let dataAttuale = new Date();
document.getElementById("data").innerHTML = dataAttuale;

dataAttuale.getDay();
document.getElementById("giorno").innerHTML = dataAttuale.getDay();

dataAttuale.getMonth();
document.getElementById("mese").innerHTML = dataAttuale.getMonth();

dataAttuale.getFullYear();
document.getElementById("anno").innerHTML = dataAttuale.getFullYear();

dataAttuale.getHours();
document.getElementById("ora").innerHTML = dataAttuale.getHours();
