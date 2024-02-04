// Write a function called makeAvg() which will take an array of integers and the size of that array and return the average of those values.
function makeAvg(numbers) {
    let count = numbers.length;
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number;
    }
    console.log(sum);
    console.log(count);
    let allAvg = sum / count;
    return allAvg;
}
const numbers = [14, 34, 55, 67, 89, 95];
const avg = makeAvg(numbers);
console.log('Average of those values are: ', avg);