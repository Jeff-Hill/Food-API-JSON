// console.log("Hello")
const foodFactory = function(foodItem) {
  // Create your own HTML structure for the food list
  return `<div>
            <h2>Food:${foodItem.name}</h2>
            <h3>Ethnicity:${foodItem.ethnicity}</h3>
            <h4>Category:${foodItem.category}</h4>
            <li>Barcode:${foodItem.barcode}</li>
            <li>Ingredients:${foodItem.ingredients}</li>
            <li>Country:${foodItem.country}</li>
            <li>Carbs:${foodItem.carbohydrates}</li>
            <li>Fat:${foodItem.fat}</li>
            <li>Sugar:${foodItem.sugar}</li>

            </div>`;
};
let foodContainer = document.querySelector(".foodList");

fetch("http://localhost:8088/food")
  .then(foods => foods.json())
  .then(parsedFoods => {
    console.table(parsedFoods);


    for (let i = 0; i < parsedFoods.length; i++) {
      // Now fetch the food from the Food API

      fetch(
        `https://world.openfoodfacts.org/api/v0/product/${
          parsedFoods[i].barcode
        }.json`
      )
        .then(response => response.json())
        .then(productInfo => {
          console.log(productInfo);
          parsedFoods[i].ingredients = productInfo.product.ingredients_text;
          parsedFoods[i].country = productInfo.product.countries;
          parsedFoods[i].carbohydrates = productInfo.product.nutriments.carbohydrates;
          parsedFoods[i].fat = productInfo.product.nutriments.fat;
          parsedFoods[i].sugar = productInfo.product.nutriments.sugars;
          //   // Produce HTML representation
          //   const foodAsHTML = foodFactory(parsedFoods[i]);

          //   // Add representaiton to DOM
          //   addFoodToDom(foodAsHTML);
          foodContainer.innerHTML += foodFactory(parsedFoods[i]);
        });
    }
  });