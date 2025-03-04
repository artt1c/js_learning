// console.log(document);
// console.log(document.head);
// console.log(document.body);

// ID
let ul1 = document.getElementById('list-1');
console.log(ul1);

let menus = document.getElementsByClassName('menu');
console.log(menus);
for (const menu of menus) {
  console.log(menu);

}

let liLis = document.getElementsByTagName('li');
console.log(liLis);

// let liSecondMenu = document.getElementsByClassName('menu')[1].getElementsByTagName('li');
let liFormSecondMenu = menus[1].getElementsByTagName('li');
console.log(liFormSecondMenu);
// for (const li of liFormSecondMenu) {
//   console.log(li.innerHTML);
//   li.innerHTML = 'okten';
//   li.classList;
// }

let li1FromSecondMenu = liFormSecondMenu[0];
li1FromSecondMenu.innerText = 'WOW'
// li1FromSecondMenu.classList.add('target', 'fgnj');
// li1FromSecondMenu.classList.add('xxx');
// // li1FromSecondMenu.classList.remove('xxx');
// li1FromSecondMenu.classList.toggle('xxx');
// // li1FromSecondMenu.style.backgroundColor = 'red';
//
// // li1FromSecondMenu.remove();
// li1FromSecondMenu.setAttribute('asf', 'qwe')
// li1FromSecondMenu.id = 'qwtr';
// console.log(li1FromSecondMenu.id);

let liElementsEven = document.querySelectorAll('body > .menu > li:nth-child(2n)');
console.log(liElementsEven);

// let div = document.createElement('div');
//
// document.body.appendChild(div);
// div.innerText = 'hello';
// div.classList.add('safd', 'sdfh');

menus[0].appendChild(li1FromSecondMenu);
let li3FromFirstMenu = menus[0].children[2];
menus[0].insertBefore(li1FromSecondMenu, li3FromFirstMenu);

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

for (const user of users) {
  let div = document.createElement('div');
  div.classList.add('character-container');

  let h2 = document.createElement('h2');
  h2.innerText = `${user.name} ${user.age} ${user.status}`;

  let img = document.createElement('img');
  img.src = 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp'
  img.alt = 'mount'

  let p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, fugiat!'

  // div.appendChild(h2);
  // div.appendChild(img);

  div.append(h2, p, img);

  document.body.appendChild(div);
}



let allForms = document.forms;
console.log(allForms);
// allForms[0];
// allForms.f1;
// allForms['f1'];
// allForms.f2;
// allForms.['f2'];

let f2 = allForms.f2;
let inputClientName = f2['clientName'];
console.log(inputClientName);
console.log(inputClientName.value);
