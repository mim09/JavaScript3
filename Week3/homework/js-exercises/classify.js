// Abdulkareem is a 35 year old man, that lives in Riyadh.
// He has a wife and 3 children.As a day job he's a construction worker, that makes houses.
// He likes to eat dates and smoke water pipe.

// Abdulkareem has a horse, named Adel.
// The horse is 15 years old and has the color brown.
// Usually the horse eats grass or helps transport materials for Abdulkareem.

// And they lived happily ever after!

class Person {
  constructor(name, what, age, city, children, job, eats) {
    this.what = what;
    this.name = name;
    this.age = age;
    this.city = city;
    this.children = children;
    this.job = job;
    this.eats = eats;
  }
  get person() {
    return `${this.name} is a ${this.age} year old ${this.what}, that lives in ${this.city}.
        He has a wife and ${this.children} children.
        As a day job he's a ${this.job} worker, that makes houses.
        He likes to ${this.eats} and smoke water pipe.`
  }
}

class Horse extends Person {
  constructor(what, name, age, color, eats, job) {
    super(what, name, age, eats, job)
    this.color = color
  }
  get horse() {
    return `${person1.name} has a ${this.what}, named ${this.name}.
  The horse is ${this.age} years old and has the color ${this.color}.
  Usually the horse eats ${this.eats} or helps transport materials for ${person1.name}.`
  }

}
const person1 = new Person('Abdulkerim', 'man', '35', 'riyadh', '3', 'construction', 'dates');
console.log(person1.person);
const horse1 = new Horse('horse', 'Adel', '15', 'brown', 'grass');
console.log(horse1.horse);