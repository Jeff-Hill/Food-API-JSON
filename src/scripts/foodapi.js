// console.log("Hello")

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)

        const foodFactory = function (foodItem) {
            // Create your own HTML structure for the food list
            return `<div>
            <h2>${foodItem.name}</h2>
            <h3>${foodItem.ethnicity}</h3>
            <h4>${foodItem.category}</h4>
            </div>`;
        }

        let foodContainer = document.querySelector(".foodList");

        for (let i = 0; i < parsedFoods.length; i++) {
            foodContainer.innerHTML += foodFactory(parsedFoods[i]);
        }

    })