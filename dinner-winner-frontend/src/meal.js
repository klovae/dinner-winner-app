class Meal {
  constructor(mealData) {
    this.title = mealData.title;
    this.recipe_url = mealData.recipe_url
    this.notes = mealData.notes
    this.plan_id = mealData.plan_id
  }
  
  render(container) {
    let mealDiv = document.createElement('div');
    mealDiv.setAttribute('data-meal-id', this.id)
    mealDiv.className = 'meal-div'
      
    mealDiv.innerHTML =  `
      <a href="${this.recipe_url}">${this.title}</a>
      <p>${this.notes}</p>
    `
    container.appendChild(mealDiv)
  }
}