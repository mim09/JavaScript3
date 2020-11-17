
class Person {
  constructor(name, age, city, children, job, eats) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.children = children;
    this.job = job;
    this.eats = eats;
  }
  get person() {
    return `${this.name} is a man year old ${this.what}, that lives in ${this.city}.
        He has a wife and ${this.children} children.
        As a day job he's a ${this.job} worker, that makes houses.
        He likes to ${this.eats} and smoke water pipe.`
  }
}

class Horse {
  constructor(what, name, age, color, eats) {
    this.what = what;
    this.name = name;
    this.age = age;
    this.color = color;
    this.eats = eats;
  }
  get horse() {
    return `Abdulkerim has a ${this.what}, named ${this.name}.
  The horse is ${this.age} years old and has the color ${this.color}.
  Usually the horse eats ${this.eats} or helps transport materials for Abdulkerim. \n And they lived happily ever after!`
  }

}
const person1 = new Person('Abdulkerim', '35', 'riyadh', '3', 'construction', 'dates');
console.log(person1.person);
const horse1 = new Horse('horse', 'Adel', '15', 'brown', 'grass');
console.log(horse1.horse);