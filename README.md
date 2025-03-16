# Pet Adoption Platform

## Description

The **Pet Adoption Platform** is a web application designed to help users browse and adopt pets. It provides a user-friendly interface to view pet details, sort pets by price, and interact with a timer-based modal for special offers. The project is built using modern JavaScript (ES6) and leverages the Fetch API for data retrieval.

---

## Key Features

1. **Browse Pets**: View a list of available pets with details such as name, breed, date of birth, gender, and price.
2. **Sort by Price**: Sort pets by price in ascending or descending order.
3. **Adoption Modal**: A timer-based modal appears after a few seconds, displaying a special offer and automatically closing after a countdown.
4. **Like and Adopt Buttons**: Users can like or adopt pets directly from the interface.
5. **Responsive Design**: The platform is designed to work seamlessly on both desktop and mobile devices.

---

## ES6 Features Used

- **Arrow Functions**: Used for concise function syntax.

  ```javascript
  const adopted = () => { ... };

  ```

- **Template Literals**: Used for dynamic string interpolation.
  ```html
  card.innerHTML =
  <h1>${petData.pet_name}</h1>
  ;
  ```
- **Fetch API with Async/Await**: Used for asynchronous data fetching.
  ```javascript
    const loadSinglePet = async (petId) => { ... };
  ```
- **Destructuring**: Used to extract properties from objects.

  ```const { petId, pet_name, breed } = each;

  ```

- **let and const:** Used for block-scoped variable declarations.
  ```let countDown = 5;
  const interval = setInterval(() => { ... }, 1000);
  ```
