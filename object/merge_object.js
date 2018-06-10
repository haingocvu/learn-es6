let person = {
    name: 'Quynh',
    age: '18'
}
let Vy = Object.assign(person);
console.log(Vy);
Vy.name = 'Vy';
console.log(Vy);
console.log(person);