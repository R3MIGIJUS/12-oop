
const Dog = require ('./js/Dog');    // importavimo f-ja javaScript objektiniame programavime
const Cat = require ('./js/Cat');
const Horse = require('./js/Horse');


const Rexas = new Dog ('Rex', 'white',"hasTale");
const Spaikas = new Dog("Spike","black", "noTale");

console.log(Rexas);
console.log(Spaikas);

Spaikas.voice();   // Čia parašame daug kartu, tam, kad parodytume, kad veikia voiceCount parametras, ir puikiai skaičiuoja, kelis kartus suloja skirtingi šunis , Rexas ir Spaikas.
Rexas.voice();
Spaikas.voice();
Spaikas.voice();
Spaikas.voice();



//       Cat objekto kūrimas

const Katinas = new Cat("Rainis", "white"); 
console.log(Katinas);

//       Horse objektas

const Arklys = new Horse ('Žaibas', "Brown");
console.log(Arklys);


Arklys.voice();
Arklys.voice();
Arklys.voice();



//                      NAUJAS OBJEKTAS APIE AUTOMOBILIUS

const Volvo = require ('./js/Volvo');


const Automobilis = new Volvo ("V60", "Dyzelis", "Švedija");
console.log(Automobilis);


Automobilis.pagaminimoMetai ();

//----------------------------------------------------------------------------//

const BMW = require('./js/Bmw');

const Auto = new BMW ("5.50", "Benzinas", "1991","Vokietija");

console.log(Auto);

Auto.pagaminimoMetai();

//------------------------------------------------------------------------------//

const Audi = require('./js/Audi');

const car1 = new Audi('RS6', "Benzinas", "2021","Vokietijoje","Dvi durys", "Balta");

console.log(car1);

car1.pagaminimoMetai();






