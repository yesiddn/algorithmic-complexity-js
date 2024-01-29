// Para importar el módulo performance-now.js
// const { performance } = require('perf_hooks');

function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let start = performance.now();
count(5);
let end = performance.now();

let result = end - start;
console.log(`Execution time: ${result} milliseconds.`); // Cada vez que se ejecuta el programa el resultado es diferente