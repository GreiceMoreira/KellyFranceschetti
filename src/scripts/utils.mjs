
export async function loadPartial(type, path) {
  try {
    // Fetch the partial HTML content
    const res = await fetch(path);
    const html = await res.text();

    // Log the loaded content for debugging
    console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} loaded:`, html); 

    // Insert the HTML into the designated container element
    document.getElementById(`${type}-container`).innerHTML = html;
  } catch (error) {
    // Log any error that occurs during fetch
    console.error(`Error loading the ${type}:`, error);
  }
}