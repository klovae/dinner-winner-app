const BASE_URL = 'https://localhost:3000'
const PLANS_URL =  `${BASE_URL}/plans`


document.addEventListener('DOMContentLoaded', () => {
  getPlans()
})

function getPlans () {
  fetch(PLANS_URL)
  .then(response => response.json)
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

  document.getElementById('content-wrap').appendChild(div)
  
}