// 1
fetch("http://localhost:8088/food")
  // Wait: Chain this method onto the fetch method using a Promise: This listens for the fetch event to happen.

  //  2
  .then(function(data) {
    // 4. handle the data
    return data.json();
  })
  .then(function(food) {
    // 5. Loop over the array of objects
    console.log("food", food);
    // 6. Do stuff to the data: loop over it & insert into html and put it in the DOM

    let foodContainer = document.querySelector("#food-list");
    food.forEach(function(item) {
      // 7. Display the data in the DOM as HTML
      foodContainer.innerHTML += `<h2> I like to eat ${item.name}</h2>`;
    });
  });
