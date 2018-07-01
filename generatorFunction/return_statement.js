const yieldAndReturn = function* () {
    yield 10;
    return 20;
    yield 30;
}

let gen = yieldAndReturn();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());