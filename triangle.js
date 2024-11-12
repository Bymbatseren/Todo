let n = 5;
let result = "";
for (let i = 0; i < n; i++) {
  let l = 0;
  let o = 0;
  for (let l = 0; l < n - i - 1; l++) {
    result = result + " ";
  }
  while (o < i + 1) {
    result = result + "* ";
    o++;
  }
  result = result + "\n";
}
console.log(result);
