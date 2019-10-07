'use strict';

class View {
  constructor(parentElement, data, number){
    this.parentElement = parentElement;
    this.data = data;
    this.number = number;
    this.elements = null;
  }

  generateView(){
    const article = document.createElement('article');

    const graphicsContainer = document.createElement('section');
    graphicsContainer.classList.add('graphic-container');

    const graphics = document.createElement('div');
    graphics.classList.add('graphics');
    
    const graphicsTitle = document.createElement('h3');
    graphicsTitle.innerHTML = `${this.data.title}<span>${this.data.total}</span>`;
    
    const infoContainer = document.createElement('section');
    infoContainer.classList.add('info-container','wrapper-between');
    
    const tabletInfo = document.createElement('div');
    const tabletTitle = document.createElement('h4');
    tabletTitle.innerHTML = `Tablet`;
    tabletTitle.style.color = this.data.colors[1];
    const tabletInfoText1 = document.createElement('p');
    const tabletInfoText2 = document.createElement('p');
    tabletInfoText1.innerHTML = this.data.perCentTablet;
    tabletInfoText2.innerHTML = this.data.tablet;
    
    const smartphoneInfo = document.createElement('div');
    const smartphoneTitle = document.createElement('h4');
    smartphoneTitle.innerHTML = `Smartphone`;
    smartphoneTitle.style.color = this.data.colors[0];
    const smartphoneInfoText1 = document.createElement('p');
    const smartphoneInfoText2 = document.createElement('p');
    smartphoneInfoText1.innerHTML = this.data.perCentSmartphone;
    smartphoneInfoText2.innerHTML = this.data.smartphone;
    
    article.append(graphicsContainer);
    article.append(graphicsContainer, infoContainer);
    graphicsContainer.append(graphics, graphicsTitle);
    infoContainer.append(tabletInfo, smartphoneInfo);
    tabletInfo.append(tabletTitle, tabletInfoText1, tabletInfoText2);
    smartphoneInfo.append(smartphoneTitle, smartphoneInfoText1, smartphoneInfoText2);


    const donutGraphics = new Donut(this.parentElement , this.data, this.number );
    donutGraphics.generateDonutGraph();
    graphics.append(donutGraphics.elements);

    this.elements = article;
  }
}



