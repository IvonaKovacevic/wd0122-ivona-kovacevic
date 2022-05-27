// switch(mese){
//     case 1:
//         console.log('gennaio');
//         break;
//     case 2:
//         console.log('febbraio');
//         break;
//     default:
//         console.log(`non esiste il mese numero `);       
// }


// scacchiera
document.write('<table>');
for(let i=0; i<8; i++){
    document.write(`<tr>`)
    for(let j=0;j<8;j++){
        let color:string = j %2 ? '#000' : '#fff'
        document.write(`<td style="background-color:">${i}</td>`)
    }

}
document.write('</table>');