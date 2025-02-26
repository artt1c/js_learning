// // TASK 1
// const area = (numSideA, numSideB) => numSideA * numSideB;
//
// console.log(area(5, 6));

// // TASK 2
// const circleArea = (rad) => Math.pow(rad, 2) * Math.PI;
// console.log(circleArea(5));
//
// TASK 3
// const cylinderArea = (height, rad) => 2 * Math.PI * rad * height;
// console.log(cylinderArea(5, 6));
//
// TASK 4
// const printArrElement = (arr) => {
//   for (const arrElement of arr) {
//     console.log(arrElement);
//   }
// }
//
// console.log(printArrElement([1, 3, true, 'sdfg']));

// TASK 5
// const htmlParagraphWriter = (text) => document.write(`<p>${text}</p>`);
// htmlParagraphWriter('ferdgbdf');


//
// TASK 6
// const htmlListWriter =(text) => {
//   document.write(`
//     <ul>
//       <li>${text}</li>
//       <li>${text}</li>
//       <li>${text}</li>
//     </ul>
//   `);
// }
//
// htmlListWriter('hello')

//TASK 7
// const htmlListMoreWriter = (text, count) => {
//   document.write('<ul>');
//   for (let i = 0; i < count; i++) {
//     document.write(`<li>${text}</li>`);
//   }
//   document.write('</ul>');
// }
// htmlListMoreWriter('moretext', 20);

// TASK 8
// const htmlListDifferentArgsWriter = (...args) => {
//   document.write('<ul>');
//   for (const arg of args) {
//     document.write(`
//       <li>${arg}</li>
//     `);
//   }
//   document.write('</ul>');
// }
// htmlListDifferentArgsWriter(true, 213, 'sdg', undefined);

// TASK 9
// const htmlObjectWriter = (arr) => {
//   for (const arrElement of arr) {
//     document.write(`
//       <div>
//         <p>Block</p>
//         <span>id - ${arrElement.id}</span>
//         <span>Name - ${arrElement.name}</span>
//         <span>age - ${arrElement.age}</span>
//       </div>
//     `);
//   }
// }
//
// const persons= [
//   {id: 1, name: 'John', age: 20},
//   {id: 2, name: 'Olya', age: 18},
//   {id: 3, name: 'Mike', age: 30},
// ]
//
// htmlObjectWriter(persons);

// TASK 10
// const minElement = (arr) => {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   console.log(min)
//   return min;
// }
//
// minElement([4, 5, 1, 6, -8, -4, 5, -1])

// TASK 11
// const sum = (arr) => {
//   let result = 0;
//   for (const arrElement of arr) {
//     result += arrElement;
//   }
//   console.log(result);
//   return result;
// }
// sum([1, 2, 10])
//
// TASK 12
// const swap = (arr, index1, index2) => {
//   if (!(arr.length > index1 && arr.length > index2)) return;
//
//   let tmp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = tmp;
//
//   return arr;
// }
//
// console.log(swap([1, 4, 2, 3, 6], 3, 4));

// TASK 13
// const exchange = (value, arrAvailableCourse, selectCourse) => {
//   let course;
//   for (let item of arrAvailableCourse) {
//     if (item.currency === selectCourse) {
//       course = item.value;
//       break;
//     }
//   }
//   if (!course) {
//     console.log(`${selectCourse} not available`);
//     return 0;
//   }
//
//   return value / course;
// }
// let courses = [
//   {currency:'USD',value:25},
//   {currency:'EUR',value:42}
// ];
//
// console.log(exchange(10000, courses, 'EUR'));