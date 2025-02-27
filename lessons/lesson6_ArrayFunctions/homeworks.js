// // TASK 1
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);
//
// // TASK 2
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());
//
// // TASK 3
// console.log('HELLO WORLD'.toLowerCase())
// console.log('LOREM IPSUM'.toLowerCase())
// console.log('JAVASCRIPT IS COOL'.toLowerCase())
//
// // TASK 4
// let str = ' dirty string   '
// let clear = str.trim();
// console.log(clear, clear.length);
//
// // TAKS 5
// let str = 'Ревуть воли як ясла повні';
//
// function stringToArray(str) {
//   return str.split(' ');
// }
// let arr = stringToArray(str);
// console.log(arr);
//
// // TASK 6
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(item => `${item}`))
//
// //TASK 7
// let nums = [11,21,3];
// function sortNums(array,direction) {
//   switch(direction) {
//     case 'ascending':
//       return array.sort((a, b) => a - b);
//     case 'descending':
//       return array.sort((a, b) => b - a);
//   }
// }
//
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
//
// TASK 8
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
//
// const bigDurations = coursesAndDurationArray.toSorted((a, b) => b.monthDuration - a.monthDuration);
// const moreFive = coursesAndDurationArray.filter((course) => course.monthDuration > 5);
// const courses = coursesAndDurationArray.map((course, index) => {
//   return {id: index + 1,...course};
// })
// console.table(coursesAndDurationArray);
// console.table(bigDurations);
// console.table(moreFive);
// console.table(courses);
//
// TASK 9
const deck = [];

const suits = [
  { name: 'spade', color: 'black' },
  { name: 'clubs', color: 'black' },
  { name: 'diamond', color: 'red' },
  { name: 'heart', color: 'red' }
];

const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

for (const suit of suits) {
  for (const value of values) {
    deck.push({
      cardSuit: suit.name,
      value: value,
      color: suit.color
    })
  }
}
console.log(deck);

// TASK 10
let cardHolder = deck.reduce((acc, current) => {
  if (current.cardSuit === 'spade') {
    acc.spade.push(current);
  } else if (current.cardSuit === 'diamond') {
    acc.diamond.push(current);
  } else if (current.cardSuit === 'heart') {
    acc.hearts.push(current);
  } else {
    acc.clubs.push(current);
  }
  return acc;
}, {spade: [], diamond: [], hearts: [], clubs: []});
console.log(cardHolder)