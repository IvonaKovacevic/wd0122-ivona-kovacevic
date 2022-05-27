let boolean:boolean = true;
if(boolean){
    console.log('ok');
    
}

let eta:number = 30;
if(eta < 18){
    console.log('Sei minorenne');
}else if (eta >= 18 && eta <= 120){
    console.log('Sei maggiorenne');
    
}else{
    console.log('Sei antico');
    
}
// un confronto genera sempre un booleano
console.log(eta >= 18 && eta <=120); //entrambe vere quindi true
console.log(eta>= 28 && eta <= 20); //entrambe false quindi false
console.log(eta >= 18 || eta <= 20); //una vera quindi true

let b:boolean = true;
console.log(!b); // l'operatore ! serve ad invertire il risultato



