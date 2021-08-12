let maxValue = 15;
let n = 1;
let x = [];
function snapCrackle(maxValue) {
  while (n <= maxValue) {
    if (n % 5 === 0 && n % 2 !== 0) {
      x.push("snapCrakle");
    } else if (n % 5 === 0) {
      x.push("Crackler");
    } else if (n % 5 === 0 || n % 2 !== 1) {
      x.push(n);
    } else if (n % 2 !== 0) {
      x.push("snap");
    }
    n++;
  }
  return x 
}
console.log(snapCrackle().join());