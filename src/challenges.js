// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2

function calcArea(base, height) {
  // eslint-disable-next-line no-shadow
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
  return (array[array.length - 1] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(numeros) {
  let counter = 0;
  let emOrdem = numeros.sort((a,b) => a-b)
  let maiorNumero = emOrdem[emOrdem.length - 1]
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === maiorNumero) {
      counter += 1;
    } 
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numeros) {
  let novoArray = [];
  for (let number of numeros)
    if (number % 3 === 0 && number % 5 !== 0) {
      novoArray.push('fizz');
    } else if (number % 5 === 0 && number % 3 !== 0) {
      novoArray.push('buzz');
    } else if (number % 3 === 0 && number % 5 === 0) {
      novoArray.push('fizzBuzz');
    } else if (number % 3 !== 0 && number % 5 !== 0) {
      novoArray.push('bug!');
    }
  return(novoArray);
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
