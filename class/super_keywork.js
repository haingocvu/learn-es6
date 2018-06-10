class Person {
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    sayHello(){
        console.log('hello from Person');
    }
}
class Student extends Person {
    sayHello(){
        super.sayHello();
        console.log('hello from student');
    }
}
let st = new Student('Tuyen', 28, 'banking');
st.sayHello();