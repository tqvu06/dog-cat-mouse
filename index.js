var Dog = require('./dog');
var Cat = require('./cat');

var dog = new Dog('Luoc');

dog.sayHi();

var tom = new Cat('Tom', 'yellow');

dog.eat(tom);
console.log(dog);



