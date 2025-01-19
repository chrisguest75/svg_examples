import * as d3 from 'd3';
import { background1 } from './background1';
import { background2 } from './background2';
import { background3 } from './background3';
import { background4 } from './background4';

function resize() { 
  const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  d3.select('#background').attr('width', width).attr('height', height);
  return { width, height };
}

function redraw() {
  const { width, height } = resize();
  console.log(width, height);
  //background1({ width, height }, 5);
  //background1({ width, height }, 6);

  //background2({ width, height }, Math.random() * 360, Math.random() * Math.PI);

  //background3({ width, height });
  background4({ width, height });
}

function initialise() {
  redraw();
  addEventListener("resize", (event) => redraw());
}

initialise();
