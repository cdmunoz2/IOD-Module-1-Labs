/* In this function declaration, we're using the subtract identifier to return the difference of the 2 numbers represented by the parameters of a and b. We're then calling the values of 50 and 10 with the call function console.log. */
function subtract(a, b) {
    return a - b;
}

console.log(subtract(50, 10));

// This will return the subtraction of 2 number
function subtract(a, b) {
}

// Subtract Test #1
if (subtract(10, 0) != 10) {
    throw new Error('Test failed');
}

// Subtract Test #2
if (subtract(15, 0.2) != 14.8) {
    throw new Error('Test failed');
}

// Subtract Test #3
if (subtract(10, 20) != -10) {
    throw new Error('Test failed');
}

// Subtract Code
function subtract(a, b) {
    return a - b;
}

console.log('All tests passed.');

/* In this function declaration, we're adding by using the sum identifier for the parameters of a and b which we gave the values of 50 and 10 in the function call which will return the value of 60. */
function sum(a, b) {
    return a + b;
}

console.log(sum(50, 10));

// This will return the addition of 2 numbers
function sum(a, b) {
}

// Sum Test #1
if (sum(40, 0) != 40) {
    throw new Error('Test failed');
}

// Sum Test #2
if (sum(80, 0.5) != 80.5) {
    throw new Error('Test failed');
}

// Sum Test #3
if (sum(-20, 15) != -5) {
    throw new Error('Test failed');
}

// Sum Code
function sum(a, b) {
    return a + b;
}

console.log('All tests passed.');

/* The multiply function name will be invoked using the console.log() function call by multiplying 50 and 10 giving us the answer of 500. This can be achived as those numbers are represented for the parameters of a and b. */
function multiply(a, b) {
    return a * b;
}

console.log(multiply(50, 10));

// This will return the mutiplication of 2 number
function multiply(a, b) {
}

// Multiply Test #1
if (multiply(0, 10) != 0) {
    throw new Error('Test failed');
}

// Multiply Test #2
if (multiply(40, 0.3) != 12) {
    throw new Error('Test failed');
}

// Multiply Test #3
if (multiply(2, -10) != -20) {
    throw new Error('Test failed');
}

// Multiply Code
function multiply(a, b) {
    return a * b;
}

console.log('All tests passed.');

/* The answer for the following declaration (division) is 5, this can be achived through the console.log() call which we pass the values of 50 and 10 to a and b. */
function divide(a, b) {
    return a / b;
}

console.log(divide(50, 10));

// This will return the division of 2 number
function divide(a, b) {
}

// Division Test #1
if (divide(0, 10) != 0) {
    throw new Error('Test failed');
}

// Division Test #2
if (divide(10, 0.5) != 20) {
    throw new Error('Test failed');
}

// Division Test #3
if (divide(100, -20) != -5) {
    throw new Error('Test failed');
}

// Division Code
function divide(a, b) {
    return a / b;
}

console.log('All tests passed.');
