const url = "./json/receips.json";

export async function getReceipsData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Verifique os dados aqui
    return data.crochets;
}

export async function filterCrochets(level) {
    const crochets = await getReceipsData();
    return crochets.filter(c => c.level.toLowerCase() === level.toLowerCase());
}