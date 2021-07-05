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
function generatePhoneNumber() {
  // seu código aqui
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
