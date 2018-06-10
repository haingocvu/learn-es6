class Person {
    constructor(name){
        this.name = name;
    }
}
class Student extends Person {
    getName(){
        return this.name;
    }
}
let st = new Student('Hai');
console.log(st.getName());