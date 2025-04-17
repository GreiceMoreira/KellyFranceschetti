// scripts/visitMessage.mjs

/**
 * Displays a personalized message based on the user's last visit.
 * Stores the visit timestamp in localStorage.
 */
export function displayVisitMessage() {
  const visitMessage = document.querySelector("#visit-message");
  const overlay = document.getElementById("overlay");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentTime = new Date().getTime();

  // Check if this is the user's first visit
  if (!lastVisit) {
      visitMessage.textContent =
          "Welcome! Feel free to reach out if you have any questions.";
  } else {
      // Calculate the difference in days since the last visit
      const lastVisitTime = parseInt(lastVisit, 10);
      const timeDiff = currentTime - lastVisitTime;
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      // Display a message based on how many days ago the user last visited
      if (daysDiff < 1) {
          visitMessage.textContent = "Back so soon? That's awesome!";
      } else {
          visitMessage.textContent = `You last visited ${daysDiff} day${daysDiff > 1 ? "s" : ""} ago.`;
      }
  }

  // Update localStorage with the current visit time
  localStorage.setItem("lastVisit", currentTime);

  // Allow the user to close the overlay message
  const closeButton = document.querySelector(".side-close-btn");
  if (closeButton) {
      closeButton.addEventListener("click", () => {
          overlay.style.display = "none";
      });
  }
}
