function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(gcd(12, 18)); // Output: 6
console.log(gcd(10, 2)); // Output: 2