const changeCategoryBg = (category) => {
  //   console.log(category);
  let count = 0;
  const categoriesContainer = document.querySelector("#categories-container");
  const totalCategories = categoriesContainer.childNodes;

  for (let eachCategory of totalCategories) {
    if (eachCategory.lastChild.innerText === category) {
      eachCategory.classList.add("bg-red-100", "rounded-full");
    } else {
      eachCategory.classList.remove("bg-red-100", "rounded-full");
    }
  }
};

const liked = (petImage) => {
  const likedPetsContainer = document.querySelector("#liked-pet-container");
  const likedPet = document.createElement("img");
  likedPet.src = petImage;
  likedPetsContainer.append(likedPet);
  //   console.log(petImage);
};
