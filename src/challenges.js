// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2

function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(number) {
  let counter = 0;
  let sortedNumers = number.sort((a, b) => a - b);
  let highestNumber = sortedNumers[sortedNumers.length - 1];
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 > distance2) {
    return 'cat2';
  }
  if (distance1 < distance2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(0, 2, 2));

// Desafio 8

function fizzBuzz(arrayOfNumbers) {
  let newArray = [];
  arrayOfNumbers.forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return newArray.push('fizzBuzz');
    }
    if (number % 3 === 0) {
      return newArray.push('fizz');
    }
    if (number % 5 === 0) {
      return newArray.push('buzz');
    }
    return newArray.push('bug!');
  });
  return newArray;
}

// Desafio 9

function encode(encodedString) {
  encodedString = encodedString.replace(/a/g, '1');
  encodedString = encodedString.replace(/e/g, '2');
  encodedString = encodedString.replace(/i/g, '3');
  encodedString = encodedString.replace(/o/g, '4');
  encodedString = encodedString.replace(/u/g, '5');
  return (encodedString);
}

function decode(decodedString) {
  decodedString = decodedString.replace(/1/g, 'a');
  decodedString = decodedString.replace(/2/g, 'e');
  decodedString = decodedString.replace(/3/g, 'i');
  decodedString = decodedString.replace(/4/g, 'o');
  decodedString = decodedString.replace(/5/g, 'u');
  return (decodedString);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
