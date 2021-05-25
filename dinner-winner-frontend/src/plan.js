const PLANS_URL = `${BASE_URL}/plans`

class Plan {
  constructor(planData) {
    this.id = planData.id;
    this.title = planData.title;
    this.description = planData.description;
    this.likes = planData.likes;
    this.meals = planData.meals.map(mealData => new Meal(mealData))
    this.tags = planData.tags.map(tagData => ALL_TAGS.find(tag => tag.id === tagData.id))
    Plan.all.push(this)
  }

  static getPlans () {
    fetch(PLANS_URL)
    .then(response => response.json())
    .then(plans => {
      for (const plan of plans) {
        let newPlan = new Plan(plan)
        newPlan.render()
      }
    })
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
  
    if (this.meals) {
      this.meals.forEach(meal => meal.render(mealsContainer))
    }

    let tagContainer = document.createElement('div');
    tagContainer.className = 'tag-container-div'
    div.appendChild(tagContainer)
    
    if (this.tags) {
      debugger
      this.tags.forEach(tag => tag.render(tagContainer))
    }
  
    document.getElementById('content-wrap').appendChild(div);
    
  }
  
}

Plan.all = [];