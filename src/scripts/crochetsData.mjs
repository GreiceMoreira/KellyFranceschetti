const url = "./json/receips.json";

export async function getReceipsData() {
    const response = await fetch(url);
    const data = await response.json();
    return data.crochets;
}

export async function filterCrochets(level) {
    const crochets = await getReceipsData();
    return crochets.filter(c => c.level.toLowerCase() === level.toLowerCase());
}