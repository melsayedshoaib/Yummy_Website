import { AreaId } from "./displayidareas.js";

export class FilterAreas {
  constructor() {}
  async getAreasMeals(area) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}
`,
      { method: "GET" }
    );
    let response = await api.json();
    this.displayMealsByArea(response);
  }
  displayMealsByArea(data) {
    let container = ``;
    let result = Object.entries(data);
    let finalResult = result[0][1].slice(0, 20);
    for (let i = 0; i < finalResult.length; i++) {
      container += `
        <div class='col-md-3'>
          <div class="meal area-meal" data-idarea='${finalResult[i].idMeal}'>
            <img src='${finalResult[i].strMealThumb}' alt="meal">
            <div class="meal-layer">
              <h3>${finalResult[i].strMeal}</h3>
            </div>
          </div>
        </div>
      `;
    }
    $("#displayAreasMeals").html(container);
    this.getCurrentAreaId();
  }
  getCurrentAreaId(id) {
    let meals = Array.from(document.querySelectorAll(".area-meal"));
    for (let i = 0; i < meals.length; i++) {
      meals[i].addEventListener("click", (e) => {
        id = meals[i].getAttribute("data-idarea");
        let details = new AreaId();
        details.getAreaId(id);
        document
          .getElementById("displayAreasMealswithid")
          .classList.remove("d-none");
        document.getElementById("displayAreasMeals").classList.add("d-none");
      });
    }
  }
}
