class Person {
    constructor(name = 'Hai', age = 28, job = 'dev') {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getJob(){
        return this.job;
    }
}
let p = new Person('Tuyen', 28, 'banking');
console.log(p);
console.log(p.getName());
console.log(p instanceof Person);