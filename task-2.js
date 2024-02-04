// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function oddEvenNumbers(numbers) {
    if (numbers % 2 !== 0) {
        const multiply = numbers * 2;
        return multiply;
    }
    else {
        const divide = numbers / 2;
        return divide;
    }
    console.log(numbers);
}
const num1 = 55;
let result = oddEvenNumbers(num1);
// console.log(result);
const num2 = 88;
result = oddEvenNumbers(num2);
// console.log(result);

/**
 * Another way to implement this problem.
 * If call the function and pass an array as argument then if the array values are odd number then multiply them by two and return the result. If an array values are even then divide them by two and return the result.
*/
function evenOddNumbers(numbers) {
    let even = [];
    let odd = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            let divide = number / 2;
            even.push(divide);
        }
        else {
            let multiply = number * 2;
            odd.push(multiply);
        }
    }
    let evenOddArr = [];
    evenOddArr.push('Divide of even Numbers is: ', even);
    evenOddArr.push('Multiply of odd Numbers is: ', odd);
    return evenOddArr;
    console.log(numbers);
}
const arr1 = [10, 35, 54, 67, 98, 112, 125, 160];
const result1 = evenOddNumbers(arr1);
console.log(result1);