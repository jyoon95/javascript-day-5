// guitar
// color, guitarType, numString

class Guitar {
    constructor (color, guitarType, numString){
        this.color = color;
        this.guitarType = guitarType;
        this.numString = numString;
    }
    printModelDetail(){
        console.log(`The guitar color is ${this.color} \nThis guitar type is ${this.guitarType} \nThis guitar has ${this.numString} strings`)
    }
}

const electric = new Guitar("red", "electric", 6);
const bass = new Guitar("black", "bass", 5);

electric.printModelDetail();
bass.printModelDetail();