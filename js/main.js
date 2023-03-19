import { ActiveClass } from "./activesection.js";
import { Areas } from "./areas.js";
import { Categories } from "./categories.js";
import { ContactUs } from "./contactus.js";
import { Header } from "./header.js";
import { Ingredients } from "./ingredients.js";
import { Search } from "./searchbyname.js";
import { ToggleAside } from "./togglaside.js";
import { checkFavIcon } from "./fav.js";

$(document).ready(() => {
  // Updating the fav icon
  let fav = new checkFavIcon();
  // Toggle open and close aside
  let toggle = new ToggleAside();
  // Header page
  let header = new Header();
  // Handle Active Section
  let active = new ActiveClass();
  // Search
  let search = new Search();
  // Categories
  let category = new Categories();
  // Areas
  let area = new Areas();
  // Ingredients
  let ingredient = new Ingredients();
  // Contact Us
  let contactUs = new ContactUs();
});
