import * as d3 from 'd3';
import { Point, Dimensions, Polar } from './types';

function drawBoxes(center: Point, color: string, length: number = 600) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  let angle = 0;
  let point:Point = {x: center.x, y: center.y}
  
  for (let index = 0; index < 60; index++) {
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    angle += 90;
    point.x += (length * Math.cos(((Math.PI * 2) / 360) * angle));
    point.y += (length * Math.sin(((Math.PI * 2) / 360) * angle));
    ctx.lineTo(point.x, point.y);
    angle += 90;
    point.x += (length * Math.cos(((Math.PI * 2) / 360) * angle));
    point.y += (length * Math.sin(((Math.PI * 2) / 360) * angle));
    ctx.lineTo(point.x, point.y);
    angle += 90;
    point.x += (length * Math.cos(((Math.PI * 2) / 360) * angle));
    point.y += (length * Math.sin(((Math.PI * 2) / 360) * angle));
    ctx.lineTo(point.x, point.y);    
    angle += 90;
    point.x += (length * Math.cos(((Math.PI * 2) / 360) * angle));
    point.y += (length * Math.sin(((Math.PI * 2) / 360) * angle));
    ctx.lineTo(point.x, point.y);    
    ctx.closePath();

    ctx.fillStyle = 'hsl('+ index * 30 +',40%,' + (100 - index) + '%)';
    ctx.fill();
    ctx.stroke();

    angle += 45;
    length *= 0.90
  }


}


export function background7(dimensions: Dimensions) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  const { width, height } = dimensions;

  drawBoxes({x: (width / 2) + (width / 4), y: height / 2 }, 'hsl(0,40%,10%)', 2000);

}
