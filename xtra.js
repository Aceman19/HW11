class Cars {
    constructor(make, model) {
        this._make = make;
        this._model = model;
        this._color = "matte";
    }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    speed() {
        this._model = "fast";
        console.log(`Dodge cars are ${this._model}`);
    }

    color(color) {
        this._color = color;
        console.log(`The color of the Charger is ${this._color}`); 
    }
}

var Tyler1 = new Cars("Dodge", "Charger");
console.log(Tyler1.make);
console.log(Tyler1.model);
Tyler1.color("black");
Tyler1.speed();