// TASK 1
// for (let i = 0; i < 10; i++) {
//   document.write(`
//     <div>Це перший цикл</div>
//   `);
// }

// TASK 2
// for (let i = 0; i < 10; i++) {
//   document.write(`
//     <div>Це другий цикл ${i}</div>
//   `);
// }

// TASK 3-4
// let i = 0;
// while (i < 20) {
//   document.write(`
//     <h1>While ${i}</h1>
//   `)
//   i++
// }

// TASK 5
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write('<ul>');
//
// for (const listOfItem of listOfItems) {
//   document.write(`
//     <li>${listOfItem}</li>
//   `);
// }
//
// document.write('</ul>');

// TASK 6
// let products = [
//   {
//     title: 'milk',
//     price: 22,
//     image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//   },
//   {
//     title: 'juice',
//     price: 27,
//     image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//   },
//   {
//     title: 'tomato',
//     price: 47,
//     image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//   },
//   {
//     title: 'tea',
//     price: 15,
//     image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//   },
// ];
//
// for (let item of products) {
//   document.write(`
//     <div class="product-card">
//         <h3 class="product-title">${item.title}. Price - ${item.price}</h3>
//         <img src="${item.image}" alt="${item.title}" class="product-image">
//     </div>
//   `)
// }

// TASK 7
let users = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];

let usersTrue= [],
  usersFalse= [],
  usersOld = [];

for (let i = 0; i < users.length; i++) {
  const user = users[i];

  if (user.status) usersTrue[usersTrue.length] = user;
    else usersFalse[usersFalse.length] = user;

  if (user.age > 30) usersOld[usersOld.length] = user;
}

console.log(usersTrue);
console.log(usersFalse);
console.log(usersOld);