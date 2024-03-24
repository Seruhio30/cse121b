/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};
myProfile.name = "Sergio Herrera Rivera";

myProfile.photo = 'images/sergio.jpeg';

myProfile.favoriteFoods = [
    'Ice cream',
    'Japanese food',
    'Pizza',
    'Gallo Pinto',
    'Tamales',
]

myProfile.hobbies =[
    'Martial Arts',
    'Programming',
    'Treking'
]



/* Populate Profile Object with placesLive objects */
myProfile.placesLived = [];

const newPlace = {
    place: 'Costa Rica',
    length: '41 years'
  };
  
  myProfile.placesLived.push(newPlace);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(function(favoriteFood){
    const li = document.createElement('li');
    li.textContent = favoriteFood;
    document.getElementById('favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(function(hobby) {
    const li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
  });


myProfile.placesLived.forEach(function(place) {
    const dt = document.createElement('dt');
    dt.textContent = place.place;
    
    const dd = document.createElement('dd');
    dd.textContent = place.length;
    
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
  });


