'use strict'

function formatString (string, maxLength = 40) {
  // Write code under this line
    let array = [];
    array = string.split('');
    if (array.length < maxLength) {
        string = array.join('');
    } else {
        for (let i = maxLength; i < string.length; i += 1){
        array.pop();        
        }
        for (let i = 0; i < 3; i += 1){
            array.push('.');
        }
        string = array.join('');
    }

    // console.log(array);
    // console.log(string);
    return string;
    
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'