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

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function checkZeroNine(numbers) {
  let returnTrue = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      returnTrue += 1;
    }
  }
  if (returnTrue !== 0) {
    return ('não é possível gerar um número de telefone com esses valores');
  } return true;
}

function checkPhoneNumber(numbers) {
  let repeat = 0;
  for (let x = 0; x < numbers.length; x += 1) {
    for (let y = 0; y < numbers.length; y += 1) {
      if (numbers[x] === numbers[y]) {
        repeat += 1;
      }
    }
    if (repeat >= 3) {
      return (false);
    } repeat = 0;
  } return (true);
}

function formatNumber(numbers) {
  let DDD = String(numbers[0]) + String(numbers[1]);
  let firstHalf = String(numbers[2]) + String(numbers[3]) + String(numbers[4]) + String(numbers[5]) + String(numbers[6]);
  let secondHalf = String(numbers[7]) + String(numbers[8]) + String(numbers[9]) + String(numbers[10]);
  return (`(${DDD}) ${firstHalf}-${secondHalf}`);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (checkPhoneNumber(numbers) === true && checkZeroNine(numbers) === true) {
    return formatNumber(numbers);
  }
  return 'não é possível gerar um número de telefone com esses valores';
}
console.log(generatePhoneNumber(numbers));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aquilet numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
