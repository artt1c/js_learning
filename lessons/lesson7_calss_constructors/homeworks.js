// // TASK 1
// function User(id, name, surname, email, phone) {
//   this.id = id;
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
//   this.phone = phone;
// }
//
// const users = [
//   new User(1, "Іван", "Петров", "ivan.petrov@example.com", "+380671234567"),
//   new User(2, "Марія", "Іванова", "maria.ivanova@example.com", "+380672345678"),
//   new User(3, "Олександр", "Сидоров", "olex.sidorov@example.com", "+380673456789"),
//   new User(4, "Наталія", "Коваленко", "nat.kovalenko@example.com", "+380674567890"),
//   new User(5, "Андрій", "Мельник", "and.melnik@example.com", "+380675678901"),
//   new User(6, "Оксана", "Ткаченко", "oks.tkach@example.com", "+380676789012"),
//   new User(7, "Дмитро", "Бондар", "dmitro.bondar@example.com", "+380677890123"),
//   new User(8, "Вікторія", "Гончар", "vika.gonchar@example.com", "+380678901234"),
//   new User(9, "Сергій", "Кравченко", "serg.kravch@example.com", "+380679012345"),
//   new User(10, "Анна", "Шевченко", "anna.shevch@example.com", "+380670123456")
// ];
//
// console.log(users);
//
// //TASK 2
// console.log(users.filter(user => !(user.id % 2)));
//
// // TASK 3
// console.log(users.sort((user1, user2) => user1.id - user2.id));
//
// //TASK 4
// function Client(id, name, surname, email, phone, order) {
//   User.apply(this, arguments);
//   this.order = order;
// }
//
// const clients = [
//   new Client(1, "Іван", "Петров", "ivan.petrov@example.com", "+380671234567", ["Ноутбук", "Смартфон"]),
//   new Client(2, "Марія", "Іванова", "maria.ivanova@example.com", "+380672345678", ["Смартфон", "Навушники"]),
//   new Client(3, "Олександр", "Сидоров", "olex.sidorov@example.com", "+380673456789", ["Ноутбук", "Монітор", "Клавіатура", "Миша"]),
//   new Client(4, "Наталія", "Коваленко", "nat.kovalenko@example.com", "+380674567890", ["Флешка"]),
//   new Client(5, "Андрій", "Мельник", "and.melnik@example.com", "+380675678901", ["Смартфон","Зарядний пристрій"]),
//   new Client(6, "Оксана", "Ткаченко", "oks.tkach@example.com", "+380676789012", ["Книга"]),
//   new Client(7, "Дмитро", "Бондар", "dmitro.bondar@example.com", "+380677890123", ["Ноутбук", "Смартфон", "Навушники", "Монітор", "Клавіатура", "Миша"]),
//   new Client(8, "Вікторія", "Гончар", "vika.gonchar@example.com", "+380678901234", ["Ноутбук"]),
//   new Client(9, "Сергій", "Кравченко", "serg.kravch@example.com", "+380679012345", ["Смартфон", "Зарядний пристрій", "Книга"]),
//   new Client(10, "Анна", "Шевченко", "anna.shevch@example.com", "+380670123456", ["Ноутбук", "Смартфон", "Навушники", "Монітор", "Клавіатура", "Миша", "Принтер", "Флешка", "Зарядний пристрій", "Книга"])
// ];
//
// console.log(clients);
//
// // TASK 5
// console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));

// // TASK 6
// function Car(model, manufacturer, yearManufacture, maxSpeed, engineCap) {
//   this.model = model;
//   this.manufacturer = manufacturer;
//   this.yearManufacture = yearManufacture;
//   this.maxSpeed = maxSpeed;
//   this.engineCap = engineCap;
//   this.drive = function () {
//     console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//   }
//   this.info = function () {
//     console.log(
//       `модель - ${this.model}\nвиробник - ${this.manufacturer}\nрік випуску - ${this.yearManufacture}\nмаксимальна швидкість - ${this.maxSpeed}\nоб'єм двигуна - ${this.engineCap}`);
//   }
//   this.increaseMaxSpeed = function (newSpeed) {
//     if (newSpeed > this.maxSpeed) this.maxSpeed = newSpeed;
//   }
//   this.changeYear = function(newValue) {
//     if (Number.isInteger(newValue)) this.yearManufacture = newValue;
//   }
//   this.addDriver = function (driver) {
//     this.driver = driver;
//   }
// }
//
// let car = new Car('sad', 'toyota', 2009, 320, 2.8)
// car.info();
// car.drive();
// car.increaseMaxSpeed(340);
// car.changeYear(2000)
// car.addDriver({id: 1,name: 'roman'})
// console.log(car);
// car.info();

// // TASK 7
// class Car {
//   constructor(model, manufacturer, yearManufacture, maxSpeed, engineCap) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearManufacture = yearManufacture;
//     this.maxSpeed = maxSpeed;
//     this.engineCap = engineCap;
//   }
//
//   drive() {
//     console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//   }
//   info() {
//     console.log(
//       `модель - ${this.model}\nвиробник - ${this.manufacturer}\nрік випуску - ${this.yearManufacture}\nмаксимальна швидкість - ${this.maxSpeed}\nоб'єм двигуна - ${this.engineCap}`);
//   }
//   increaseMaxSpeed(newSpeed) {
//     if (newSpeed > this.maxSpeed) this.maxSpeed = newSpeed;
//   }
//   changeYear(newValue) {
//     if (Number.isInteger(newValue)) this.yearManufacture = newValue;
//   }
//   addDriver(driver) {
//     this.driver = driver;
//   }
// }
//
// let carClass = new Car('supra 80e', 'toyota', 2020, 300, 4);
// console.log(carClass);
// carClass.info()
// carClass.increaseMaxSpeed();

class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

class Prince {
  constructor(name, age, findShoe) {
    this.name = name;
    this.age = age;
    this.findShoe = findShoe;
  }
}

const cinderellas = [
  new Cinderella('Анастасія', 18, 36),
  new Cinderella('Ольга', 20, 37),
  new Cinderella('Катерина', 19, 35),
  new Cinderella('Марія', 21, 38),
  new Cinderella('Софія', 22, 36),
  new Cinderella('Дарина', 18, 34),
  new Cinderella('Вікторія', 23, 39),
  new Cinderella('Єлизавета', 20, 37),
  new Cinderella('Злата', 19, 35),
  new Cinderella('Анна', 21, 36),
];

const prince = new Prince('Vasya', 20, 34);

cinderellas.forEach((cinderella) => {
  if (cinderella.footSize === prince.findShoe) {
    console.log(cinderella);
  }
})

console.log(cinderellas.find(cinderella => cinderella.footSize === prince.findShoe));

// Prototype

Array.prototype.forEach = function (callbackfn) {
  for(let i = 0; i < this.length; i++) {
    callbackfn(this[i]);
  }
}

cinderellas.forEach((a) => {
  console.log('це імена виведені через кастомний forEach ' + a.name);
})