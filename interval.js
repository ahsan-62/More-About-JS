console.log(1);
console.log(2);
console.log(3);
let num = 0;
const interval = setInterval(() => {
  console.log(num++);
  if (num >= 5) {
    clearInterval(interval);
  }
}, 1000);

console.log(5);
