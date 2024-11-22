function numberMaxMin(number = []) {
  let Max = 0;
  let Min = 0;
  for (i = 0; i < number.length; i++) {
    if (Max < number[i]) {
      Max = number[i];
    }
  }
  console.log("Max :", Max, "Min:", Min);
}

numberMaxMin([10, 102, 12, 3, 4, 2, 5, 9]);
