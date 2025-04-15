import { loadPartial } from "./utils.mjs";
import { setupHamburgerMenu } from "./hamburgerMenu.mjs";
import { getReceipsData, filterCrochets } from "./crochetsData.mjs";
import { displayCrochets } from "./displayCrochets.mjs";
import { showMembershipInfo } from "./membership.mjs";
window.showMembershipInfo = showMembershipInfo;
import { thisYear, lastModification } from "./footerInfo.mjs";
import { loadLatestVideo } from "./youtubeEmbed.mjs";
import("./colorPalette.mjs");

// header and footer
loadPartial("header", "./partials/header.html");
loadPartial("footer", "./partials/footer.html").then(() => {
  thisYear();
  lastModification();
});

//youtube api
const apiKey = "AIzaSyAwoKiGBl1dqd0R6zjk_NcH7_bNaZAZoiw";
// const channelId = "UCqpApZf4Ro0EmhIH47YmVaw";
const channelId = "UC7mlMWoGRX3vVmCMLreMS_g";

if (
  window.location.pathname === "/" ||
  window.location.pathname.endsWith("index.html")
) {
  loadLatestVideo(apiKey, channelId);
}

//color palette api
// if (window.location.pathname.includes("colorPalette")) {
//   import("./colorPalette.mjs");
// }

document.addEventListener("DOMContentLoaded", async () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    setupHamburgerMenu();
  }

  //Display receips gallery
  if (window.location.pathname.includes("gallery.html")) {
    const crochets = await getReceipsData();
    displayCrochets(crochets);

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

  if (window.location.pathname.includes("form.html")) {
    //Display membership
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
