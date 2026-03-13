// Problem 1
// Function that prints numbers from 1 to 10

function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

printNumbers();


// Problem 2
// Function that returns square of a number

function square(num) {
    return num * num;
}

console.log("Square:", square(4));


// Problem 3
// Print even numbers from 1 to 20

function printEvenNumbers() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEvenNumbers();


// Problem 4
// Sum of numbers from 1 to n

function sumToN(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log("Sum:", sumToN(5));


// Problem 5
// Print elements of array

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let numbers = [10, 20, 30, 40];

printArray(numbers);