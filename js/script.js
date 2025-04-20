// Import translator module (adjust relative path as needed)
import { Translator, Language } from "https://tyuxx.github.io/tyuLIB/lib/ddcTranslate/translator.js";

// Updated Title Screen HTML with translation attributes.

// Create pages using DDCMultiPage library
await DDCMultiPage.newPageFromURL("TitleScreen", "title", "./pages/title.html");
await DDCMultiPage.newPageFromURL("GameScreen", "game", "./pages/gameScreen.html");

// Function to populate saves from localStorage
function populateSaveSelector() {
  const selector = document.getElementById("saveSelector");
  // Clear existing options except first default option
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("DDCSave-BarsReborn-")) {
      // Create new option element for each save
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      selector.appendChild(option);
    }
  }
}

// Create a default translator instance with a sample dictionary.
const defaultDict = {
  "bars reborn": "Bars Reborn",
  "new game": "New Game",
  "game screen": "Game Screen"
};
const translator = new Translator([ new Language("Default", "en-us", defaultDict) ]);

// Setup event listeners once DOM is ready.
populateSaveSelector();
  document.getElementById("newGameButton").addEventListener("click", () => {
    DDCMultiPage.changePage("game");
    translator.translatePageToActive(); // re-translate new page content if needed
  });
  DDCMultiPage.changePage("title");
  translator.translatePageToActive(); // Translate current page elements