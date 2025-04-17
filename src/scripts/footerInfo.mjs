// Function to display the current year and author information in the footer
export function thisYear() {
    const d = new Date();
    document.getElementById("currentyear").innerHTML =
        `&copy; ${d.getFullYear()} | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil`;
}

// Function to display the last modification date of the document
export function lastModification() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModification").textContent =
        `Last Modified: ${lastModified.toLocaleString()}`;
}