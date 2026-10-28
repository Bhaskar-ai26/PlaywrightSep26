{
let person = {
    name: "John",
    age: 30,
    city: "New York",
    getDetails: function () {
        return this.name + this.age + this.city
    },

    getDetailsArrow: () => {
        return `${this.name}` + "is " + `${this.age}` + " old and lives in " + `${this.city}`
    }

};


console.log(person.getDetails())
console.log(person.getDetailsArrow()) // Arrow does not have 'this'

/* ----------- */
function Person(name, age , city){
    this.name= name;
    this.age = age;
    this.city = city;
    this.getDetails= function () {
        return this.age + this.name +this.city;

    };

}
let pp = new Person("Hi",20, "Mycity")
console.log(pp.getDetails())

}


//-----------
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    getDetails() {
        return this.name + " is " + this.age + " old and staying at " + this.city;

    }
}
let p = new Person("user1", 20, "Hyd");
console.log(p.getDetails())

let p1 = new Person("user2", 30, "Newyork");
console.log(p1.getDetails())

let p2 = new Person("user3", 40, "Florida");
console.log(p2.getDetails())