const anotherGenerator = function* (x) {
    yield x;
    yield ++x;
    yield ++x;
}

const generator = function* (x) {
    yield x++;
    yield* anotherGenerator(x);
    yield x + 10;
}

gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);