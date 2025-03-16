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

  //   console.log(totalCategories.length, count);

  //   console.log(categoriesContainer.childNodes[0].lastChild.innerText);
};
