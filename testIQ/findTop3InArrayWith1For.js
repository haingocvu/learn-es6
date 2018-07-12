let a = [2, 5, 7, 4, 8, 9, 3];

//default top1 > top2 > top3
let top1 = -Infinity;
let top2 = -Infinity;
let top3 = -Infinity;
let temp;

for (let i = 0; i < a.length; i++) {
    if (a[i] > top3) {
        top3 = a[i]
    }
    if (top3 > top2) {
        temp = top3;
        top3 = top2;
        top2 = temp;
    }
    if (top2 > top1) {
        temp = top2;
        top2 = top1;
        top1 = temp;
    }
}

console.log(top1);
console.log(top2);
console.log(top3);