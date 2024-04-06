const apiKey = '1';

async function searchRecipes() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    if (query === '') {
        alert('Por favor, ingresa el nombre de una receta.');
        return;
    }

    const url = `https://www.themealdb.com/api/json/v1/${apiKey}/search.php?s=${query}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de la receta.');
        }
        const data = await response.json();
        displayRecipes(data.meals);
    } catch (error) {
        console.error('Error al buscar la receta:', error);
        alert('Hubo un error al buscar la receta. Por favor, inténtelo de nuevo más tarde.');
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
        ingredients.textContent = `Ingredientes: ${getIngredients(recipe)}`;

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
    // Eliminar la coma y el espacio al final
    return ingredients.slice(0, -2);
}
