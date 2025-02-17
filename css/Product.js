document.addEventListener("DOMContentLoaded", () => {
    // Get all pizzas, drinks, and desserts containers and the form container
    let pizzas = document.getElementsByClassName("pizzas-item");
    let drinks = document.getElementsByClassName("drinks-item");
    let desserts = document.getElementsByClassName("desserts-item");

    // Selecting the individual select dropdowns by their unique IDs
    let pizzaSelect = document.getElementById("pizzaSelect");
    let drinkSelect = document.getElementById("drinkSelect");
    let dessertSelect = document.getElementById("dessertSelect");

    // Convert HTMLCollection to array for pizzas
    Array.from(pizzas).forEach((pizza) => {
        let pizzaName = pizza.querySelector("p").innerText; // Get the pizza name from the <p> tag

        let option = document.createElement("option");
        option.value = pizzaName;  // Set pizza name as value
        option.innerText = pizzaName;  // Display pizza name in the dropdown

        pizzaSelect.appendChild(option); // Append the option to the pizza select dropdown
    });

    // Similar loop for drinks (you can add more logic here)
    Array.from(drinks).forEach((drink) => {
        let drinkName = drink.querySelector("p").innerText; // Get drink name

        let option = document.createElement("option");
        option.value = drinkName;  // Set drink name as value
        option.innerText = drinkName;  // Display drink name in the dropdown

        drinkSelect.appendChild(option); // Append the option to the drink select dropdown
    });

    // Similar loop for desserts (you can add more logic here)
    Array.from(desserts).forEach((dessert) => {
        let dessertName = dessert.querySelector("p").innerText; // Get dessert name

        let option = document.createElement("option");
        option.value = dessertName;  // Set dessert name as value
        option.innerText = dessertName;  // Display dessert name in the dropdown

        dessertSelect.appendChild(option); // Append the option to the dessert select dropdown
    });
});

