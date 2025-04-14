import { carregarPartial } from "./utils.mjs";
import { setupHamburgerMenu } from "./hamburgerMenu.mjs";
import { getReceipsData, filterCrochets } from "./crochetsData.mjs";
import { displayCrochets } from "./displayCrochets.mjs";
// import { showMembershipInfo } from "./membership.mjs";
import { thisYear, lastModification } from "./footerInfo.mjs";

carregarPartial("header", "./public/partials/header.html");
carregarPartial("footer", "./public/partials/footer.html");

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
