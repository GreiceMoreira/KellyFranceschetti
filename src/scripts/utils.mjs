export async function loadPartial(type, path) {
  try {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(`${type}-container`).innerHTML = html;
  } catch (error) {
    console.error(`Error loading the ${type}:`, error);
  }
}