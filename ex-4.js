// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
for (let i in restaurants) {
  newRestaurants.push(`Restaurant Name: ${restaurants[i]}`);
}
console.log(newRestaurants);
