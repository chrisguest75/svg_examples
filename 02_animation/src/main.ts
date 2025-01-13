import * as d3 from "d3";

function initialise() {
  console.log("Hello, world!"); 
  configure();
}

function configure() {
  const ids = [
    {id: "#column1", colour: "fill-blue-400"},
    {id: "#column2", colour: "fill-blue-500"},
    {id: "#column3", colour: "fill-blue-600"},
    {id: "#column4", colour: "fill-blue-700"},
    {id: "#column5", colour: "fill-blue-800"},
    {id: "#column6", colour: "fill-blue-900"},
  ];
  ids.forEach((item) => { 
    const {id, colour} = item;
    let container = d3.select(id);
    for (let i = 0; i < 7; i++) {
      container
        .append("svg")
        .attr("class", `w-200 h-200 ${colour}`)
        .attr("viewBox", "0 0 200 200")
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 0)
        .attr("style", "ease-in-out")
        .append("animate")
        .attr("attributeName", "r")
        .attr("dur", `${(Math.random() * 5) + 2 }s`)
        .attr("repeatCount", "indefinite")
        .attr("values", "150;20;150")
        .attr("begin", `${(Math.random() * 5)}s`)

    }
  })    
}


initialise();



