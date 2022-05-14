const Car = require("./Car");                   // Importuojamas Car objektas;

class BMW extends Car {                         // Paimami metodai ir jų parametrai iš objekto "Car", tam kad nereikėtų perrašynėti.

    constructor (name,fuel,metai,vieta){
        super(name,fuel,metai,vieta);
    }
    
    pagaminimoMetai (){
    console.log(`Pagaminimo metai : ${this.metai} : Pagaminimo vieta - Vokietija`);
    }
}

module.exports = BMW;
