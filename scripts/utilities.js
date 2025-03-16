const sortByPrice = () => {
  console.log("will be sorted");
};

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

// show details
const details = async (id) => {
  const petData = await loadSinglePet(id);
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
  } = petData;
  console.log(petId);

  const modalContainer = document.querySelector("#details_pet");
  const modal = document.createElement("div");
  modal.classList.add("modal-box", "min-w-lg");
  modal.innerHTML = `
            <img src="${image}" alt="Shoes" class="w-full h-[250px] rounded-xl" />
            <h1 class="card-title">${pet_name}</h1>
            <div class="grid grid-cols-2">
                <h2 class="">Breed: ${breed}</h2>
                <h2 class="">Birth: ${date_of_birth}</h2>
                <h2 class="">Gender: ${gender}</h2>
                <h2 class="">Price: ${price}</h2>
                <h2 class="">Vaccinated: ${vaccinated_status}</h2>
            </div>
            <hr />
            <div class=""> 
                <h3>Details Information</h3>
                <p>${pet_details}
            </div>
            <div class="modal-action">
                <form method="dialog" class="w-full">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn bg-slate-300 w-full">Close</button>
                </form>
            </div>
  `;
  modalContainer.append(modal);

  details_pet.showModal();
};
