"use strict";

function Product(name, price) {
    console.log(this);
    this.name = name;
    this.price = price;
}

function Car(name, price) {
    Product.call(this, name, price);
    this.branch = 'Honda';
}

let car = new Car('SH', 90000000);
console.log(car);