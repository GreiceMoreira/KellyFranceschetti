document.getElementById('generate').addEventListener('click', generatePalette);

async function generatePalette() {
  const hex = document.getElementById('baseColor').value.slice(1); // Remove the "#"

  try {
    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&scheme=analogic&count=5&mode=analogic`);
    const data = await response.json();

    if (data.colors && data.colors.length > 0) {
      const colors = data.colors;
      console.log(colors);

      const paletteContainer = document.getElementById('palette');
      paletteContainer.innerHTML = ''; 

      colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color.hex.value;
        colorBox.title = color.hex.value;

        const colorInfo = document.createElement('div');
        colorInfo.className = 'color-info';


        const colorName = document.createElement('p');
        colorName.textContent = color.name.value || 'Name not available'; 
        console.log(color.name.value)


        const colorHex = document.createElement('p');
        colorHex.textContent = color.hex.value;

        colorInfo.appendChild(colorName);
        colorInfo.appendChild(colorHex);


        paletteContainer.appendChild(colorBox);
        paletteContainer.appendChild(colorInfo);
      });
    } else {
      console.error("No colors found in the response.");
    }
  } catch (error) {
    console.error("Error generating palette:", error);
  }
}