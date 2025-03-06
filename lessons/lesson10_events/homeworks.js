// TASK 1
const h1 = document.getElementById('text');
document.getElementById('hide-text').onclick = function () {
  h1.classList.toggle('hide');
}

// TASK 2
const f1 = document.forms.f1;

f1.addEventListener('submit', function (ev) {
  ev.preventDefault();
  const button = this[1];
  // console.log(this.age.value);

  const firstText = this[1].innerText;
  if(this.age.value < 18) {
    button.innerText = 'too small';
    setTimeout(function () {
      button.innerText = firstText;
    }, 1000);
  } else {
    button.innerText = 'aproved';
    setTimeout(function () {
      button.innerText = firstText;
    }, 1000);
  }
})

// TASK 3
f2 = document.forms.f2;
const divUserObj = document.getElementsByClassName('user-object')[0];
// console.log(divUserObj);
f2.addEventListener('submit', function (ev) {
  ev.preventDefault();

  const user = {
    name: this.name.value,
    surname: this.surname.value,
    age: this.age.value,
  };
  // console.log(user);
  divUserObj.innerText = `${user.name} ${user.surname} ${user.age}`;
});

// TASK 4
window.addEventListener("load", function () {
  let i = localStorage.getItem('loadCounter') || 0;
  i++;
  localStorage.setItem('loadCounter', i);
  let divCounter = document.getElementsByClassName('load-counter')[0];
  divCounter.innerText = i;
});

// TASK 5
window.addEventListener('load', function () {
  let sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
  // console.log(sessionList);


  sessionList.push({
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    hours: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  });
  // console.log(sessionList);
  localStorage.setItem('sessionList', JSON.stringify(sessionList));
});

// TASK 6
const convertKilogramInput = document.forms.convertWeight[0];
const convertPoundInput = document.forms.convertWeight[1];

convertKilogramInput.addEventListener('input', function () {
  convertPoundInput.value = convertKilogramInput.value * 2.205;
})

convertPoundInput.addEventListener('input', function () {
  convertKilogramInput.value = convertPoundInput.value / 2.205;
})

// TASK 7
function addObjectToArrInLocalStorage(arrayName, addObj) {
  try {
    if (!(typeof arrayName === 'string')) throw new Error('arrayName must be a string');
    if (!(typeof addObj === 'object')) throw new Error('addObj must be a object');

    const arrLocalStor = JSON.parse(localStorage.getItem(arrayName));
    // console.log(arrLocalStor);

    arrLocalStor.push(addObj);
    localStorage.setItem(arrayName, JSON.stringify(arrLocalStor));

  } catch (e) {
    console.error(e);
  }
}

localStorage.setItem('users', JSON.stringify([{name:'default'}]));
localStorage.setItem('someArray', JSON.stringify([{course: 'okten'}, {course: 'udemy'}]));

addObjectToArrInLocalStorage('users', {name: 'addUser'});
addObjectToArrInLocalStorage('someArray', {course: 'react'});

// TASK 8
const tableConstructorForm = document.forms.tableConstructor;
tableConstructorForm.addEventListener('submit', function (ev) {
  ev.preventDefault();
  const row = tableConstructorForm[0].value;
  const colum = tableConstructorForm[1].value;
  const content = tableConstructorForm[2].value;

  const tableBody = document.getElementById('tbody');
  tableBody.innerHTML = '';

  for (let i = 0; i < row; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < colum; j++) {
      const td = document.createElement('td');
      td.innerHTML = content;
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
});

// TASK 9
window.addEventListener("load", function () {
  let money = localStorage.getItem('money') || 100;
  setTimeout(function () {
    money = parseInt(money) + 10;
    localStorage.setItem('money', money);
  }, 10000);
  let divMoney = document.getElementById('money');
  divMoney.innerText = money;
});

// TASK 10
function show10DivElements(firstElementIndex, list) {
  list.innerHTML = '';
  for (let i = firstElementIndex; i < firstElementIndex + 10; i++) {
    list.appendChild(divElements[i]);
  }
}

const divElements = [];

for (let i = 0; i < 100; i++) {
  const divItem = document.createElement('div');
  divItem.classList.add('item');
  divItem.innerHTML = i + 1;
  divElements.push(divItem);
}
// console.log(divElements);

const divList = document.getElementsByClassName('container')[0]

let firstActiveDiv = 0;
show10DivElements(firstActiveDiv, divList);

document.getElementById('navPrev').addEventListener('click', function () {
  if (firstActiveDiv >= 10) {
    firstActiveDiv -= 10;
  }
  show10DivElements(firstActiveDiv, divList);
});

document.getElementById('navNext').addEventListener('click', function () {
  if (firstActiveDiv < 90) {
    firstActiveDiv += 10;
  }
  show10DivElements(firstActiveDiv, divList);
});