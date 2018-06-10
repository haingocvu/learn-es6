class Person {
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    sayHello(){
        return 'hello from Person';
    }
}
class Student extends Person {
    sayHello(){
        return 'hello from student';
    }
}
let st = new Student('Tuyen', 28, 'banking');
console.log(st.sayHello());