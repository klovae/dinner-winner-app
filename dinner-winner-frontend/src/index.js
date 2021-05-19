const BASE_URL = 'http://localhost:3000/api'
const PLANS_URL = `${BASE_URL}/plans`


document.addEventListener('DOMContentLoaded', () => {
  getPlans()
})

function getPlans () {
  fetch(PLANS_URL)
  .then(response => response.json())
  .then(plans => {
    for (const plan of plans) {
      createPlan(plan)
    }
  })
}

function createPlan(planObj) {
  let div = document.createElement('div');
  div.className = 'plan';

  let title = document.createElement('h3');
  title.innerText = planObj['title']
  div.appendChild(title)

  let description = document.createElement('p');
  description.innerText = planObj['description'];
  div.appendChild(description);

  let mealsContainer = document.createElement('div');
  mealsContainer.className = "meals-container"
  div.appendChild(mealsContainer)

  addTags(div, planObj);
  addMealsList(mealsContainer, planObj);

  document.getElementById('content-wrap').appendChild(div);
  
}

function addTags(div, planObj) {
  let tagContainer = document.createElement('div');
  tagContainer.className = 'tag-container-div'

  for (const tag of planObj.tags) {
    let tagDiv = document.createElement('div');
    tagDiv.className = 'tag-div';
    tagDiv.setAttribute('data-tag-id', tag.id);
    tagDiv.innerText = tag.name;
    tagContainer.appendChild(tagDiv)
  }

  div.appendChild(tagContainer);

}

function addMealsList(mealsContainer, planObj) {
  let mealArray = planObj.meals;
  if (mealArray.length > 0) {
    mealArray.forEach(element => addMeal(mealsContainer, element))
  }
    
}

function addMeal(container, mealObj) {
  let mealDiv = document.createElement('div');
  mealDiv.setAttribute('data-meal-id', mealObj.id)
    
  let title = document.createElement('p')
  title.innerText = mealObj.title
  mealDiv.appendChild(title)
  container.appendChild(mealDiv)
}