/* eslint-disable max-len */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 10

const techList = (arrayOfTech, name) => {
  if (arrayOfTech.length === 0) return 'Vazio!';

  const newListOfTech = [];
  const sortedTechs = arrayOfTech.sort();
  sortedTechs.forEach((tech) => {
    newListOfTech.push({
      tech,
      name,
    });
  });

  return newListOfTech;
};

// Desafio 11

function validateNumber(numbers) {
  let repeat = 0;
  for (let x = 0; x < numbers.length; x += 1) {
    for (let y = 0; y < numbers.length; y += 1) {
      if (numbers[x] === numbers[y]) {
        repeat += 1;
      }
    }
    if (repeat >= 3 || numbers[x] < 0 || numbers[x] > 9) {
      return false;
    } repeat = 0;
  } return true;
}

function formatNumber(numbers) {
  let DDD = String(numbers[0]) + String(numbers[1]);
  let firstHalf = String(numbers[2]) + String(numbers[3]) + String(numbers[4]) + String(numbers[5]) + String(numbers[6]);
  let secondHalf = String(numbers[7]) + String(numbers[8]) + String(numbers[9]) + String(numbers[10]);
  return (`(${DDD}) ${firstHalf}-${secondHalf}`);
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (validateNumber(numbers) === true) {
    return formatNumber(numbers);
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let isValid = false;
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    isValid = true;
  }
  return isValid;
}

// Desafio 13

function hydrate() {

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
