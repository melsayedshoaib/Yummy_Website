import { SearchByNameDetails } from "./searchbynamedetails.js";

export class Search {
  constructor() {
    $("#sbn").on("input", (e) => {
      this.searchByName(e.target.value);
    });
    $("#sbfl").on("input", (e) => {
      this.searchByFirstLetter(e.target.value);
    });
  }
  async searchByName(term) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}
`,
      { method: "GET" }
    );
    let response = await api.json();
    this.displayMealsByName(response);
  }
  async searchByFirstLetter(letter) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}
`,
      { method: "GET" }
    );
    let response = await api.json();
    this.displayMealsByName(response);
  }
  displayMealsByName(data) {
    let container = ``;
    let result = Object.entries(data);
    let finalResult = result[0][1];
    for (let i = 0; i < finalResult.length; i++) {
      container += `
        <div class='col-md-3'>
          <div class="meal" data-id='${finalResult[i].idMeal}'>
            <img src='${finalResult[i].strMealThumb}' alt="meal">
            <div class="meal-layer">
              <h3>${finalResult[i].strMeal}</h3>
            </div>
          </div>
        </div>
      `;
    }
    $("#displayContent").html(container);
    this.getCurrentId();
  }
  getCurrentId(id) {
    let meals = Array.from(document.querySelectorAll(".meal"));
    for (let i = 0; i < meals.length; i++) {
      meals[i].addEventListener("click", (e) => {
        id = meals[i].getAttribute("data-id");
        let details = new SearchByNameDetails();
        details.getDetails(id);
        document
          .getElementById("displayContentwithid")
          .classList.remove("d-none");
        document.getElementById("displayContent").classList.add("d-none");
      });
    }
  }
}
