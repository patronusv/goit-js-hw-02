'use strict'
function findLongestWord (string = "") {
  // Write code under this line
    let array;
let result = '';
    array = string.split(' ');
    for (let i = 0; i < array.length; i += 1){
        if (result.length < array[i].length) {
            result = array[i];
        }
    }
    console.log(array);
    console.log(result);
    return result;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'