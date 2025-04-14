document.getElementById('generate').addEventListener('click', generatePalette);

async function generatePalette() {
  const hex = document.getElementById('baseColor').value;
  const rgbBase = hexToRgb(hex);

  const input = [rgbBase, "N", "N", "N", "N"]; 

  try {
    const response = await fetch('http://colormind.io/api/', {
      method: "POST",
      body: JSON.stringify({
        model: "default",
        input: input
      })
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
      colorBox.title = color;
      paletteContainer.appendChild(colorBox);
    });
  } catch (error) {
    console.error("Error generating palette:", error);
  }
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}