import * as d3 from 'd3';
import { Point, Dimensions } from './types';

function polygon(radius: number, sides: number = 6, startAngle: number = 0): Array<Point> {
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
    const x = centre.x + points[i].x;
    const y = centre.y + points[i].y;
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

function drawRadial(center: Point, base: number, colour: number, startAngle: number) {

  const outerPoints2 = polygon(base + 200, 6, startAngle);
  const outerPoints1 = polygon(base + 100, 12, startAngle);
  const innerPoints = polygon(base, 6, startAngle);

  
  let o1 = outerPoints1.length - 1;
  for (let o2 = 0; o2 < outerPoints2.length; o2++) {
    let newPoints = [];
    newPoints.push(outerPoints2[o2]);
    newPoints.push(outerPoints1[o1]);
    o1 = (o1 + 1) % outerPoints1.length;
    newPoints.push(outerPoints1[o1]);
    drawPolygon(center, newPoints, 'hsl('+ colour +',70%,30%)');

    newPoints[0] = innerPoints[o2];
    drawPolygon(center, newPoints, 'hsl('+ colour +',70%,30%)');

    newPoints = [];
    newPoints.push(outerPoints2[o2]);
    newPoints.push(outerPoints1[o1]);
    o1 = (o1 + 1) % outerPoints1.length;
    newPoints.push(outerPoints1[o1]);
    drawPolygon(center, newPoints, 'hsl('+ colour  +',70%,30%)');

    newPoints[0] = innerPoints[o2];
    drawPolygon(center, newPoints, 'hsl('+ colour  +',70%,30%)');

  }
}

export function background2(dimensions: Dimensions, baseColour: number, baseAngle: number = 0) {
  const center = {x: dimensions.width / 2, y: dimensions.height / 2}
  drawRadial(center, 0, 10 + baseColour, baseAngle);
  drawRadial(center, 100, 20 + baseColour, baseAngle + (Math.PI / 6));
  drawRadial(center, 200, 30 + baseColour, baseAngle);
  drawRadial(center, 300, 40 + baseColour, baseAngle + (Math.PI / 6));
  drawRadial(center, 400, 50 + baseColour, baseAngle);
  drawRadial(center, 500, 60 + baseColour, baseAngle + (Math.PI / 6));
  drawRadial(center, 600, 70 + baseColour, baseAngle);
  drawRadial(center, 700, 80 + baseColour, baseAngle + (Math.PI / 6));
  drawRadial(center, 800, 90 + baseColour, baseAngle);
  drawRadial(center, 900, 100 + baseColour, baseAngle + (Math.PI / 6));
  drawRadial(center, 1000, 110 + baseColour, baseAngle);
  drawRadial(center, 1100, 120 + baseColour, baseAngle + (Math.PI / 6));
}
