let arr = [
    {name: 'Hai', age: 28},
    {name: 'Tuyen', age: 28},
    {name: 'Hello', age: 25},
    {name: 'Hi', age: 22},
    {name: 'abc', age: 20}
];
let sorted = arr.sort((a, b)=>{
    if(a.name < b.name) return 1;
        else if(a.name > b.name) return -1;
            else return 0;
});
console.log(sorted);