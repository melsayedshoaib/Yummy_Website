import { CategoryId } from "./displayidcategory.js";

export class FilterCategories {
  constructor() {}
  async getCategoriesMeal(category) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}
`,
      { method: "GET" }
    );
    let response = await api.json();
    this.displayMealsByCategory(response);
  }
  displayMealsByCategory(data) {
    let container = ``;
    let result = Object.entries(data);
    let finalResult = result[0][1].slice(0, 20);
    for (let i = 0; i < finalResult.length; i++) {
      container += `
        <div class='col-md-3'>
          <div class="meal category-meal" data-idcat='${finalResult[i].idMeal}'>
            <img src='${finalResult[i].strMealThumb}' alt="meal">
            <div class="meal-layer">
              <h3>${finalResult[i].strMeal}</h3>
            </div>
          </div>
        </div>
      `;
    }
    $("#displayCategoriesMeals").html(container);
    this.getCurrentCatId();
  }
  getCurrentCatId(id) {
    let meals = Array.from(document.querySelectorAll(".category-meal"));
    for (let i = 0; i < meals.length; i++) {
      meals[i].addEventListener("click", (e) => {
        id = meals[i].getAttribute("data-idcat");
        let details = new CategoryId();
        details.getCatId(id);
        document
          .getElementById("displayCategoriesMealswithid")
          .classList.remove("d-none");
        document
          .getElementById("displayCategoriesMeals")
          .classList.add("d-none");
      });
    }
  }
}
