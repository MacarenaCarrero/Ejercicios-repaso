//primero

const addition = (number) => {
  const double = number + 2;
  return double;
};

const resultAddition = addition(3);
console.log(resultAddition);

//segundo
const multiplication = (number) => {
  const double = number * 2;
  return double;
};

const resumultiplication = multiplication(3);
console.log(resumultiplication);

//tercero

const wLength = (word) => {
  const wordLength = word.length;
  return wordLength;
};

const resultWordLength = wLength("Hola");
console.log(resultWordLength);

//cuarto

const upperLetters = (word) => {
  const converterWord = word.toUpperCase();
  return converterWord;
};

const resultConverterWord = upperLetters("hola");
console.log(resultConverterWord);

//quinto

const equals = (word, word1) => {
  if (word === word1) {
    return "Las palabras son iguales";
  } else {
    return "No son iguales";
  }
};

const resultEquals = equals("Macarena", "Macarena");
const resultEquals2 = equals("maca", "macarena");
console.log(resultEquals);
console.log(resultEquals2);

//sexto

const multiplicationNumbers = (num1, num2) => {
  const multiNumbers = num1 * num2;
  return multiNumbers;
};

const resultMultiNumbers = multiplicationNumbers(3, 3);
console.log(resultMultiNumbers);

//septimo

const sumDigits =(number) =>{
const num1= number [0]
const num2 =number [1]
const num3=number [2]

const additionNumber = num1 +num2+num3
return additionNumber

} 

const resultAdditionNumber =sumDigits ([326])
console.log (resultAdditionNumber)