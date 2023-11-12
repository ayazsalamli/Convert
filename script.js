let Azn =  prompt('How much manat do you want to convert?'); 
let LIRA;
let EURa;



LIRA = Azn * 16.80;

let StringLira = Azn + ' MANAT =' + LIRA + ' LIRA' ;



document.getElementById('Lira').innerHTML = StringLira;

EURa = Azn * 0.55;

let StringEuro =  Azn + ' MANAT = ' + EURa + ' EURO ';
document.getElementById('Euro').innerHTML = StringEuro ;





