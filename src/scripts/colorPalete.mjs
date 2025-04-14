document.getElementById('generate').addEventListener('click', genetatePalette);

async function generatePallete() {
    const response = await fetch('https://colormind.io/api/', {
        method: "POST",
        body: JSON.stringify({model:'default'}),    
    });

    const data = await response.json();
    const colors = data.result;

    const paletteContainer = document.getElementById('palette');
    paletteContainer.innerHTML = '';

    colors.forEach(rgb => {
        const colorBox = document.createElement('div');
        const color = `rgb(${rgb.join(',')})`;
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        paletteContainer.appendChild(colorBox);
    })
    
}