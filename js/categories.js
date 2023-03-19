import { FilterCategories } from "./filtercategories.js";

export class Categories {
  constructor() {
    this.getCategories();
  }
  async getCategories() {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php

`,
      { method: "GET" }
    );
    let response = await api.json();
    let res = Object.entries(response);
    let finalResult = res[0][1];
    let container = ``;
    for (let i = 0; i < finalResult.length; i++) {
      container += `
            <div class="col-md-3">
                <div class="meal category" data-category="${
                  finalResult[i].strCategory
                }"">
                    <img src="${finalResult[i].strCategoryThumb}" alt="meal">
                    <div class="meal-layer d-flex flex-column text-center">
                        <h3>${finalResult[i].strCategory}</h3>
                        <p>${finalResult[i].strCategoryDescription
                          .split(" ")
                          .splice(0, 20)
                          .join(" ")}</p>
                    </div>
                </div>
            </div>
          `;
    }
    $("#displayCategories").html(container);
    this.getCategory();
  }
  getCategory(category) {
    let categoriesMeals = Array.from(document.querySelectorAll(".category"));
    for (let i = 0; i < categoriesMeals.length; i++) {
      categoriesMeals[i].addEventListener("click", (e) => {
        category = categoriesMeals[i].getAttribute("data-category");
        let filterCategory = new FilterCategories();
        filterCategory.getCategoriesMeal(category);
        document
          .getElementById("displayCategoriesMeals")
          .classList.remove("d-none");
        document.getElementById("displayCategories").classList.add("d-none");
      });
    }
  }
}
