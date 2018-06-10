let person = {
    name: 'Vy',
    displayName: function(){
        console.log(this.name);
    }
}
let nhi = Object.create(person);
nhi.name = 'Nhi';
nhi.displayName();