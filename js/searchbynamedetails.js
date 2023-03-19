export class SearchByNameDetails {
  constructor() {}
  async getDetails(id) {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
`,
      { method: "GET" }
    );
    let response = await api.json();
    this.displayData(response);
  }
  displayData(data) {
    let res = Object.entries(data);
    let finalRes = res[0][1][0];
    let ingredients = ``;
    for (let i = 0; i < 20; i++) {
      if (finalRes[`strIngredient${i}`]) {
        ingredients += `<li class="alert alert-info m-2 p-1">${
          finalRes[`strMeasure${i}`]
        } ${finalRes[`strIngredient${i}`]}</li>`;
      }
    }
    let tags = finalRes.strTags?.split(",");
    if (!tags) tags = [];
    for (let i = 0; i < tags.length; i++) {
      tags += `<li class="alert alert-danger m-2 p-1">${tags[i]}</li>`;
    }
    let container = ``;
    container += `
            <div class="col-md-4">
                <img class="w-100 rounded-3" src='${finalRes.strMealThumb}' alt="meal">
                <div class="d-flex align-items-center justify-content-between">
                  <h2>${finalRes.strMeal}</h2>
                  <i class="fa-solid fa-x" id="returnToMenu"></i>
                </div>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${finalRes.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${finalRes.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${finalRes.strCategory}</h3>
                <h3>Receipes : </h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>
                <h3>Tags : </h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tags}
                </ul>
                <a target="_blank" href="${finalRes.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${finalRes.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
        `;
    $("#displayContentwithid").html(container);
    $("#returnToMenu").click(() => {
      $("#displayContentwithid").addClass("d-none");
      $("#displayContent").removeClass("d-none");
    });
  }
}
