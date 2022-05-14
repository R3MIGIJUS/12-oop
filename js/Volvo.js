 class Volvo {
    constructor(model, fuel){
        this.modelis = model;
        this.kuras = fuel;
        this.metai = 2015;
       
    }
    pagaminimoMetai (){

        console.log(`Pagaminimo metai : ${this.metai} : Pagaminimo vieta - Švedija;`);
    }
}

module.exports = Volvo;
