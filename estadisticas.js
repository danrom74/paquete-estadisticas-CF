function promedio(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
     throw new Error('El argumento debe ser un arreglo no vacío');
  }
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function desviacionEstandar(arr) {
  const media = promedio(arr);
  const sumaCuadrados = arr.reduce((acc, val) => acc + (val - media) ** 2, 0);
  return Math.sqrt(sumaCuadrados / arr.length);
}

module.exports = { promedio, desviacionEstandar };