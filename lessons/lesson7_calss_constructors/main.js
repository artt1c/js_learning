// function userFactoryFunction(id, name) {
//   return {
//     id, name
//   }
// }
//
// function clientFactoryFunction(id, name, password) {
//   return {
//     id, name, password
//   }
// }
//
// let user = userFactoryFunction(1, 'kokos');
// let client = clientFactoryFunction(1, 'scdgv', '32145');
//
// console.log(typeof user);
// console.log(typeof client);
//
// function User(id, name) {
//   this.id = id;
//   this.name = name;
//   this.greating = function(msg) {
//     console.log(msg + ' my name is ' + this.name);
//   }
// }
//
//
// User.prototype.asdw = 10900;
// User.prototype.foobar = function() {
//   console.log('barfoo');
// };
//
// let userConstruct = new User(1, 'petya');
// console.log(userConstruct);
// console.log(userConstruct.asdw);
// userConstruct.foobar();
//
//
// let numbers = [11, 22, 33, 56]
// console.log(numbers instanceof Array);
// Array.prototype.xxx = function() {
//   console.log(this);
// };
//
// numbers.xxx();
//
//
//
//
// userConstruct.greating.call(user, 'olla');
// userConstruct.greating.apply(user, ['aloha']); // Передається масив
// let greatingCoppy = userConstruct.greating.bind(user); // Робе копію
//
// greatingCoppy('hello');
//
//
// function SuperUser(id, name, login,  password) {
//   User.apply(this, arguments);
//   this.login = login;
//   this.password = password;
// }
//
// let superUser = new SuperUser(111, 'asdf', 'login', 'dfsghqbdrt');
// console.log(superUser);

// class User {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//
//   greeting(msg) {
//     console.log(msg + ' my name is ' + this.name);
//   }
//
// }
//
// let userClass = new User(1, 'asdf');
// console.log(userClass);
//
// class SuperUser extends User {
//   constructor(id, name, login, password) {
//     super(id, name);
//     this.login = login;
//     this.password = password;
//   }
//
//   foobar() {
//
//   }
// }
//
// let superUserClass = new SuperUser(13123, 'sdvz', 'logisnasf', 'fsdhgewr');
// console.log(superUserClass);
//
// superUserClass.greeting('azaza');

// let date = new Date();
// console.log(date)
// console.log(date.getTime());
// console.log(date.getUTCDate())

// let set = new Set();
// set.add('asd');
// set.add('xcbv');
// set.add('zxc');
// set.add('zxc');
// set.add({});
// set.add({});
// set.add([]);
// set.add([]);
// console.log(set)
//
// console.log({} === {});
//
// console.log(set.has('asd'));
// console.log(set.has({}));
// let entries= set.entries();
// console.log(entries.next())

let map = new Map();
map.set('doctor', {name: 'roman'})
map.set('petya', {name: 'sasha'})
map.set('borya', {name: 'sasha'})
map.set('borya', {name: 'sasha1'})

console.log(map)

console.log(map.get('borya'));
map.delete('borya');
console.log(map);