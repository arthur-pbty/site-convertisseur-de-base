const convertButton = document.getElementById('convertButton');
const baseSource = document.getElementById('baseSource');
const baseDestination = document.getElementById('baseDestination');
const numberInput = document.getElementById('numberInput');
const resultOutput = document.getElementById('resultOutput');
const toggleThemeButton = document.getElementById('toggleTheme');

for (let i = 2; i <= 36; i++) {
  let option = new Option(i, i);
  baseSource.add(option.cloneNode(true));
  baseDestination.add(option);
}

// Convert and display result with error handling
convertButton.addEventListener('click', () => {
    const sourceBase = parseInt(baseSource.value);
    const destinationBase = parseInt(baseDestination.value);
    const number = numberInput.value.trim();

    try {
        if (!number.match(/^[0-9A-F]+$/i)) {
            throw new Error('Nombre invalide pour la base donnée');
        }
        const result = parseInt(number, sourceBase).toString(destinationBase);
        if (isNaN(result)) {
            throw new Error('Conversion impossible');
        }
        resultOutput.value = result.toUpperCase();
    } catch (error) {
        resultOutput.value = 'Erreur';
    }
});

// Toggle dark theme
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleThemeButton.textContent = document.body.classList.contains('dark') ? 'Thème Clair' : 'Thème Sombre';
});