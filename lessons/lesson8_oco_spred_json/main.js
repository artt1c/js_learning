// const obj = {
//
// }
//
// console.log(obj.embd?.foo());

// let obj = {
//   id: 1,
//   foo() {
//     console.log(this);
//   },
// }
//
// let {id, foo, xxxx} = obj;
//
// console.log(id);
// console.log(foo);
// console.log(xxxx);
//
// function dest({id, foo}) {
//   console.log(id);
//   console.log(foo);
// }
//
// dest(obj);

// let nums = [11, 22, 33, 44];
// let [a, b, , c] = nums;
// console.log(a, b, c);

let users = [
  {id:1, name: 'vasya', status: true}
]

let [{name:userName}] = users;
console.log(userName);

let user = {
  id: 1,
  name: 'vasya',
  status: true,
  wife: {
    name: 'anna'
  }
}

// let {wife:drujina, wife:{name}} = user;
// console.log(drujina);
// console.log(name);
//
//
// let arr = [11, 22, [333, 444]]
// let [,,[a, b]] = arr;
// console.log(a, b)

let newUSer = {...user, name:'sadxzvcvsd'}
console.log(newUSer);
console.log(newUSer === user);
console.log(newUSer.wife === user.wife);

let arr = [11, 22, 33];
let newArr = [44, 55, ...arr];
console.log(newArr);

let jsonCopy = JSON.parse(JSON.stringify(user));
console.log(jsonCopy);
console.log(jsonCopy === user);

let userObj = Object.create(user);
console.log(userObj);
console.log(userObj.name);

userObj.name = 'kokos';
console.log(userObj.hasOwnProperty('name'));
console.log(userObj.name);
console.log(userObj);
console.log(userObj.__proto__.name);
console.log(userObj.prototype); // prototype працює лише з об'єктами створеними функціями конструкторами

Object.defineProperty(user, 'id',{
  value: 100500,
  writable: false,
  // configurable: false,
  // enumerable: false,
});

Object.defineProperties(user, {
  'id':{value:'affas', writable:false},
  'name':{value:'sdg', writable:false},
  'age':{value:'dvasf', writable:false, enumerable:true},
  'wife':{value:'dxvr', writable:false},
})

user.id = 200;
console.log(user)

for (const key in user) {
  console.log(user[key])
}

