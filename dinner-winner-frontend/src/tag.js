const BASE_URL = 'http://localhost:3000/api'
const TAGS_URL = `${BASE_URL}/tags`
const ALL_TAGS = []

class Tag {
  constructor(tagData) {
    this.id = tagData.id
    this.name = tagData.name
    this.description = tagData.description
  }

  static getTags () {
    fetch(TAGS_URL)
    .then(response => response.json())
    .then(tagsData => {
      for (const tagData of tagsData) {
        ALL_TAGS.push(new Tag(tagData)) 
      }
    })
  }
  
  render(tagContainer) {
    let tagDiv = document.createElement('div');
    tagDiv.className = 'tag-div';
    tagDiv.setAttribute('data-tag-id', this.id);
    tagDiv.innerText = this.name;
    
    tagContainer.appendChild(tagDiv)
  }
}