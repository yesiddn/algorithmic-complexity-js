/**
 * Complejidad Temporal -> O( n * n + 6 ) -> O( n^2 )
 * Complejidad Espacial -> O( n + 4 ) -> O( n )
 * Espacio Auxiliar -> O( n ) - O( 4 ) -> O( 4 ) -> O( 1 )
 */
function bubbleSort(arreglo) { // O(n)
  let longitud = arreglo.length; // O(1)
  for (let i = 0; i < longitud; i++) { // O(1)
    for (let j = 0; j < longitud; j++) { // O(1)
      if (arreglo[j] > arreglo[j + 1]) {
        let temporal = arreglo[j]; // O(1)
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = temporal;
      }
    }
  }
  return arreglo;
}