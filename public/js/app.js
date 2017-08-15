/* global d3 */
console.log('App', d3);

(function(d3, window, undefined){
  // Reference: 
  // https://www.dashingd3js.com/binding-data-to-dom-elements
  
  // Display an array of data on dom elements
  // selectAll selects a virtual empty set of li elements
  const data = [1, 2, 3];
  d3.select('.d3-1')
    .append('ul')
    .selectAll('li')
    .data(data)
    .enter()
    .append('li')
    .text(function(v, i) { 
      return i + ':' + v; 
    });
  
  // TODO: https://www.dashingd3js.com/creating-svg-elements-based-on-data
  
  var circleRadii = [40, 20, 10];
  // viewBox="0 0 250 150"
  // Display a purple circle
  var svg = d3.select(".d3-2")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100)
    .attr('style', 'background-color: #f5f5f5');
  
  var circles = svg.selectAll('circle')
    .data(circleRadii)
    .enter()
    .append('circle');
  
  circles
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', function (v) {
      return v;
    })
    .style('fill', function (v) {
      var color = 'green';
      if(v === 40) { color = 'green'; }
      if(v === 20) { color = 'purple'; }
      if(v === 10) { color = 'red'; }
      return color;
    });
  
  // https://www.dashingd3js.com/using-the-svg-coordinate-space
  // https://www.dashingd3js.com/data-structures-d3js-accepts
  var svg3 = d3.select(".d3-3")
    .append("svg")
    .attr("width", '100%')
    .attr("height", 200)
    .attr('style', 'background-color: #f5f5f5; border: 1px dotted #ccc');
  
  var json = [{
    x: 30,
    y: 30,
    r: 20,
    color: 'green'
  }, {
    x: 70,
    y: 70,
    r: 20,
    color: 'purple'
  }, {
    x: 110,
    y: 110,
    r: 20,
    color: 'red'
  }];
  
  var circles3 = svg3.selectAll('circle')
    .data(json)
    .enter()
    .append('circle');
  
  circles3
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', function(d) { return d.r; })
    .style('fill', function(d) { return d.color; });
  
  // Basic SVG shapes
  // https://www.dashingd3js.com/svg-basic-shapes-and-d3js
  
  var svg4 = d3.select(".d3-4")
    .append('svg')
    .attr("width", '100%')
    .attr("height", 200)
    .attr('style', 'background-color: #f5f5f5; border: 1px dotted #ccc');
  
  // circle
  /* svg4.append('circle')
    .attr('cx', 30)
    .attr('cy', 30)
    .attr('r', 20); */
  
  // rectangle
  /* svg4.append('rect')
    .attr('x', 40)
    .attr('y', 40)
    .attr('width', 50)
    .attr('x', 100); */
    
  // ellipse
  /* svg4.append('ellipse')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('rx', 25)
    .attr('ry', 10); */
  
  // line
/*   svg4.append('line')
    .attr('x1', 5)
    .attr('y1', 5)
    .attr('x2', 50)
    .attr('y2', 50)
    .attr('stroke-width', 1)
    .attr('stroke', 'black');
   */
  
  // To do 
  // https://www.dashingd3js.com/svg-paths-and-d3js
  
})(d3, window);

/*
(function (d3, window, undefined){
  
			//Width and height
			var w = 300;
			var h = 300;
  
			var dataset = [ 5, 10, 20, 45, 6, 25 ];

			var outerRadius = w / 2;
			var innerRadius = w / 3;
			var arc = d3.svg.arc()
							.innerRadius(innerRadius)
							.outerRadius(outerRadius);
			console.log('arc', arc);
			var pie = d3.layout.pie();
			
			//Easy colors accessible via a 10-step ordinal scale
			var color = d3.scale.category10();

			//Create SVG element
  console.log(w, h);
			var svgRing = d3.select(".d3-ring")
						.append("svg")
						.attr("width", w)
						.attr("height", h);
  
			
			//Set up groups
			var arcs = svgRing.selectAll("g.arc")
						  .data(pie(dataset))
						  .enter()
						  .append("g")
						  .attr("class", "arc")
						  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
			
			//Draw arc paths
			arcs.append("path")
			    .attr("fill", function(d, i) {
			    	return color(i);
			    })
			    .attr("d", arc);
			
			//Labels
			arcs.append("text")
			    .attr("transform", function(d) {
			    	return "translate(" + arc.centroid(d) + ")";
			    })
			    .attr("text-anchor", "middle")
			    .text(function(d) {
			    	return d.value;
			    });
						
})(d3, window);
*/

