// Questão 1:

function Q1(array) {

  if (array.length % 2 == 0) {
    return console.log("Array inválido.");
  }
  const compareNumbers = (a, b) => {
    return a - b;
  };
  const newArray = array.sort(compareNumbers);
  const index = (newArray.length + 1) / 2;
  console.log(newArray[index - 1]);
}

Q1([9, 2, 1, 4, 6]);
