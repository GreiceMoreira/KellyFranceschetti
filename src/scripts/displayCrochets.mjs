// Function to display crochet cards on the page
export function displayCrochets(crochets) {
    const cards = document.querySelector('#cards'); // Select the container for the cards
    cards.innerHTML = ""; // Clear any previous content

    // Loop through each crochet item and create a card
    crochets.forEach(crochet => {
        let card = document.createElement('section');
        card.classList.add('own'); // Add a custom CSS class for styling

        // Populate the card with crochet information
        card.innerHTML = `
            <h2>${crochet.name} Square</h2>
            <h4>Yarn: ${crochet.yearn}</h4>
            <h4>Hook: ${crochet.hook}</h4>
            <h4>Level: ${crochet.level}</h4>
            <img src="${crochet.imageurl}" alt="Image of ${crochet.name} square" loading="lazy" width="300">
        `;

        // Append the card to the container
        cards.appendChild(card);
    });
}