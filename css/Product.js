document.addEventListener("DOMContentLoaded", () => {
    let pizzas = document.getElementsByClassName("pizzas-item");
    let drinks = document.getElementsByClassName("drinks-item");
    let desserts = document.getElementsByClassName("desserts-item");

    let pizzaSelect = document.getElementById("pizzaSelect");
    let drinkSelect = document.getElementById("drinkSelect");
    let dessertSelect = document.getElementById("dessertSelect");

    Array.from(pizzas).forEach((pizza) => {
        let pizzaName = pizza.querySelector("p").innerText;

        let option = document.createElement("option");
        option.value = pizzaName;
        option.innerText = pizzaName;

        pizzaSelect.appendChild(option);
    });

    Array.from(drinks).forEach((drink) => {
        let drinkName = drink.querySelector("p").innerText;

        let option = document.createElement("option");
        option.value = drinkName;
        option.innerText = drinkName;

        drinkSelect.appendChild(option);
    });

    Array.from(desserts).forEach((dessert) => {
        let dessertName = dessert.querySelector("p").innerText;

        let option = document.createElement("option");
        option.value = dessertName;
        option.innerText = dessertName;

        dessertSelect.appendChild(option);
    });
});

