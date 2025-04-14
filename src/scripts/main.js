import { carregarPartial } from "./utils.mjs";
import { setupHamburgerMenu } from "./hamburgerMenu.mjs";
import { getReceipsData, filterCrochets } from "./crochetsData.mjs";
import { displayCrochets } from "./displayCrochets.mjs";
// import { showMembershipInfo } from "./membership.mjs";
import { thisYear, lastModification } from "./footerInfo.mjs";
import { loadLatestVideo } from "./youtubeEmbed.mjs";

carregarPartial("header", "./partials/header.html");
carregarPartial("footer", "./partials/footer.html");

const apiKey = "AIzaSyAwoKiGBl1dqd0R6zjk_NcH7_bNaZAZoiw";
const channelId = "UCqpApZf4Ro0EmhIH47YmVaw";
// const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
// const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

loadLatestVideo(apiKey, channelId);

document.addEventListener("DOMContentLoaded", async () => {
  setupHamburgerMenu();
  thisYear();
  lastModification();

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

  // membership modal pode ser conectado onde for necessário
  // exemplo:
  // document.querySelector("#someBtn").addEventListener("click", () => showMembershipInfo("child"));
});
