// let arr = []
// console.log(Array.isArray(arr))
// arr.push('asdf1');
// arr.push('asdf2');
// let number = arr.push('asdf3');
// console.log(arr);
// console.log(number);
//
// let pop = arr.pop()
// console.log(pop)
//
// arr.unshift('qweas');
// console.log(arr);
// // arr.shift();
// console.log(arr);
//
// let s = arr.join('!');
// console.log(s);
//
// let arr2 = [11, 22, 33];
//
// let concatArray = arr.concat(arr2);
// console.log(concatArray);
//
// concatArray.reverse();
// console.log(concatArray);
//
// console.log(concatArray.slice(1, 3));
// // let removeItems
// //   = concatArray.splice(2, 1, 111);
// // console.log(concatArray);
// // console.log(removeItems);
// console.log(concatArray);
//
// console.log(concatArray.indexOf(11));
// console.log(concatArray.indexOf(3 ,33));
// console.log(concatArray.includes(22));

let users = [
  {name: 'Roman', age: 19, status: true},
  { name: "Alice", age: 29, status: false },
  { name: "Bob", age: 21, status: false },
  { name: "Eve", age: 31, status: true },
  { name: "Charlie", age: 20, status: false },
  { name: "Dave", age: 31, status: true },
  { name: "Mallory", age: 26, status: false },
  { name: "Oscar", age: 28, status: true },
  { name: "Peggy", age: 18, status: false },
  { name: "Trent", age: 32, status: true },
];
// users.forEach(user => console.log(user));

// let resultFiltered = users.filter(user => !user.status);
// console.log(resultFiltered);

// let mapResults = users.map((user, i) => {
//   return {
//     id: i+1,
//     name: user.name,
//     age: user.age,
//     status: user.status
//   }
// });

// let mapResults = users.map((user, i) => {
//     let obj = JSON.parse(JSON.stringify(user));
//     obj.id = i + 1;
//   return obj;
// });
//
// let mapResults = users.map((user, i) => ({...user, id: i + 1}));
//
// console.table(users)
// console.table(mapResults)

// let toSortedArray =
//   users.toSorted((user1, user2) => user1.name.toLowerCase().localeCompare(user2.name.toLowerCase()));
//
// console.table(users);
// console.table(toSortedArray);

// let reduce = users.reduce((acc, user) => {
//   if (user.status) {
//     acc[0].push(user);
//   } else {
//     acc[1].push(user);
//   }
//   return acc
// },[[],[]]);

// let reduce = users.reduce((acc, user) => {
//
//   return acc += user.age;
// },0);
// console.table(reduce);

// function calculator(aNum, bNum, actionFn) {
//   actionFn(aNum, bNum);
// }
//
// calculator(10, 20, (a, b) => console.log((a + b) / 2));