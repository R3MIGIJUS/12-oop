class Car {

    constructor (name,fuel,metai,vieta,durys,spalva){
        this.modelis = name ;
        this.fuel = fuel;
        this.metai = metai;
        this.pagaminimoVieta = vieta;
        this.duruSkaicius = durys;
        this.spalva = spalva;

    }
    pagaminimoMetai (){

        console.log(`Pagaminimo metai : ${this.metai} : Pagaminimo vieta - ${this.pagaminimoVieta};`);
    }
}


module.exports = Car;