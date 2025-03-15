/*
https://openapi.programming-hero.com/api/peddy/pets
https://openapi.programming-hero.com/api/peddy/pet/1
https://openapi.programming-hero.com/api/peddy/categories
https://openapi.programming-hero.com/api/peddy/category/dog
*/

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data?.categories));
  // .then((data) => console.log(data));
};

const loadAllPets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((response) => response.json())
    .then((data) => displayCards(data?.pets));
};

const loadSingleCategory = (category) => {
  console.log(category);
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((response) => response.json())
    .then((data) => displayCards(data?.data));
};

loadCategories();
loadAllPets();
