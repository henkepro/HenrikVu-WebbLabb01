document.addEventListener("DOMContentLoaded", () => {
    let pizzas = document.getElementsByClassName("pizzas-item");
    let drinks = document.getElementsByClassName("drinks-item");
    let desserts = document.getElementsByClassName("desserts-item");

    let pizzaSelect = document.getElementById("pizzaSelect");
    let drinkSelect = document.getElementById("drinkSelect");
    let dessertSelect = document.getElementById("dessertSelect");

    let proceedButton = document.querySelector(".btn-primary");
    let shoppingcartList = document.getElementById("shoppingcartitems");
    let clearCartButton = document.getElementById("clearCart");
    let orderCount = 0;

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

    proceedButton.addEventListener("click", (event) => {
        event.preventDefault();

        let selectedPizza = pizzaSelect.value;
        let selectedDrink = drinkSelect.value;
        let selectedDessert = dessertSelect.value;

        orderCount++;
        let orderLabel = document.createElement("p");
        orderLabel.innerText = `Order ${orderCount}`;
        orderLabel.style.fontWeight = "bold";
        orderLabel.style.position = "relative";
        orderLabel.style.bottom = "-18px";
        shoppingcartList.appendChild(orderLabel);

        if (selectedPizza != "Pizzas...") {
            addToCart(selectedPizza);
        }
        if (selectedDrink != "Drinks...") {
            addToCart(selectedDrink);
        }
        if (selectedDessert != "Desserts...") {
            addToCart(selectedDessert);
        }
    });

    function addToCart(item) {
        let li = document.createElement("li");
        li.innerText = item;
        shoppingcartList.appendChild(li);

    }

    clearCartButton.addEventListener("click", () => {
        shoppingcartList.innerHTML = "";
        orderCount = 0;
    });
});

