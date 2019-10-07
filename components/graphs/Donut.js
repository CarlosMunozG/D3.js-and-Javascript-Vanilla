'use strict';

class Donut {
  constructor(parentElement, data, number){
    this.parentElement = parentElement;
    this.data = data;
    this.number = number;
    this.elements = null;
  }

  generateDonutGraph(){
    const donutGraph = document.createElement('div');
    donutGraph.classList.add(`donut-graphic-${this.number}`);
    this.parentElement.append(donutGraph);

    const width = 150;
    const height = 150;
    const margin = 10;
    const radius = Math.min(width, height) / 2 - margin;
    const svg = d3.select(`.donut-graphic-${this.number}`)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      
    const data = this.data.dataTable;
    const colors = this.data.colors;
    const color = d3.scaleOrdinal()
      .domain(data)
      .range(colors);
    
    const pie = d3.pie()
      .value( d =>  d.value )
      .sort(null);
    const data_ready = pie(d3.entries(data));

    svg
      .selectAll()
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(60)        
        .outerRadius(radius)
      )
      .attr('fill', d =>  (color(d.data.key)) )
          

    this.elements = donutGraph;
  }
}