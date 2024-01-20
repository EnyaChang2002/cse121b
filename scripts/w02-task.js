/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Enya Chang';
let currentYear = 2024;
let profilePicture = 'images/myphoto.jpg'



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img').src = myphoto;

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('images/myphoto', profilePicture);
setAttribute(`Placeholder Images`, `Profile image of ${profilePicture}`);





/* Step 5 - Array */
let favFoods = ['chocolate', 'milk', 'ice cream'];
let fav = 'soda';
favFoods.push(fav);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.splice(0, 1);
favFoods.unshift('chocolate');
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;





