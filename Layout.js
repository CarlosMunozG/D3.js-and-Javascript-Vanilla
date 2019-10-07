'use strict';

class Layout{
  constructor(root, style) {
  this.root = root;
  this.style = style;
  this.elements = null;
  this.header = null;
  this.main = null;
  }

  generate() {
    this.elements = `
      <header id="site-header"></header>
      <main id="site-main" class="wrapper"></main>
    `;
    this.render();
    this.getContainers();
  }
  
  render() {
    this.root.innerHTML = this.elements;
  }
  
  getContainers() {
    this.header = document.querySelector('#site-header');
    this.main = document.querySelector('#site-main');
  }  
}