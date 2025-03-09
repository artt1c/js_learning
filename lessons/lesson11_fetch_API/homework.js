let taskSwitch = true;
document.getElementById('switch-task').addEventListener('click', () => {
  const sections = document.getElementsByTagName('section')[0] || null;
  switch (taskSwitch) {
    case true:
      if (sections) sections.remove()
      task1();
      taskSwitch = false;
      break;
    case false:
      if (sections) sections.remove()
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
  const cartsList = document.createElement('section');
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
  // Формуємо URL
  const url = new URL('https://dummyjson.com/recipes');
  url.searchParams.set('limit', '5');

  // Створюємо елемент, в якому будуть всі кошики
  const recipeList = document.createElement('section');
  recipeList.classList.add('recipes__list');
  document.body.appendChild(recipeList);

  // Робимо API запит щоб отримати кошики
  fetch(url)
    .then(res => res.json())
    .then(({recipes}) =>{
      // Ітеруюємо деструкторизований об'єкт
      recipes.forEach(recipe => {
        console.log(recipe); // for dev
        // Створюємо карточку рецепту
        const divRecipe = document.createElement('div');
        divRecipe.classList.add('recipe');

        // HEADER ------------------------------------------------------------------------------------------
        const divRecipeHeader = document.createElement('div');
        divRecipeHeader.classList.add('recipe__header');

        const h2RecipeTitle = document.createElement('h2');
        h2RecipeTitle.classList.add('header__title');
        h2RecipeTitle.innerText = recipe.name;

        // Створення та наповнення верхньої частини header
        const divTitleTop = document.createElement('div');
        divTitleTop.classList.add('header__top');
        divTitleTop.innerHTML = `<span class="header__top-id">${recipe.id}</span> <span class="header__top-rating">${recipe.rating}</span>`;

        // Створення та наповнення нижньої частини header
        const divTitleBottom = document.createElement('div');
        divTitleBottom.classList.add('header__bottom');

        // Meal Type
        const divMealTypes = document.createElement('div');
        divMealTypes.classList.add('bottom__meal-types');
        recipe.mealType.forEach(type => {
          divMealTypes.innerHTML += `<span>${type}</span>`;
        })

        // Складність приготування
        const divDifficult = document.createElement('div');
        divDifficult.classList.add('bottom__difficult');
        divDifficult.innerText = `${recipe.difficulty}`;

        // Окремий клас для кожної складності
        switch (recipe.difficulty) {
          case 'Easy':
            divDifficult.classList.add('difficult-easy');
            break;
          case 'Medium':
            divDifficult.classList.add('difficult-medium');
            break;
          case 'Hard':
            divDifficult.classList.add('difficult-hard');
            break;
        }

        divTitleBottom.append(divMealTypes, divDifficult);
        divRecipeHeader.append(h2RecipeTitle, divTitleTop, divTitleBottom);
        // BODY ------------------------------------------------------------------------------------------
        const divRecipeBody = document.createElement('div');
        divRecipeBody.classList.add('recipe__body');

        // Теги рецептів
        const ulTags = document.createElement('ul');
        ulTags.classList.add('body__tags');
        recipe.tags.forEach(tag => {
          const liTag = document.createElement('li');
          liTag.classList.add('body__tag');
          liTag.innerText = '#' + tag;
          ulTags.appendChild(liTag);
        })

        // Інгредієнти
        const divIngredients = document.createElement('div');
        divIngredients.classList.add('body__ingredients');
        divIngredients.innerHTML = '<h3>Required products</h3>'
        const ulIngredients = document.createElement('ul');
        ulIngredients.classList.add('ingredients-list');
        recipe.ingredients.forEach(ingredient => {
          const liIngredient = document.createElement('li');
          liIngredient.classList.add('ingredients-item');
          liIngredient.innerText = ingredient;
          ulIngredients.appendChild(liIngredient);
        })
        divIngredients.appendChild(ulIngredients);

        // body main
        const divBodyMain = document.createElement('div');
        divBodyMain.classList.add('body__main');
        // Час приготуваня
        divBodyMain.innerHTML = `
          <div class="main__time">
            <div class="main__time-prep">Preparation: ${recipe.prepTimeMinutes} m</div>
            <div class="main__time-cooking">Cooking: ${recipe.cookTimeMinutes} m</div>
          </div>
         `;

        // Зображення блюда та його характеристоки
        const divFoodImg = document.createElement('div');
        divFoodImg.classList.add('food-img');
        divFoodImg.style.backgroundImage = `url(${recipe.image})`;
        divFoodImg.innerHTML = `
          <div class="food-img__cuisine">${recipe.cuisine}</div>
          <div class="food-img__info">
            <span class="info__servings">Servings: ${recipe.servings}</span>
            <span class="info__calories-per-serving">Cal per serv: ${recipe.caloriesPerServing}</span>
          </div>
        `;

        // Блок з рецептом блюда
        const divRecipeInstruction = document.createElement('div');
        divRecipeInstruction.classList.add('body__recipe');
        divRecipeInstruction.innerHTML = '<h3>Recipe for a meal</h3>';

        // Список з покроковим рецептом
        const olRecipeInstruction = document.createElement('ol');
        olRecipeInstruction.classList.add('body__recipe-list');
        // Ітеруємо інструкцію і додаємо кожен крок до списку
        recipe.instructions.forEach(steps => {
          const liSteps = document.createElement('li');
          liSteps.classList.add('body__recipe-item');
          liSteps.innerHTML += `${steps}`;
          console.log(steps);
          olRecipeInstruction.appendChild(liSteps);
        });

        divRecipeInstruction.appendChild(olRecipeInstruction);

        divBodyMain.append(divFoodImg);
        divRecipeBody.append(ulTags, divIngredients, divBodyMain, divRecipeInstruction);


        // FOOTER ------------------------------------------------------------------------------------------

        const divRecipeFooter = document.createElement('div');
        divRecipeFooter.classList.add('recipe__footer');
        divRecipeFooter.innerHTML = `
          <div class="footer__user-id">User ID: ${recipe.userId}</div>
          <div class="footer__views">${recipe.reviewCount}</div>
        `;

        divRecipe.append(divRecipeHeader, divRecipeBody, divRecipeFooter);
        recipeList.appendChild(divRecipe);
      })
    });
}

task2();