const person = {
  name: "Расул",
  surname: "Джантотаев",
  nationality: "Карачаевец",
  age: 22,
  mail: "dzoharrtulparovic@gmail.com",
  job: "Грузчик",
  city: "Черкесск",
  country: "Россия"
}
// 3: создал обьект где перечислил свои данные

const carInfo = {
  brand: "BMW",
  model: "X5",
  year: 2020,
  color: "Черный",
  engine: "3.0L I6",
  transmission: "Автоматическая"
}

carInfo.carOwner = person;
// 4: создал обьект где перечислил данные о машине и добавил в него обьект person

const findSpeed = (carInfo) => {
  if (carInfo.maxSpeed) {
    return carInfo.maxSpeed;
  } else {
    carInfo.maxSpeed = 300;
  }
};
findSpeed(carInfo);
console.log(carInfo.maxSpeed);
// 5: создал функцию которая проверяет есть ли у обьекта carInfo свойство maxSpeed, если есть то возвращает его, если нет то добавляет его со значением 300

const outputValue = (carInfo, model) => {
  return carInfo[model];
};

console.log(outputValue(carInfo, "model"))
// 6: создал функцию которая выводит значение свойства обьекта carInfo по ключу model

const productList = ["яйца", "мука", "сахар", "молоко", "масло", "сыр"];
// 7: создал массив productList с продуктами

const books = [
  { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 },
  { title: "The Master and Margarita", author: "Mikhail Bulgakov", year: 1967 },
  { title: "Anna Karenina", author: "Leo Tolstoy", year: 1877 },
  { title: "The Idiot", author: "Fyodor Dostoevsky", year: 1869 }
];
// 8: создал массив books с объектами книг

const marvelComics = [
  { title: "Spider-Man", author: "Stan Lee", year: 1962 },
  { title: "Iron Man", author: "Stan Lee", year: 1963 },
  { title: "Captain America", author: "Jack Kirby", year: 1941 },
  { title: "Thor", author: "Stan Lee", year: 1962 },
  { title: "Hulk", author: "Stan Lee", year: 1962 }
];

const bookLibrary = [...books, ...marvelComics];
// 9: создал массив bookLibrary который объединяет массивы books и marvelComics

function addRareStatus(bookLibrary) {
  return bookLibrary.map(book => {
    book.year < 2000 ? book.isRare = true : book.isRare = false;
    return book;
  });
}

addRareStatus(bookLibrary);

console.log(bookLibrary);
// 10: создал функцию которая добавляет свойство isRare в каждый объект массива bookLibrary, если год издания книги меньше 2000 то isRare = true, иначе isRare = false