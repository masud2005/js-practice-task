
/*
Problem-2:
    For this object below add a property named passenger capacity with value 5

    const car = {
        make: "Toyota",
        model: "Corolla",
        year: 2020
    };
*/


// Solve it -----

const car = {
    make: "Toyoto",
    model: "Corolla",
    year: 2020,
}

// dot notation
car.passenger = 5;
console.log(car)

// bracket notation
car["passenger"] = 5;
console.log(car);