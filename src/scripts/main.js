// Importing utility and module functions
import { loadPartial } from "./utils.mjs";
import { setupHamburgerMenu } from "./hamburgerMenu.mjs";
import { getReceipsData, filterCrochets } from "./crochetsData.mjs";
import { displayCrochets } from "./displayCrochets.mjs";
import { showMembershipInfo } from "./membership.mjs";
window.showMembershipInfo = showMembershipInfo; // Making it globally available for inline events
import { thisYear, lastModification } from "./footerInfo.mjs";
import { loadLatestVideo } from "./youtubeEmbed.mjs";
import("./colorPalette.mjs"); // Dynamically load the color palette module

// Load header and footer partials
loadPartial("header", "./partials/header.html");
loadPartial("footer", "./partials/footer.html").then(() => {
  thisYear(); // Display current year in the footer
  lastModification(); // Display last modified date of the document
});

// YouTube API credentials
const apiKey = "AIzaSyAwoKiGBl1dqd0R6zjk_NcH7_bNaZAZoiw";
const channelId = "UCqpApZf4Ro0EmhIH47YmVaw";

// Load latest video on the homepage
if (
  window.location.pathname === "/" ||
  window.location.pathname.endsWith("index.html")
) {
  loadLatestVideo(apiKey, channelId);
}

// Run after DOM has fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  // Initialize hamburger menu on small screens
  if (window.matchMedia("(max-width: 768px)").matches) {
    setupHamburgerMenu();
  }

  // Display crochet gallery on the gallery page
  if (window.location.pathname.includes("gallery.html")) {
    const crochets = await getReceipsData();
    displayCrochets(crochets);

    // Filter buttons by level
    document.querySelector("#All").addEventListener("click", async () => {
      displayCrochets(await getReceipsData());
    });

    document.querySelector("#child").addEventListener("click", async () => {
      displayCrochets(await filterCrochets("Child"));
    });

    document.querySelector("#adult").addEventListener("click", async () => {
      displayCrochets(await filterCrochets("Adult"));
    });

    document.querySelector("#granny").addEventListener("click", async () => {
      displayCrochets(await filterCrochets("Granny"));
    });
  }

  // Display membership information on the form page
  if (window.location.pathname.includes("form.html")) {
    document.getElementById("child").addEventListener("click", () => {
      showMembershipInfo("child");
    });
    document.getElementById("adult").addEventListener("click", () => {
      showMembershipInfo("adult");
    });
    document.getElementById("granny").addEventListener("click", () => {
      showMembershipInfo("granny");
    });
  }
});
