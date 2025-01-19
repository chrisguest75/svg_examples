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

  const selection = d3.select('#algorithm').node().value;
  console.log(selection);

  switch (selection) {
    case 'Background1':
      background1({ width, height }, 5);
      //background1({ width, height }, 6);        
      break;
  
    case 'Background2':
      background2({ width, height }, Math.random() * 360, Math.random() * Math.PI);
      break;

    case 'Background3':
      background3({ width, height });
      break;

    case 'Background4':
      background4({ width, height });
      break;

    default:
      background1({ width, height }, 6);        
      break;
  }
}

function initialise() {
  redraw();
  addEventListener("resize", (event) => redraw());
  d3.select('#algorithm').append('option').attr('value', 'Background1').text('Background1');
  d3.select('#algorithm').append('option').attr('value', 'Background2').text('Background2');
  d3.select('#algorithm').append('option').attr('value', 'Background3').text('Background3');
  d3.select('#algorithm').append('option').attr('value', 'Background4').text('Background4');

  d3.select('#algorithm').on('change', () => redraw());
}

initialise();
