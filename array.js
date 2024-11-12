// favoriteColors гэсэн array үүсгээд 5 дуртай өнгийг оруулна. Дараа нь гурав дахь өнгийг өөрчилж, шинэчилсэн array-ыг хэвлэ.
// levelsCompleted гэсэн array үүсгээд тоглоомын түвшин давсан эсэхээ boolean утгууд оруул. Хамгийн төгсгөлд нь шинээр true гэсэн утга өгч,  шинэчилсэн array-ыг хэвлэ.
// destinations array үүсгээд очихыг хүссэн 5 газрыг бич. Эхний газрыг устгаад шинэчилсэн array-ыг хэвлэ. Дараа нь хамгийн эхэнд нь “New York” гэсэн элемент нэмээд  шинэчилсэн array-ыг хэвлэ.
// ages гэсэн array зарлаад 18, 21, 22, 20, 23, 36, 79, гэсэн утгуудыг оноож тус array-д байгаа бүх тоог 5-аар нэмэгдүүл. шинэчилсэн array-ыг хэвлэ.
// numbers гэсэн array зарлаад 15ш тоо оруул.
// Дээрх array доторх тоонуудын нийлбэрийг ол.
// Дээрх аrray - ийн хамгийн их тоог ол.
// Дээрх аrray - ийн хамгийн бага тоог ол.
// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.
// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.
// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол.
// Дээрх олсон утгуудаа хэвлэж харуулаарай
// let favouriteColor = ["black", "red", "blue", "purple", "white"];
// favouriteColor[2] = "pink";
// console.log(favouriteColor);
// let levelsCompleted = [true, false, true, true, false];
// levelsCompleted.push(true);
// console.log(levelsCompleted);
// let destinations = ["india", "korea", "china", "russia"];
// destinations.shift();
// console.log(destinations);
// destinations.unshift("New York");
// console.log(destinations);

// let ages = [8, 21, 22, 20, 23, 36, 79];
// for (i = 0; i < ages.length; i++) {
//   ages[i] += 5;
// }
// console.log(ages);

// let numbers = [100, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);
// let b = 0;
// for (i = 0; i < numbers.length; i++) {
//   if (b < numbers[i]) {
//     b = numbers[i];
//   }
// }
// console.log(b);
// let d = numbers[0];
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] < d) {
//     d = numbers[i];
//   }
// }
// console.log(d);
// numbers.shift();
// numbers.push(29);
// console.log(numbers);

// let f = 0;
// let g = 0;

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     f++;
//   } else g++;
// }
// console.log(f, g);
let a = 5;
let b = 5;

for (let i = 0; i < a; i++) {
  let c = "";
  console.log(c);
  for (let j = 0; j < b; j++) {
    c += "* ";
  }
  console.log(c);
}
