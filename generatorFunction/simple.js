const idMaker = function* () {
    let id = 0
    while (true) {
        yield id++
    }
}
let myid = idMaker()
console.log(myid.next().value)
console.log(myid.next().value)
console.log(myid.next().value)
console.log(myid.next().value)
console.log(myid.next().value)
console.log(myid.next().value)
console.log(myid.next().value)
console.log(myid.next().value)
console.log(myid.next().value)
console.log(myid.next().value)