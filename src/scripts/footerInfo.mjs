export function thisYear() {
    const d = new Date();
    document.getElementById("currentyear").innerHTML =
        `&copy; ${d.getFullYear()} | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil`;
}

export function lastModification() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModification").textContent =
        `Last modification: ${lastModified.toLocaleString()}`;
}