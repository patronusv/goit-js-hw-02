function checkForSpam (str) { 
  'use strict';
  // Write code under this line
    let array = [];    
    array = str.split('');
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === '[' || array[i] === ']') {
            array.splice(i, 1);
        }
        
    }
    str = array.join('');
    // console.log(str);
    str = str.toLowerCase();
    console.log(str);
    array = str.split(' ');
    if (array.includes('spam')) {
        str = true;
    } else if (array.includes('sale')) {
        str = true;
    } else {
        str = false;
    }
    return str;
    
    
    // let array = [];
    // let message = str.toLowerCase();
    // array = message.split(' ');
    // if (array.includes('spam')) {
    //     str = true;
    // } else if (array.includes('sale')) {
    //     str = true;
    // } else {
    //     str = false;
    // }
    // console.log(array);
    // console.log(str);
    // return str;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true