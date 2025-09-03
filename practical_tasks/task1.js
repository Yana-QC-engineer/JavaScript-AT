function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([5, 12, 8, 130, 44]));


function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7));


for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
