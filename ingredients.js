const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list])
  list++
}
//console.log(ingredients[list]);
 //Write a while loop that prints out the contents of ingredients:
//console.log(ingredients);

//Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i])
}
//console.log(ingredients);