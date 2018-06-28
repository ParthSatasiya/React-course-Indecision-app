const add = (a, b) => {
//    console.log(arguments);
    return a + b;  
};

console.log(add(5,6));

const user = {
    name: 'Parth',
    cities: ['Junagadh', 'Rajkot', 'Ahmdabad'],
    printPlaceLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);    
    }
};

console.log(user.printPlaceLived());

const multiplyer = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplyer.multiply());