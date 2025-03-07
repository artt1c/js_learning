let taskSwitch = true;
document.getElementById('switch-task').addEventListener('click', () => {
  const spans = document.getElementsByTagName('span')[0] || null;
  switch (taskSwitch) {
    case true:
      if (spans) spans.remove()
      task1();
      taskSwitch = false;
      break;
    case false:
      if (spans) spans.remove()
      task2();
      taskSwitch = true;
      break;
  }
})

function task1() {
  // Формуємо URL
  const url = new URL('https://dummyjson.com/carts');
  url.searchParams.set('limit', '50');

// Створюємо елемент, в якому будуть всі кошики
// const cartsList = document.getElementsByClassName('carts__list')[0];
  const cartsList = document.createElement('span');
  cartsList.classList.add('carts__list');
  document.body.appendChild(cartsList);


// Робимо API запит щоб отримати кошики
  fetch(url)
    .then(res => res.json())
    .then(({carts}) =>{ // Деструктуруємо об'єкт, далі потрібен тільки масив carts
      // Ітеруємо об'єкт carts, щоб працювати з кожним кошиком
      carts.forEach(cart => {
        // Робимо для кожного кошика масив products не ітерабельним
        Object.defineProperty(cart, 'products', {
          enumerable: false
        });
        // Деструктуруємо cart для подальшої роботи з товарами в корзині
        const {products} = cart;

        // Створюємо div кожному кошику
        const divCart = document.createElement('div');
        divCart.classList.add('cart');

        // Створюємо верхню частину для кошику з всією інформацією про кошик, крім товарів
        const divCartHeader = document.createElement('div');
        divCartHeader.classList.add('cart__header');

        // Ітеруємо cart для отримання всієї інформації
        for (const cartInfo in cart) {
          // Окремий div для кожного проперті кошика
          const spanCartInfo = document.createElement('span');
          spanCartInfo.innerText = `${cartInfo}: ${cart[cartInfo]}`;

          divCartHeader.appendChild(spanCartInfo);
        }


        // Створюємо тіло корзини, де будуть товари
        const divCartBody = document.createElement('div');
        divCartBody.classList.add('cart__body');
        // ітеруємо масив з товарами
        products.forEach(product => {
          // Робимо зображення не ітерабельним, щоб потім його відобразити коректно
          Object.defineProperty(product, 'thumbnail', {
            enumerable: false
          });

          // Створюємо карточку продукту і додаємо їй клас
          const divProduct = document.createElement('div');
          divProduct.classList.add('product');
          // console.log(product);
          // Ітеруємо товар для отримання інформації та записуємо її в карточку продукту
          for (const productKey in product) {
            divProduct.innerHTML += `${productKey} ${product[productKey]}<br>`;
          }

          // Створюємо елемент img якому в src присвоюємо product.thumbnail і додаємо клас product__img
          const productImg = document.createElement('img');
          productImg.classList.add('product__img');
          productImg.src = product.thumbnail;
          productImg.alt = product.title;

          divProduct.appendChild(productImg);
          divCartBody.appendChild(divProduct);
        });


        divCart.append(divCartHeader, divCartBody);
        cartsList.appendChild(divCart);
      });
    });


// TO DOO: Замінити цикли які виводять інформацію про товар на itar, Та створити масиви в яких лежатимуть назви для відповідних полів, щоб відображати нормальні назви, а не ключі об'єктів
// Використовувати Object.keys(об'єкт).length
}

function task2() {

}