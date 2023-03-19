import { FilterIngredients } from "./filteringredients.js";

export class Ingredients {
  constructor() {
    this.getIngredients();
  }
  async getIngredients() {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list
`,
      { method: "GET" }
    );
    let response = await api.json();
    let finalResult = response.meals.slice(0, 20);
    let container = ``;
    for (let i = 0; i < finalResult.length; i++) {
      container += `
            <div class="col-md-3">
                <div class="meal ingredient" data-ingredient="${
                  finalResult[i].strIngredient
                }"">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${finalResult[i].strIngredient}</h3>
                    <p>${finalResult[i].strDescription
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")}</p>
                </div>
            </div>
          `;
    }
    $("#displayIngredients").html(container);
    this.getIngredient();
  }
  getIngredient(ingredient) {
    let ingresMeals = Array.from(document.querySelectorAll(".ingredient"));
    for (let i = 0; i < ingresMeals.length; i++) {
      ingresMeals[i].addEventListener("click", (e) => {
        ingredient = ingresMeals[i].getAttribute("data-ingredient");
        let filterIngredient = new FilterIngredients();
        filterIngredient.getIngredientsMeals(ingredient);
        document
          .getElementById("displayIngredientsMeals")
          .classList.remove("d-none");
        document.getElementById("displayIngredients").classList.add("d-none");
      });
    }
  }
}
