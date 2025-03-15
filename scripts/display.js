const displayCategories = (categories) => {
  const categoriesContainer = document.querySelector("#categories-container");

  categories.forEach((each) => {
    const category = document.createElement("button");

    category.classList.add(
      "flex",
      "justify-center",
      "items-center",
      "gap-4",
      "px-8",
      "bg-gray-50",
      "border-slate-100",
      "rounded-xl",
      "p-2"
    );

    category.innerHTML = `<img src=${each?.category_icon} alt=${each?.category} 
        class = "w-12 h-12 rounded-full"
    />
    <span>${each?.category}</span>`;

    category.setAttribute("onclick", `loadSingleCategory("${each?.category}")`);

    categoriesContainer.append(category);
    // console.log(each.category);
  });
};

const displayCards = (pets) => {
  console.log(pets.length);
  //   pets.forEach((each) => {
  //     console.log(each.pet_name);
  //   });
};

const displaySinglePet = (id) => {
  console.log(id);
};
