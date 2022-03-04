//Questão 3:

function Q3(string) {
  const s = string.replace(/\s/g, "");
  const length = Math.ceil(Math.sqrt(s.length));
  const array = [];

  for (i = 0; i < length; i++) {
    for (j = i; j < s.length; j = j + length) {
      array.push(s[j]);
    }
    array.push(" ");
  }
  const text = array.toString();
  const FinalString = text.replace(/,/g, "");
  console.log(FinalString);
}

Q3("tenha um bom dia");
