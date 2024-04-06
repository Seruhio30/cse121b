const apiKey = '1';

async function searchRecipes() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (query === '') {
        alert("Please enter the name of a recipe.");
        return;
    }

    const url = `https://www.themealdb.com/api/json/v1/${apiKey}/search.php?s=${query}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to retrieve recipe information.');
        }
        const data = await response.json();
        displayRecipes(data.meals);
    } catch (error) {
        console.error('Error while searching for the recipe:', error);
        alert('There was an error while searching for the recipe. Please try again later.');
    }
}

function displayRecipes(recipes) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        const title = document.createElement('h2');
        title.textContent = recipe.strMeal;

        const image = document.createElement('img');
        image.src = recipe.strMealThumb;
        image.alt = recipe.strMeal;

        const ingredients = document.createElement('p');
        ingredients.textContent = `Ingredients: ${getIngredients(recipe)}`;

        recipeElement.appendChild(title);
        recipeElement.appendChild(image);
        recipeElement.appendChild(ingredients);

        resultsContainer.appendChild(recipeElement);
    });
}

function getIngredients(recipe) {
    let ingredients = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && measure) {
            ingredients += `${ingredient} (${measure}), `;
        } else if (ingredient) {
            ingredients += `${ingredient}, `;
        }
    }
   
    return ingredients.slice(0, -2);
}


