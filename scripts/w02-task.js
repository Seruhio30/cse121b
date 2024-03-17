document.addEventListener('DOMContentLoaded', function() {
    let fullName = 'Sergio Herrera Rivera';
    let currentYear = '2024';
    let profilePicture = 'images/Sergio.jpeg';

    const nameElement = document.getElementById('name');
    const foodElement = document.getElementById('food');
    const yearElement = document.querySelector('#year');
    const imageElement = document.getElementById("profilePicture");

    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;
    
    if(imageElement) { 
        imageElement.setAttribute('src', profilePicture); 
        imageElement.setAttribute('alt', 'Profile image of ${fullName}');
    } else {
        console.error("No se encontró el elemento con ID 'profilePicture'.");
    }
    
    var myFavoriteFood = ['Pasta', 'Ice-cream', 'Japanese food', 'Pizza', 'Gallo Pinto', 'Tamales'];

    const anotherFavorityFood = "sushi";
    myFavoriteFood.push(anotherFavorityFood);

    myFavoriteFood.shift();

    myFavoriteFood.pop();
    foodElement.innerHTML += `<br>${myFavoriteFood.join("<br>")}`;

    


    

})