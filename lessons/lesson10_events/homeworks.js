// TASK 1
const h1 = document.getElementById('text');
document.getElementById('hide-text').onclick = function (ev) {
  h1.classList.toggle('hide');
}

// TASK 2
const f1 = document.forms.f1;

f1.addEventListener('submit', function (ev) {
  ev.preventDefault();
  const button = this[1];
  // console.log(this.age.value);

  if(this.age.value < 18) {
    const firstText = this[1].innerText;
    console.log(firstText);
    button.innerText = 'too small';
    setTimeout(function () {
      button.innerText = firstText;
    }, 1000);
  }
})

// TASK 3
f2 = document.forms.f2;
const divUserObj = document.getElementsByClassName('user-object')[0];
console.log(divUserObj);
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
window.addEventListener("load", function (ev) {
  console.log("All resources finished loading!");
});