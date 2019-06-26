
class Pet {
    constructor(animal, age, breed, sound){
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    // getter method
    get activity() {
        const today = new Date();
        const hour = today.getHours();

        if (hour > 8 && hour <= 20) {
            return 'playing';
        } else {
            return 'sleeping';
        }
    }

    get owner() {
        return this._owner;
    }

    // setter method
    set owner(owner) {
        // backing property
        this._owner = owner;
        console.log(`setter called: ${owner}`);
    }

    // creating object methods
    speak() {
        console.log(this.sound);
    }
}

class Owner {
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    set phone(phone){
        const phoneNormalized = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNormalized;
    }

    get phone(){
        return this._phone;
    }
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'Border Collie', 'woof');

console.log(ernie);

ernie.speak();
vera.speak();

// calling the getter property directly shows the current state
console.log(ernie.activity);
// accessing the whole object instead, doesn't show the getter prop in the list
console.log(ernie);

// calling setter
ernie.owner = new Owner('Ashley', '123 Main Street');
ernie.owner.phone = '(555) 555-5555';
console.log(ernie.owner.name);
console.log(ernie.owner.phone);