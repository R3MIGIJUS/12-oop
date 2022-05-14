class Horse {

    constructor (name, color){                                     // constructor metodas - tai panašiai kaip javaScript f-ja.Jis automatiškai pasileidžia sukurus objektą, šiuo atveju Dog
        this.vardas = name;                                              // Čia yra aprašyti parametrai,savybės Dog objekto;
        this.spalva = color;
        this.uodega = "Taip";
        this.voiceCount = 0;
    }

    voice (){                                                             // Sukurtas Voice Metodas
        //this.voiceCount++                                                 // Arba galima naudoti va taip: this.voiceCount+=1, šis parametras padidina po 1 vienetą.Taip suskaičiuojama kiek šuo suloja.
        console.log(`${this.vardas} : Yha ha !!! (${++this.voiceCount}) `);  // Kad padidinti šuns lojimu kiekį galima vietoje (this.voiceCount++ ) naudoti ${this.voiceCount++}, tai reiškia, kad įvykdžius šį metodą bus padidintas vienu vienetu, jei norime, kad prieš įvykdant šį metodą padidintume vienu vienetu, tada pliusus rašome prieš nurodytą parametrą ${++this.voiceCount} 

        
    }

   }

module.exports = Horse;                                                      // exportavimo f-ja javaScript objektiniame programavime