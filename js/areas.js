import { FilterAreas } from "./filterareas.js";

export class Areas {
  constructor() {
    this.getAreas();
  }
  async getAreas() {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list
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
                <div class="meal area" data-area="${finalResult[i].strArea}"">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${finalResult[i].strArea}</h3>
                </div>
            </div>
          `;
    }
    $("#displayAreas").html(container);
    this.getArea();
  }
  getArea(area) {
    let areasMeals = Array.from(document.querySelectorAll(".area"));
    for (let i = 0; i < areasMeals.length; i++) {
      areasMeals[i].addEventListener("click", (e) => {
        area = areasMeals[i].getAttribute("data-area");
        let filterArea = new FilterAreas();
        filterArea.getAreasMeals(area);
        document.getElementById("displayAreasMeals").classList.remove("d-none");
        document.getElementById("displayAreas").classList.add("d-none");
      });
    }
  }
}
