function Q2() {
  const n = [1, 5, 3, 4, 2];
  const x = 2;
  let count = 0;
  for (i = 0; i < n.length; i++) {
    const difference = n[i] - x;
    for (j = 0; j < n.length; j++) {
      if (difference == n[j]) {
        count++;
      }
    }
  }
  console.log(count);
}

Q2();
