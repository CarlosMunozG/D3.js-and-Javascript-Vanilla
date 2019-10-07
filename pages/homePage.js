'use strict';

class HomePage{
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    this.data = null;
  }

  async generate() {
    await this.connectToAPI();

    this.elements = `
      <section class="site-intro wrapper-center"></section>`;
    this.render();
  }

  createViews() {
    const numberOfViews = this.data.length;
    const parentView = document.querySelector('.site-intro');
    for(let i=0; i < numberOfViews; i++){
      const number = [i];
      const view = new View(parentView, this.data[i], number);
      view.generateView();
      parentView.append(view.elements);
    }
  }

  render() {
    this.parentElement.innerHTML = this.elements;
    this.createViews();
  }
  
  async connectToAPI() {
    this.data = await dataServiceInstance.getDataModel();
  }      
}
