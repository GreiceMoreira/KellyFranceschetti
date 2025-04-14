export function displayCrochets(crochets) {
    const cards = document.querySelector('#cards');
    cards.innerHTML = "";

    crochets.forEach(crochet => {
        let card = document.createElement('section');
        card.classList.add('own');

        card.innerHTML = `
            <h2>${crochet.name} square</h2>
            <h4>Yean: ${crochet.yearn}</h4>
            <h4>Hook: ${crochet.hook}</h4>
            <h4>Level: ${crochet.level}</h4>
            <img src="${crochet.imageurl}" alt="image of ${crochet.name} square" loading="lazy" width="300">
        `;

        cards.appendChild(card);
    });
}