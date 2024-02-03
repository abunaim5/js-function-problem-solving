/**
 * Take four parameters. Multiply the four numbers and then return the result.
*/
let resultArr = [];
function multiply(a, b, c, d) {
    // console.log(a, b, c, d);
    let multiNum = a * b * c * d;
    resultArr.push(multiNum);
    return multiNum;
}
// First argument pass
const numbers = [5, 8, 10, 15];
let sumOfMultiply = multiply(numbers[0], numbers[1], numbers[2], numbers[3]);
console.log(sumOfMultiply);

// Another argument pass
const numbers2 = [7, 9, 12, 8];
sumOfMultiply = multiply(numbers2[0], numbers2[1], numbers2[2], numbers2[3]);
console.log(sumOfMultiply);
// Result of the multiple arguments in one array
console.log(resultArr);


// Try another way by spread operator
let resultArray = [];
function multiNum(a, b, c, d) {
    let multiply = a * b * c * d;
    resultArray.push(multiply);
    return multiply;
}
const prices1 = [5, 8, 10, 17];
const result = multiNum(...prices1);
console.log(result);
console.log(resultArray);
