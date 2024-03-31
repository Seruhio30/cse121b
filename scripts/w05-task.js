/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(templo => {
        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3');
        h3Element.textContent = templo.templeName;

        const imgElement = document.createElement('img');
        imgElement.src = templo.imageUrl;
        imgElement.alt = templo.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        templeList = data; // Asignar el resultado a la templeList
        displayTemples(templeList); // Llamar a la función para mostrar los templos
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }
};
getTemples();

/* reset Function */

const reset = () =>{
    const articles = templesElement.querySelectorAll('article');
    articles.forEach(article =>{
        article.remove()
    });
};
/* filterTemples Function */

const filterTemples = (temples)=>{
    reset();

    const filter = document.querySelector('#filtered').value;

    switch (filter){
        case "utah":
            const utahTemples = temples.filter(templo => templo.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        
        case "notutah":
            const notUtahTemples = temples.filter(templo => !templo.location.includes("Utah"));
            console.log("notUtah temples:", notUtahTemples)
            displayTemples(notUtahTemples)
            break;

        case "older":
            const olderTemples = temples.filter(templo => new Date(templo.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;

        case "all":
            displayTemples(templeList);
            break; 

            
    }

}


/* Event Listener */

document.querySelector('#filtered').addEventListener("change", () => {filterTemples(templeList)});

