//Questão 2:

function Q2(array, minus) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    const difference = array[i] - minus;
    for (j = 0; j < array.length; j++) {
      if (difference == array[j]) {
        count++;
      }
    }
  }
  console.log(count);
}

Q2([1, 5, 3, 4, 2], 2);
