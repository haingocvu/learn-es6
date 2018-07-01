const logGenerator = function* () {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}

let logGen = logGenerator();
logGen.next();
logGen.next('anna').value;
logGen.next('julie').value;
logGen.next('john').value;