class Plan {
  constructor(planData) {
    debugger
    this.id = planData.id;
    this.title = planData.title;
    this.description = planData.description;
    this.likes = planData.likes;
    this.meals = planData.meals.map(mealData => new Meal(mealData))
    Plan.all.push(this)
  }



  render() {
    let div = document.createElement('div');
    div.className = 'plan';
  
    let title = document.createElement('h3');
    title.innerText = this.title
    div.appendChild(title)
  
    let description = document.createElement('p');
    description.innerText = this.description;
    div.appendChild(description);
  
    let mealsContainer = document.createElement('div');
    mealsContainer.className = "meals-container"
    div.appendChild(mealsContainer)
  
    /* if (this.tags) {
      addTags(div, this);
    }
  */
    if (this.meals) {
      this.meals.forEach(meal => meal.render(mealsContainer))
    }
  
    document.getElementById('content-wrap').appendChild(div);
    
  }
  
}

Plan.all = [];