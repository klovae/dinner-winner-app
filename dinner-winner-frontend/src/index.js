const BASE_URL = 'http://localhost:3000'
const PLANS_URL = `${BASE_URL}/plans`


document.addEventListener('DOMContentLoaded', () => {
  getPlans()
})

function getPlans () {
  fetch(PLANS_URL)
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    const plansObject = json;
    for (const plan of plansObject) {
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

  addTags(div, planObj);

  document.getElementById('content-wrap').appendChild(div);
  
}

function addTags(div, planObj) {
  let tagContainer = document.createElement('div');
  tagContainer.className = 'tag-container-div'

  for (const tag of planObj['tags']) {
    let tagDiv = document.createElement('div')
    tagDiv.className = 'tag-div'
    tagDiv.innerText = tag['name']
    tagContainer.appendChild(tagDiv)
  }

  div.appendChild(tagContainer);

}