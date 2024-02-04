/**
 * Write a function called oddEven() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.
*/
function oddEven(numbers) {
    if (numbers % 2 === 0) {
        // const evenNum = 'Even number: '+ number;
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
const num1 = oddEven(55);
console.log(num1);
const num2 = oddEven(88);
console.log(num2);