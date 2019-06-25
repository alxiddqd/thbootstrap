const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

// Dot Notation

console.log(ernie.age);
console.log(ernie.breed);

ernie.bark();

// bracket notation

console.log(ernie['age']);
console.log(ernie['breed']);

ernie['bark']();

var prop = 'breed';
ernie[prop];

// changing props

ernie.age = 2;
ernie['age'] = 2;

ernie.color = 'black';
console.log(ernie);

// encapsulating object literal

const myString = {
    string: 'A simple sting just for learning purposes',
    // adding method
    countWords: function(){
        // accessing string prop, cutting by space character into array variable
        const wordArray = this.string.split(' ');
        // returning array lenght = number of words in the string
        return wordArray.length;
    }
}

// calling method

const numWords = myString.countWords();

// adding new prop
myString.characters = myString.string.length;

console.log(myString);