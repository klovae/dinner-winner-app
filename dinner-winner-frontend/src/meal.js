class Meal {
  constructor(mealData) {
    this.id = mealData.id
    this.title = mealData.title;
    this.recipe_url = mealData.recipe_url
    this.notes = mealData.notes
    this.plan_id = mealData.plan_id
  }
  
  render(classes, container) {
    let mealDiv = document.createElement('div');
    mealDiv.setAttribute('data-meal-id', this.id)
    mealDiv.className = 'meal-div'
      
    mealDiv.innerHTML =  `
      <a href="${this.recipe_url}">${this.title}</a><div class="${classes}" data-meal-id="${this.id}"></div>
      <p>${this.notes}</p>
    `
    mealDiv.querySelector('div').addEventListener('click', (e) => this.deleteMeal(mealDiv)) 

    container.appendChild(mealDiv)
  }

  deleteMeal(mealDiv) {
    fetch(`${PLANS_URL}/${this.plan_id}/meals/${this.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(mealDiv.remove())
  }

  
}