// let target1 = document.getElementsByClassName('target-1')[0];
// console.log(target1);
//
// target1.onclick = function() {
//   console.log('click');
//   this.style.height = '400px'
// }
//
// target1.onmouseover = function() {
//   // console.log('over');
//   this.innerText = 'mouse over';
// }
//
// target1.onmouseleave = function() {
//   // console.log('leave');
//   this.innerText = 'mouse leave';
// }
//
// target1.addEventListener('mouseleave', function() {
//   console.log('sdf')
// })

let form1 = document.forms.form1;
console.log(form1);

form1.addEventListener('submit', function(ev) {
  ev.preventDefault(); //stop reload
  console.log('submit');
  console.log(ev);
  let username = this.userName.value;
  let userPassword = this.password.value;
  let user = {
    username,
    userPassword
  }
  console.log(user);
  // localStorage.setItem('user', JSON.stringify(user));

  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
});

// let button = form1[2];
// console.log(button);

// button.onclick = function () {
//   document.getElementsByClassName('popup')[0].classList.toggle('show')
// }

// console.log(localStorage);
// localStorage.setItem('userName','dsfg');
// localStorage.setItem('userName','vasya');

// console.log(localStorage.getItem('userName'));


// form1.userName.oninput = function(ev) {
//   console.log(this.value);
//   console.log(ev);
// }

// document.onmousemove = function(ev) {
//   console.log(ev.clientX, ev.clientY);
// }

document.onkeydown = function(ev) {
  console.log(ev);
  if (ev.key === 's') {
    let audio = new Audio('sound.mp3')
    audio.play();
  }
}