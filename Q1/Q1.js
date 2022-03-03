// Questão 1:


function Q1() {
  const prompt = require("prompt-sync")({ sigint: true });
  const arr = prompt("Insira seu array (somente números, sem espaços): ");
  const array = []
  for(i=0; i<arr.length; i++){
    array.push(arr[i])
  }
  // const array = parseInt(arr)
  console.log(array)
  if(array.length%2 == 0){
      return(
          console.log('Array inválido.')
      )
  }
  const compareNumbers = (a,b) =>{
    return a - b;
  }
  const newArray = array.sort(compareNumbers)
  console.log(newArray)
  const index = (newArray.length+1)/2
  console.log(`A mediana do array é: ${newArray[index-1]}`)
}

Q1();
