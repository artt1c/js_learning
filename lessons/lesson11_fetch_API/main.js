// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(value => value.json())
//   .then(value => {
//     console.log(value);
//   });

// let xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
//
// xhr.send();
// xhr.onload = function () {
//   console.log(xhr.response);
// }

// const ulUserList = document.getElementById('list');
//
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(users => {
//     for (const {id, username} of users) {
//       const liUser = document.createElement('li');
//       liUser.innerText = `${id} : ${username}`;
//       ulUserList.appendChild(liUser);
//     }
//   });
//
// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'kokos',
//     username: 'abrikos',
//     email: 'abrikos@gmail.com'
//   }),
//   'Content-type': 'application/json; charset=UTF-8',
// })
//   .then(res => res.json())
//   .then(value => {
//     console.log(value);
//   })

const divProductsList = document.getElementsByClassName('products')[0];

// let nextBtn = document.getElementById('nextProd');
const nextBtn = document.getElementsByTagName('button')[0];
let skip = 0;
nextBtn.addEventListener('click', (e) => {
  divProductsList.innerText = '';
  let url = new URL('https://dummyjson.com/products');
  url.searchParams.append('skip', skip);
  url.searchParams.append('limit', 10);
  console.log(url)

  console.log(url.searchParams.get('limit'));
  console.log(url.searchParams.get('skip'));

  fetch(url)
    .then(res => res.json())
    .then(({products, total}) => {
      for (const product of products) {
        const singleProductDiv = document.createElement('div');
        singleProductDiv.innerText = `${product.id} ${product.title}`;

        divProductsList.appendChild(singleProductDiv);
        // if (product.id === total) nextBtn.disabled = true; // костиль
      }
    });
  skip += 10;
})


