'use strict';

class Router{
  constructor(){
    this.page = {};
  }

  buildDom(url, parentElement, links) {
    if(url === '/'){
      this.generateHomePage(parentElement, links, url);
    }
  } 
  
  generateHomePage(parentElement, links, url) {
    this.page = new HomePage(parentElement, links, url);
    this.page.generate();
  }
}

const routerInstance = new Router();  
