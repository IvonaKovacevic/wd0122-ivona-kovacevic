// tipi di dato

let str:string= 'Testo';
let num:number= 1000;
let bool:boolean= false;
let obj:object={}; 
let arr:[]=[];
let strArr:string[]=['Marco','Maria'];
let numArr:number[]=[0,1,2,3];
let objArr:object[]=[{},{},{}];
let anyArr:any[]=['Marco',0,{}];
let any:any = 'ciao'//qualunque tipo di dato 
let unk:unknown=12;//dato sconosciuto 

let union:(string|object)='test' //pup essere solo uno di questi due 

// funzioni
function saluto(testo:string):void{
    console.log(testo);    
}
function ottieniSaluto(testo:string):string{
    return testo
}

// classi 

class User{
    name!:string;
    lastName!:string;
    age!:number;
}

let user:User ={
    name:'Mario',
    lastName:'Kov',
    age:90
}
let user2:User ={
    name:'Mario',
    lastName:'Kov',
    age:90
}

let users:User[]=[user,user2]