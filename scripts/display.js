// display category
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

// display pets cards
const displayCards = (pets) => {
  //   console.log(pets.length);
  const petsContainer = document.querySelector("#pets-container");
  petsContainer.innerHTML = "";

  if (pets.length === 0) {
    petsContainer.classList.remove("lg:grid-cols-3");
    const noPets = document.createElement("div");

    noPets.classList.add(
      "w-full",
      "h-[600px]",
      "flex",
      "justify-center",
      "items-center",
      "border",
      "mx-auto"
    );

    noPets.innerHTML = `<img src="../images/error.webp"/> `;
    petsContainer.append(noPets);
  } else {
    petsContainer.classList.add("lg:grid-cols-3");
    petsContainer.classList.remove("lg:grid-cols-1");

    pets.forEach((each) => {
      const {
        petId,
        breed,
        category,
        date_of_birth,
        price,
        image,
        gender,
        pet_details,
        vaccinated_status,
        pet_name,
      } = each;

      const card = document.createElement("div");
      card.classList.add("card", "bg-base-100", "shadow-sm");
      card.innerHTML = `<figure class="px-10 pt-10">
                    <img
                        src="${image}"
                        alt=${pet_name}
                        class="rounded-xl"
                    />
                  </figure>
                  
                  <div class="card-body">
                    <h1 class="card-title">${pet_name}</h1>
                    <h2 class="">Breed: ${breed}</h2>
                    <h2 class="">Birth: ${date_of_birth}</h2>
                    <h2 class="">Gender: ${gender}</h2>
                    <h2 class="">Price: ${price}</h2>
                    <hr />
                    <div class="flex justify-evenly gap-1">
                        <button class="bg-slate-50 rounded-lg px-4 py-2" onclick='liked("${image}")'>Like</button>
                        <button class="bg-slate-50 rounded-lg px-4 py-2" onclick="adopted('show congrats!')">Adopt</button>
                        <button class="bg-slate-50 rounded-lg px-4 py-2" onclick="details(${petId})">Details</button>
                    </div>
                  </div>`;

      petsContainer.append(card);
    });
  }
};

const liked = (petImage) => {
  console.log(petImage);
};
const adopted = (string) => {
  console.log(string);
};
const details = (petId) => {
  console.log(petId, "fetch this");
};

const displaySinglePet = (id) => {
  console.log(id);
};
