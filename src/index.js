import analyzer from './analyzer.js';

document.addEventListener('DOMContentLoaded', () => { //el escuchador
  const userInput = document.querySelector('textarea[name="user-input"]');
  const resetButton = document.getElementById('reset-button');

  userInput.addEventListener('input', updateCounts);
  resetButton.addEventListener('click', resetCounts);
});

// Función updateCounts()
function updateCounts() {
  const userInput = document.querySelector('textarea[name="user-input"]');
  const metrics = document.querySelectorAll('.metrica');
  const text = userInput.value;

  metrics.forEach(metric => {
    const metricText = metric.textContent.split(':')[0].trim();
    if (metricText === 'Caracteres') {
      metric.textContent = `${metricText}: ${analyzer.getCharacterCount(text)}`;
    } else if (metricText === 'Caracteres sin espacio') {
      metric.textContent = `${metricText}: ${analyzer.getCharacterCountExcludingSpaces(text)}`;
    } else if (metricText === 'Palabras') {
      metric.textContent = `${metricText}: ${analyzer.getWordCount(text)}`;
    } else if (metricText === 'Números') {
      metric.textContent = `${metricText}: ${analyzer.getNumberCount(text)}`;
    } else if (metricText === 'Suma de Números') {
      metric.textContent = `${metricText}: ${analyzer.getNumberSum(text)}`;
    } else if (metricText === 'Promedio Longitud') {
      metric.textContent = `${metricText}: ${analyzer.getAverageWordLength(text)}`;
    }
  });
}
function resetCounts() { // boton borrar
  const userInput = document.querySelector('textarea[name="user-input"]');
  const metrics = document.querySelectorAll('.metrica');

  userInput.value = '';
  metrics.forEach(metric => {
    const metricText = metric.textContent.split(':')[0].trim();
    metric.textContent = `${metricText}: 0`;
  });
}

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`