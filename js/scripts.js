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



//octavo

const compareWords = (word1, word2) => {
if (word1.length > word2.length){
  return word1;
  }else if (word1.length < word2.length){
    return word2;
  }else { 
    return ("Las dos palabras son iguales")
  }
}

const resultCompareWords = compareWords("avion", "flor")
console.log(resultCompareWords)

const resultCompareWords2 = compareWords("burro", "burro")
console.log (resultCompareWords2)

//noveno

const getFirstElement = word => {
  return word[0]
}

const resultGetFirstElement= getFirstElement ("Gatito")
console.log (resultGetFirstElement)

//decimo

const getArrayElement = (word, position) =>{
  return word[position]

}
const resultGetArrayElement =getArrayElement (["libro", "oso"],1);
console.log(resultGetArrayElement)

//undecimo

const shortestWord =(word1, word2) => {
  if (word1.length >word2.length){
    return word2
  } else if( word1.length < word2.length){
    return word1
  }else{
    return "Ambas palabras tienen la misma longitud"
  }
}

const resultShortestWord = shortestWord ("mariposa","agua")
console.log (resultShortestWord)

//duodecimo

const onlyEven= (num1, num2, num3) => {
  let numbers =[]

  if(num1 % 2 ===0){
    numbers.push(num1)
  }
  if (num2 % 2 ===0){
    numbers.push(num2)
  }
  if( num3 % 2 ===0){
    numbers.push(num3)
  }
  return numbers
}

const resultNumbers = onlyEven(31,20,40)
console.log(resultNumbers)

//decimotercero

const baseExponent = number => {
  const square =Math.pow (number,2)
    const cube = Math.pow(number,3)
    

    return `El cuadrado es ${square} y el cubo es ${cube}`
  
}

const resultBaseExponent = baseExponent(5)
console.log (resultBaseExponent)
