// tipi di dato
var str = 'Testo';
var num = 1000;
var bool = false;
var obj = {};
var arr = [];
var strArr = ['Marco', 'Maria'];
var numArr = [0, 1, 2, 3];
var objArr = [{}, {}, {}];
var anyArr = ['Marco', 0, {}];
var any = 'ciao'; //qualunque tipo di dato 
var unk = 12; //dato sconosciuto 
var union = 'test'; //pup essere solo uno di questi due 
// funzioni
function saluto(testo) {
    console.log(testo);
}
function ottieniSaluto(testo) {
    return testo;
}
// classi 
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = {
    name: 'Mario',
    lastName: 'Kov',
    age: 90
};
var user2 = {
    name: 'Mario',
    lastName: 'Kov',
    age: 90
};
var users = [user, user2];
