// Exercise #2: Sum the Numbers
let numbers = [10, 20, 30, 40, 50];
let total = 0;
// Start coding here

// for (let i in numbers) {
//   total += numbers[i];
// }
for (let i of numbers) {
  total += i;
}
console.log(total);
