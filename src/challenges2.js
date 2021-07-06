// Desafio 10
function techList(tech, name) {
  let newList = [];
  let techSort = tech.sort();
  if (techSort.length > 0) {
    for (let index = 0; index < techSort.length; index += 1) {
      let technology = {
        tech: techSort[index],
        name,
      };
      newList.push(technology);
    }
  } else {
    return 'Vazio!';
  }
  return newList;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  function checkPhoneNumber(numbers) {
    let repeat = 0;
    for (let x = 0; x < numbers.length; x += 1) {
      for (let y = 0; y < numbers.length; y += 1) {
        if (numbers[x] === numbers[y]) {
          repeat += 1;
        }
      }
      if (repeat > 0) {
        return ('não é possível gerar um número de telefone com esses valores');
      }
    }
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
