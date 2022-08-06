class Car {
    engine;

    constructor(engine) {
        this.engine = engine;

        console.log('一俩崭新的汽车');
    }


    drive() {
        console.log('呜呜～～～');
    }
}

class PickupTruck extends Car {
}

const  p1 = new PickupTruck ('V8');
p1.drive();

console.log(p1);