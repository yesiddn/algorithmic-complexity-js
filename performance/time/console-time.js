function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.time('Execution time');
count(5);
console.timeEnd('Execution time');