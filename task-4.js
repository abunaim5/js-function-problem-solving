// Write a function called countZero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0's are there in that string.

function countZero(str) {
    let count = str.length;
    console.log(count);
    console.log(str);
    let zeros = [];
    // let zeroCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            // zeroCount = zeroCount + 1;
            zeros.push(str[i]);
        }
    }
    const allZero = zeros.length;
    console.log(zeros);
    // console.log(allZero);
    // console.log(zeroCount);
    return allZero;
}
const str = '01001101110001011001010111'
const countResult = countZero(str);
console.log('All available zeros are: ', countResult);