// function declation hosting
// function calc(a, b) {
//   return a + b;
// }

// function expression no hosting
// const calculator = function(a, b) {
//   return a + b;
// }
// console.log(calculator(10, 20));

// arrow function no hosting + no arguments
// const calculator = (a, b) => a + b;
// console.log(calculator(10, 20));

// const user = {
//   id: 123,
//   name: 'Mian',
//   greeting1: function (msg) {
//     console.log('Hello1', msg, this.name);
//   //   this - цей об'єкт, в якому оголошена функія
//   },
//   greeting2(msg) {
//     console.log('Hello2', msg, this.name);
//     //   this - цей об'єкт, в якому оголошена функія
//   },
//   greeting3: (msg) => {
//     console.log('Hello3', msg, this.name);
//     //   this - цей глобальний об'єкт window
//   }
// }
//
// user.greeting1('you');
// user.greeting2('me');
// user.greeting3('us');


// function userBuilder(id, name) {
//   let user = {
//     id,
//     name
//   };
//
//   return {
//     getId: () => console.log(user.id),
//     getName() {
//       console.log(user.name);
//     },
//     setId(id) {
//       if (user.id > 0) {
//         user.id = id;
//       }
//     },
//     setName(name) {
//       if (name) {
//         user.name = name;
//       }
//     },
//     getObjCopy() {
//       return {
//         id: user.id,
//         name: user.name,
//       }
//     }
//   };
// }
//
// let manipulatorUIverUser1 = userBuilder(1, 'kokos');
//
// manipulatorUIverUser1.getId();
// manipulatorUIverUser1.getName();
//
// manipulatorUIverUser1.setId(3);
// manipulatorUIverUser1.getId();
//
// manipulatorUIverUser1.setName('abrikos');
// manipulatorUIverUser1.getName();
//
// console.log(manipulatorUIverUser1.getObjCopy());

// let arr = [11, 22, 33, [44, 55], [66, 77, [111, [123, 123, 12], 222]]]
//
// let innerArray = []
//
// function flatter(arr) {
//   for (const arrElement of arr) {
//     if (Array.isArray(arrElement)) {
//       flatter(arrElement);
//     } else {
//       innerArray.push(arrElement)
//     }
//   }
// }
//
//
// flatter(arr);
// console.log(innerArray)
//
// function iterator(arr, i) {
//   console.log(arr[i]);
//   i++
//   if (i < arr.length) {
//     iterator(arr, i);
//   }
// }
//
// iterator(innerArray, 0);

// function* cardholder() {
//   let cards = [
//     {value: 6, suite: 'diamond'},
//     {value: 7, suite: 'spade'},
//     {value: 8, suite: 'diamond'},
//     {value: 9, suite: 'spade'}
//   ]
//   for (const card of cards) {
//     yield card;
//   }
// }
//
// let holder = cardholder();
//
// console.log(holder.next());
// console.log(holder.next());
// console.log(holder.next());
// console.log(holder.next());
// console.log(holder.next());

// try {
//   console.log(a)
// } catch (e) {
//   console.log(e)
// }
// console.log('asdf')
//
// function asd(a, b) {
//   if (b === 0) {
//     throw new Error('Ділення на нуль');
//   }
// }
// asd(1, 0)