"use strict";

const main = () => {
  const ENTRY_POINT = "/";
  let layoutInstance = null;
  const rootElement = document.querySelector("#root");
  const links = [
    { 
      name: "Home", 
      url: "/" 
    }
  ];

  const generateLayout = () => {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  const activateRouter= () => routerInstance.buildDom(ENTRY_POINT, layoutInstance.main, null, links);

  generateLayout();
  activateRouter();
}

window.addEventListener("load", main);