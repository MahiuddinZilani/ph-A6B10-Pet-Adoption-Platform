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
  petsContainer.classList.add("lg:grid", "lg:grid-cols-3", "gap-4");

  if (pets.length === 0) {
    petsContainer.classList.remove("lg:grid-cols-3");
    const noPets = document.createElement("div");

    noPets.classList.add(
      "w-full",
      "h-[500px]",
      "flex",
      "justify-center",
      "items-center",
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
      card.innerHTML = `<figure class="px-4 pt-4">
                    <img
                        src="${image}"
                        alt=${pet_name}
                        class="rounded-xl w-full h-44 object-fill"
                    />
                  </figure>
                  
                  <div class="card-body text-sm">
                    <h1 class="card-title">${pet_name ? pet_name : "N/A"}</h1>
                    <div>
                        <h2 class="">Breed: ${breed ? breed : "N/A"}</h2>
                        <h2 class="">Birth: ${
                          date_of_birth ? date_of_birth : "N/A"
                        }</h2>
                        <h2 class="">Gender: ${gender ? gender : "N/A"}</h2>
                        <h2 class="">Price: ${price ? price : "N/A"}</h2>
                    </div>
                    <hr />
                    <div class="flex justify-evenly gap-1">
                        <button class="btn bg-slate-50 rounded-lg px-4 py-2" onclick='liked("${image}")'>Like</button>
                        <button class="btn bg-slate-50 rounded-lg px-4 py-2" onclick="adopted(${petId})" id="adopt-${petId}">Adopt</button>
                        <button class="btn bg-slate-50 rounded-lg px-4 py-2" onclick="details(${petId})">Details</button>
                    </div>
                  </div>`;

      petsContainer.append(card);
    });
  }

  document.getElementById("sortByPrice").addEventListener("click", () => {
    pets.sort((a, b) => b.price - a.price);
    displayCards(pets);
  });
};

const displaySinglePet = (id) => {
  console.log(id);
};
