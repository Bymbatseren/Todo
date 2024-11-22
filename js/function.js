function calculateProblems(n) {
  let b = n * 2;
  console.log("Би", n, "цаг суралцаад", b, "бодлого бодлоо");
}
calculateProblems(10);
function printFavouriteFood() {
  let name = "sara";
  let food = "pizza";
  console.log(name, "loves to eat", food);
}

printFavouriteFood();
function printWeather(cityName, weather) {
  console.log(cityName, weather, "c", "right now");
}
printWeather("chicago", 58);
printWeather("washington", 100);
function printBookDetails(title, author, yearPublished) {
  console.log(title, author, yearPublished);
}
printBookDetails("harry potter", "J.K.Rowling", 1997);

function calculateArea(width, height) {
  let area = width * height;
  console.log("area", area);
}
calculateArea(100, 200);

function calculateVolume(width, height, depth) {
  let area = width * height * depth;
  console.log("volume", area);
}
calculateVolume(10, 20, 30);
function findDigitCount(n, b) {
  let c = 0;
  while (n > 0) {
    if (n % 10 == b) {
      c++;
    }
    n = (n - (n % 10)) / 10;
  }
  console.log(c);
}
findDigitCount(2222222222222, 2);

function triangleNumber(n) {
  let result;
  for (let i = 0; i <= n; i++) {
    let o = 1;
    while (o < i + 1) {
      result = result + " " + o;
      o++;
    }
    result = result + "\n";
  }
  console.log(result);
}

triangleNumber(20);

function filterBooksByYear(filteredYear) {
  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      year: 1967,
    },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  let filteredBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].year >= filteredYear) {
      filteredBooks.push(books[i]);
    }
  }
  return filteredBooks;
}
console.log(filterBooksByYear(1800));
