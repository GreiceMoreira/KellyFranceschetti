// scripts/visitMessage.mjs
export function displayVisitMessage() {
    const visitMessage = document.querySelector("#visit-message");
    const overlay = document.getElementById("overlay");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();
  
    if (!lastVisit) {
      visitMessage.textContent =
        "Welcome! Feel free to reach out if you have any questions.";
    } else {
      const lastVisitTime = parseInt(lastVisit, 10);
      const timeDiff = currentTime - lastVisitTime;
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
      if (daysDiff < 1) {
        visitMessage.textContent = "Back so soon! That's awesome!";
      } else {
        visitMessage.textContent = `You last visited ${daysDiff} day${daysDiff > 1 ? "s" : ""} ago.`;
      }
    }
    localStorage.setItem("lastVisit", currentTime);

    const closeButton = document.querySelector(".side-close-btn");
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            overlay.style.display = "none";
        })
    }
  }