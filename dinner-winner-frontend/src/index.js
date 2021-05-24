const BASE_URL = 'http://localhost:3000/api'
const PLANS_URL = `${BASE_URL}/plans`
const TAGS_URL = `${BASE_URL}/tags`
const TAG_DATA = []

document.addEventListener('DOMContentLoaded', () => {
  getPlans()
  getTagList()
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

function getTagList () {
  fetch(TAGS_URL)
  .then(response => response.json())
  .then(tags => {
    for (const tag of tags) {
      TAG_DATA.push({
        id: tag.id,
        name: tag.name,
        description: tag.description
      }) 
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

  if (planObj.tags) {
  addTags(div, planObj);
  }

  if (planObj.meals) {
  addMealsList(mealsContainer, planObj);
  }

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
  let formBlock = document.createElement('div');
  formBlock.setAttribute('id', 'form-block');

  formBlock.innerHTML = `
    <form id="create-plan-form">
    <input id='input-title' type="text" name="title" value="" placeholder="Enter the name of your plan here" class="textbox">
    <input id="input-description" type="text" name="description" value="" placeholder="Describe your meal plan in a sentence" class="textbox">
    <label>Add Meals</label><div class="add icon" id="add-meal-to-form"></div><br>
    <div id="meal-input-container">
    ${addMealInputs()}
    </div>
    <label>Add Tags</label><br>
    ${addTagChecks()}<br>
    <input type="submit" id="form-submit" value="Submit Plan"> 
  `;
  refElement.insertAdjacentElement('afterEnd', formBlock);
  const addMealButton = document.querySelector('#add-meal-to-form')
  addMealButton.addEventListener('click', (e) => {
    addMealToForm()
  })
}

function addMealInputs() {
  let mealInput =  `
    <div class='meal-form-div'>
      <input class="meal-title" type="text" name="title" value="" placeholder="Enter the name or description of the recipe here" class="textbox">
      <input class="meal-recipe-url" type="text" name="recipe-url" value="" placeholder="Full recipe URL, including https://" class="textbox">
      <input class="meal-notes" type="text" name="notes" value="" placeholder="Recipe notes, e.g. prep info, ingredient substitutions, etc.">
    </div>
  `
  return mealInput
}

function addMealToForm() {
  const mealForm = document.querySelector("#meal-input-container");
  mealForm.insertAdjacentHTML('beforeend', addMealInputs())
}

function addTagChecks() {
  let tagChecks = ""
  for (const tag of TAG_DATA) {
    tagChecks += `<label for="tag_ids_${tag.id}">${tag.name}</label>
    <input type="checkbox" value="${tag.id}" class="tag-checks">`
  }
  return tagChecks
}

function formHandler(e) {
  e.preventDefault();
  const titleInput = document.querySelector('#input-title').value;
  const descriptionInput = document.querySelector('#input-description').value;
  const tagInput = checkTags()
  debugger
  postFetch(titleInput, descriptionInput, tagInput)
}

function checkTags() {
  tagBoxes = document.getElementsByClassName('tag-checks')
  tagsToAdd = [] /* this may be syntactically clearer as filter */
  for (const tag of tagBoxes) {
    if (tag.checked) {
      tagsToAdd.push(tag.value)
    }
  }
  return tagsToAdd
}

function postFetch(title, description, tags) {
  fetch(PLANS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      title: title,
      description: description,
      tag_ids: tags
    })
  })
  .then(response => response.json())
  .then(plan => {
    createPlan(plan)
    document.querySelector('#form-block').remove()
  })

}