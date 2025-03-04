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
  console.log( key + ' ' + stylesForWrap[key]);
}

document.body.appendChild(div);

console.log(div);
const divCopy = div.cloneNode(true);
document.body.appendChild(divCopy);

//TASK 2
const pageSegment = ['Main','Products','About us','Contacts'];

for (const segment of pageSegment) {

}