function isLoginValid (login, min = 4, max = 16) {
  // Write code under this line
    let isValid;
    if (login.length < min) {
        isValid = false;
    } else if (login.length > max){
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}

function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
    let isUnique;
    if (allLogins.includes(login)) {
        isUnique = false;
    } else {
        isUnique = true;
    }
    return isUnique;
}

function addLogin (allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line    
    const isValid = isLoginValid(login);
    const isUnique = isLoginUnique(allLogins, login);
    if (isValid === false) {
        message = ERROR;        
        return message;       
    }
    if (isUnique === false) {
        message = REFUSAL;     
        return message;
    }    
      

    allLogins.push(login);
    message = SUCCESS;

    console.log(login);
    console.log(logins);
    console.log(isValid);
    console.log(isUnique);    
    return message;
    
        
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];


console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов' 