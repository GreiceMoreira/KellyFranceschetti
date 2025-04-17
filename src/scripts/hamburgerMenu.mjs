// Function to set up the hamburger menu toggle functionality
export function setupHamburgerMenu() {
    const mainnav = document.querySelector('.navigation'); // Selects the main navigation element
    const hambutton = document.querySelector('#menu');     // Selects the hamburger button

    // Adds a click event listener to toggle the navigation menu and button state
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');   // Toggles the visibility of the navigation menu
        hambutton.classList.toggle('open'); // Toggles the hamburger icon state (open/close)
    });
}