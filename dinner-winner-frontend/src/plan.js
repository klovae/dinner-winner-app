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
    div.setAttribute('data-plan-id', this.id)
    div.className = 'plan';
  
    let title = document.createElement('h3');
    title.innerText = this.title
    div.appendChild(title)

    let editIcon = document.createElement('div');
    editIcon.className = 'edit icon'
    editIcon.setAttribute('data-plan-id', this.id)
    editIcon.addEventListener('click', () => {
      this.editMode(div, mealsContainer)
    })
    title.appendChild(editIcon)
  
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
      this.tags.forEach(tag => tag.render(tagContainer))
    }
  
    document.getElementById('content-wrap').appendChild(div);
    
  }

  editMode(div, mealsContainer) {
    div.className = "plan edit-mode"
    div.insertAdjacentHTML('afterbegin', "<h3 id='edit-mode'>EDITING PLAN</h3>")

    createPlanUpdateForm(mealsContainer, this.id)
    mealsContainer.insertAdjacentHTML('afterbegin', "<h4>Remove Meals (click trash icon)</h4>")
    
    let mealIcons = mealsContainer.querySelectorAll(".meal-div > div.icon")
    mealIcons.forEach(icon => {icon.className = "delete icon"})

    mealsContainer.insertAdjacentHTML('beforeend', '<button id="done-editing">Done Editing</button>')
    document.querySelector('#done-editing').addEventListener('click', (e) => this.closeEditMode(div, mealsContainer))
  }

  closeEditMode(div, mealsContainer) {
    div.removeChild(div.querySelector('h3#edit-mode'));
    div.removeChild(div.querySelector('h4'));
    div.className = 'plan';
    div.removeChild(div.querySelector('form'));
    mealsContainer.removeChild(mealsContainer.querySelector('h4'));
    mealsContainer.removeChild(mealsContainer.querySelector('button'));
  
  }
  
}

Plan.all = [];