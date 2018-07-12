let a = [0, 9, 1, 3, 5, 6, 8, 10];
let temp;

function random(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        temp = a[i];
        a[i] = a[rand];
        a[rand] = temp;
    }
    return arr;
}

let newArr = random(a);
console.log(newArr)