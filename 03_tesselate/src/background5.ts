import * as d3 from 'd3';
import { Point, Dimensions, Polar } from './types';

function polygon(radius: number, sides: number = 4, startAngle: number = 0): Array<Point> {
  const points = [];

  for (let i = 0; i < sides; i++) {
    const angle = (((Math.PI * 2) / sides) * i) + startAngle; // 60-degree intervals
    const x = (radius * Math.cos(angle));
    const y = (radius * Math.sin(angle));
    points.push({x, y});
  }

  return points
}




function drawPolygon(centre: Point,  points: Array<Point>, color: string) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  const centreX = 0; // Centre of the canvas
  const centreY = 0; // Centre of the canvas
  const radius = 100;   // Radius of the hexagon

  ctx.beginPath();
  for (let i = 0; i < points.length; i++) {
    const x = centre.x + points[i].x + Math.random() * 4 - 2;
    const y = centre.y + points[i].y + Math.random() * 4 - 2;
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();
}

function mode1(dimensions: Dimensions) {
  const { width, height } = dimensions;

  let scale = 600
  let angle = (Math.PI * 2 / 360) * 180
  while (scale > 1) {
    const points = polygon(scale, 3, angle);
    const center = { x: width / 2, y: height / 2 };
    drawPolygon(center, points, 'hsl(' + scale + ',70%,40%)');
    scale *= 0.877
    angle += (Math.PI * 2 / 360) * 5
  }
}



function drawTriangles(center: Point, color: string, length: number = 600) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  let angle = 0;
  let point:Point = {x: center.x, y: center.y}
  
  for (let index = 0; index < 40; index++) {
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    point.x += (length * Math.cos(((Math.PI * 2) / 360) * angle));
    point.y += (length * Math.sin(((Math.PI * 2) / 360) * angle));
    angle += 90;
    point.x += (length * Math.cos(((Math.PI * 2) / 360) * angle));
    point.y += (length * Math.sin(((Math.PI * 2) / 360) * angle));
    ctx.lineTo(point.x, point.y);
    angle += 90;
    point.x += (length * Math.cos(((Math.PI * 2) / 360) * angle));
    point.y += (length * Math.sin(((Math.PI * 2) / 360) * angle));
    ctx.lineTo(point.x, point.y);    
    ctx.closePath();

    ctx.fillStyle = 'hsl('+ index * 30 +',40%,20%)';
    ctx.fill();
    ctx.stroke();

    length *= 0.90
  }


}


export function background5(dimensions: Dimensions) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  const { width, height } = dimensions;

  //mode1(dimensions);
  drawTriangles({x: width / 2, y: height / 2 - height/2}, 'hsl(0,40%,10%)', height);

}
