import { IngredientId } from "./displayidingredients.js";

export class FilterIngredients {
  constructor() {}
  async getIngredientsMeals(ingredient) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}
`,
      { method: "GET" }
    );
    let response = await api.json();
    this.displayMealsByIngredient(response);
  }
  displayMealsByIngredient(data) {
    let container = ``;
    let res = Object.entries(data);
    let finalResult = res[0][1].slice(0, 20);
    console.log(finalResult);
    for (let i = 0; i < finalResult.length; i++) {
      container += `
        <div class='col-md-3'>
          <div class="meal ingredient-meal" data-idingredient='${finalResult[i].idMeal}'>
            <img src='${finalResult[i].strMealThumb}' alt="meal">
            <div class="meal-layer">
              <h3>${finalResult[i].strMeal}</h3>
            </div>
          </div>
        </div>
      `;
    }
    $("#displayIngredientsMeals").html(container);
    this.getCurrentIngredientId();
  }
  getCurrentIngredientId(id) {
    let meals = Array.from(document.querySelectorAll(".ingredient-meal"));
    for (let i = 0; i < meals.length; i++) {
      meals[i].addEventListener("click", (e) => {
        id = meals[i].getAttribute("data-idingredient");
        let details = new IngredientId();
        details.getIngredientId(id);
        document
          .getElementById("displayIngredientsswithid")
          .classList.remove("d-none");
        document
          .getElementById("displayIngredientsMeals")
          .classList.add("d-none");
      });
    }
  }
}
