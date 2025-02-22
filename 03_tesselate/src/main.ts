import * as d3 from 'd3';
import { backgrounds } from './backgrounds';

function resize() { 
  const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  d3.select('#background').attr('width', width).attr('height', height);
  return { width, height };
}

function redraw() {
  const { width, height } = resize();
  console.log(width, height);

  const selection = d3.select('#algorithm').node().value;
  console.log(selection);

  const background = backgrounds.find((background) => background.name === selection);
  if (background) {
    background?.draw({ width, height });
  } else {
    backgrounds.find((background) => background.default)?.draw({ width, height });
  }
}

function initialise() {
  redraw();
  addEventListener("resize", (event) => redraw());

  const dropdown = d3.select('#algorithm')
  backgrounds.map((background) => {
    dropdown.append('option').attr('value', background.name).text(background.name);
    if (background.default) {
      dropdown.node().value = background.name;
    }
  });


  dropdown.on('change', () => redraw());
}

initialise();
