// Add an event listener to the "Generate" button that calls the generatePalette function when clicked
document.getElementById('generate').addEventListener('click', generatePalette);

// Async function to fetch a color palette based on the base color input
async function generatePalette() {
  // Get the base color value from the input and remove the "#" character
  const hex = document.getElementById('baseColor').value.slice(1);

  try {
    // Fetch a palette from The Color API using the base color and analogic scheme
    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&scheme=analogic&count=5&mode=analogic`);
    const data = await response.json();

    // Check if the response contains color data
    if (data.colors && data.colors.length > 0) {
      const colors = data.colors;
      console.log(colors); // Log the colors to the console for debugging

      // Select the container where the palette will be displayed
      const paletteContainer = document.getElementById('palette');
      paletteContainer.innerHTML = ''; // Clear any existing content

      // Loop through each color in the palette
      colors.forEach(color => {
        // Create a box to display the color visually
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color.hex.value;
        colorBox.title = color.hex.value;

        // Create a container for the color's information (name and hex code)
        const colorInfo = document.createElement('div');
        colorInfo.className = 'color-info';

        // Create a paragraph to show the color name
        const colorName = document.createElement('p');
        colorName.textContent = color.name.value || 'Name not available'; 
        console.log(color.name.value); // Log the color name for debugging

        // Create a paragraph to show the hex code
        const colorHex = document.createElement('p');
        colorHex.textContent = color.hex.value;

        // Append the name and hex code to the info container
        colorInfo.appendChild(colorName);
        colorInfo.appendChild(colorHex);

        // Append the color box and info to the main palette container
        paletteContainer.appendChild(colorBox);
        paletteContainer.appendChild(colorInfo);
      });
    } else {
      // Handle case when no colors are returned
      console.error("No colors found in the response.");
    }
  } catch (error) {
    // Handle any errors that occur during the fetch or processing
    console.error("Error generating palette:", error);
  }
}