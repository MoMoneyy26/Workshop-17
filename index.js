// 1. Clean the coffee_data.js file.

const coffeeData = require("./coffee_data.js");

// 2. Print an array of all the drinks on the menu.
const drinks = coffeeData.map((drinkObject) => drinkObject.name);

// 3. Print an array of drinks that cost 5 and under.
const under5DollarDrinks = coffeeData.filter(
  (drinkObject) => drinkObject.price <= 5
);

// 4. Print an array of drinks that are priced at an even number.
const evenPriceDrinks = coffeeData.filter(
  (drinkObject) => drinkObject.price % 2 === 0
); // mod divides and returns remainder

// 5. Print the total if you were to order one of every drink.
const totalCost = coffeeData.reduce(
  (total, drinkObject) => (total += drinkObject.price),
  0
);

// 6. Print an array with all the drinks that are seasonal.

const seasonalDrinks = coffeeData.filter(
  (drinkObject) => drinkObject.seasonal === true
);

const seasonalDrinksExtra = coffeeData.filter(
  (drinkObject) => !drinkObject.seasonal
); // condition has to evaluate to true, even if you are trying to fetch non-seasonal drinks

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const drinksImported = seasonalDrinks.map((drinkObject) => {
  return drinkObject.name + " with imported beans";
});

// solution2
const drinksImported2 = seasonalDrinks.map((drinkObject) => {
  return drinkObject.name + " with imported beans";
});