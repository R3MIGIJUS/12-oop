const Car = require('./Car')

class Audi extends Car {

    constructor (name,fuel,metai,vieta,durys,spalva){
    super (name,fuel,metai,vieta,durys,spalva);
        
    }
}

module.exports = Audi;