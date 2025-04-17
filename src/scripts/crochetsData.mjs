// Path to the local JSON file containing crochet recipes
const url = "./json/receips.json";

// Fetches all crochet data from the JSON file
export async function getReceipsData() {
    const response = await fetch(url); // Fetch the JSON file
    const data = await response.json(); // Parse the JSON response
    return data.crochets; // Return the array of crochet items
}

// Filters the crochet data based on difficulty level
export async function filterCrochets(level) {
    const crochets = await getReceipsData(); // Get all crochet items
    // Filter the items by comparing the 'level' property (case-insensitive)
    return crochets.filter(c => c.level.toLowerCase() === level.toLowerCase());
}