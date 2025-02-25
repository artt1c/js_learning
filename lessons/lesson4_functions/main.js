// function square(a, b) {
//   if (a > 0 && b > 0) {
//     return a * b;
//   }
//   return 0;
// }
// // debugger;
// let result = square(-10, 30);
// console.log(result);
//
// let result2 = square(4, 87);
// console.log(result2);

// let arrA = [1, 2, 3, 4, 5];
// let arrB = [11, 22, 33];
// let arrC = [111, 222, 333];
//
// arrayPrint(arrA);
// arrayPrint(arrB);
// arrayPrint(arrC);
//
// function arrayPrint(arr) {
//   for (const arrElement of arr) {
//     console.log(arrElement);
//   }
// }

// let arr = [];
//
// function addObjToConcretedArray(obj, array) {
//   // arr[arr.length] = obj;
//   if (array) array.push(obj);
// }
//
// addObjToConcretedArray({id: 1}, arr);
// addObjToConcretedArray({id: 2}, arr);
// addObjToConcretedArray({id: 2, name: 'kokos'}, arr);
//
// console.log(arr);


// function printToDocument(msg, tag) {
//   document.write(`
//     <${tag}>${msg}</${tag}>
//   `);
//   console.log(arguments)
// }
//
// printToDocument('hello', 'h1');
// printToDocument('privit', 'p');
// printToDocument('olla', 'div');

// function foobar() {
//   if (arguments.length === 2) {
//     return arguments[0] + arguments[1];
//   }
//   if (arguments.length === 3) {
//     return arguments[0] + arguments[1] + arguments[2];
//   }
// }
//
// console.log(foobar(11, 22, 17));

// function barfoo(...arg) {
//   console.log(arg);
// }
//
// barfoo(1, 2, 3, 4, 5, 6);

// function countCheck(...nums) {
//
// }
//
// countCheck(100, 200, 400, 111,)

