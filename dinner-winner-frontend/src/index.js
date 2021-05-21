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
  mealDiv.className = 'meal-div'
    
  mealDiv.innerHTML =  `
    <a href="${mealObj.recipe_url}">${mealObj.title}</a>
    <p>${mealObj.notes}</p>
  `
  container.appendChild(mealDiv)
}

createButton = document.getElementById('create-button')
createButton.addEventListener('click', (e) => {
  addFormBlock(e.currentTarget)
  planForm = document.getElementById('create-plan-form')
  planForm.addEventListener('submit', (e) => formHandler(e))
})

function addFormBlock(refElement) {
  let formBlock = document.createElement('div')
  formBlock.className = 'form-block'

  formBlock.innerHTML = `
    <form id="create-plan-form">
    <input id='input-title' type="text" name="title" value="" placeholder="Enter the name of your plan here" class="textbox">
    <input id="input-description" type="text" name="description" value="" placeholder="Describe your meal plan in a sentence" class="textbox">
    <input type="submit" id="form-submit"value="Submit Plan"> 
  `
  refElement.insertAdjacentElement('afterEnd', formBlock)
}

function formHandler(e) {
  e.preventDefault();
  const titleInput = document.querySelector('#input-title').value;
  const descriptionInput = document.querySelector('#input-description').value;
  postFetch(titleInput, descriptionInput)
}

function postFetch(title, description) {
  fetch(PLANS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      title: title,
      description: description
    })
  })

}