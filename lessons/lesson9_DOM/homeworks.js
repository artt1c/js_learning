// TASK 1
const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');

const stylesForWrap = {
  backgroundColor: 'red',
  height: '200px',
  width: '100%',
  color: 'white',
  fontSize: '20px',
  marginBottom: '10px',
}
for (const key in stylesForWrap) {
  div.style[key] = stylesForWrap[key];
}

document.body.appendChild(div);

const divCopy = document.createElement(div.tagName);
divCopy.className = div.className;
divCopy.style.cssText = div.style.cssText;
// const divCopy = div.cloneNode(true); // 2 спосіб
// document.body.insertAdjacentHTML('beforeend', div.outerHTML) // 3 спосіб
document.body.appendChild(divCopy);

//TASK 2
const pageNav = ['Main','Products','About us','Contacts'];
const nav = document.getElementsByClassName('nav')[0];
for (const element of pageNav) {
  const li = document.createElement('li');
  li.textContent = element;
  nav.appendChild(li);
}

// TASK 3
const coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
  const div = document.createElement('div');
  div.innerText = `Course: ${course.title} month duration: ${course.monthDuration}`;
  document.body.appendChild(div);
}

// TASK 4

for (const course of coursesAndDurationArray) {
  const div = document.createElement('div');
  div.classList.add('item');

  const h1 = document.createElement('h1');
  h1.classList.add('heading');
  h1.innerText = course.title;

  const p = document.createElement('p');
  p.classList.add('description');
  p.innerText = course.monthDuration;

  div.append(h1, p);

  document.body.appendChild(div);
}