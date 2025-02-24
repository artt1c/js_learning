// let a = 0;
// a++;
//
// for (let i = 0; i < 6; i ++) {
//   console.log(i);
// }
//

// --------- itar
//
// const array = [1, 23, 3, 5, 6];
//
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }


// ritar
// for (let i = array.length - 1; i >= 0; i--) {
//   const arrayElement = array[i];
//
// }

// for of
   // iter
 // for (const item of array) {
 //   console.log(item);
 // }


// const user = {
//   id: 1,
//   name: "John Smith",
//   age: 25,
//   skills: ['html', 'javascript', 'java']
// }
//
// // itin
// for (const userKey in user) {
//   console.log(userKey, user[userKey]);
//   if (Array.isArray(user[userKey])) {
//     for (const item of user[userKey]) {
//       console.log(item);
//     }
//   }
// }
//
// let users = [
//   {name: "John", email: "john@example.com"},
//   {name: "Joe", email: "joe@example.com"},
//   {name: "John1", email: "john@example.com"},
//   {name: "Joe1", email: "john1@example.com"},
// ]
//
// let arrTrue = []
// let arrFalse = []
//
// let i = 0;
//
// while (i < users.length) {
//   let  user  = users[i];
//
//   if( user.email === "john@example.com" ){
//     arrTrue[arrTrue.length] = user;
//     // arrTrue.push(user);
//   } else {
//     arrFalse[arrFalse.length] = user;
//   }
//
//   i++;
// }
// console.log(arrTrue);
// console.log(arrFalse);
//
// do {
//   console.log('asds');
// } while (false)

// let products = [
//   {titles: 'Product 1', price: '40'},
//   {titles: 'Product 2', price: '80'},
//   {titles: 'Product 3', price: '20'},
// ]
//
// for (const product of products) {
//   document.write(`
//     <div>
//       <h2>Назва: ${product.titles} Ціна: ${product.price}</h2>
//     </div>
//   `)
// }
