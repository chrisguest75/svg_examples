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

  const outerPoints2 = polygon(base + 0, 8, startAngle);
  const outerPoints1 = polygon(base + 50, 8, startAngle);

  drawPolygon(center, outerPoints1, 'hsl('+ colour +',50%,50%)');

  let o1 = outerPoints1.length - 1;
  for (let o2 = 0; o2 < outerPoints2.length; o2++) {
    let newPoints = [];
    newPoints.push(outerPoints2[o2]);
    newPoints.push(outerPoints1[o1]);
    o1 = (o1 + 1) % outerPoints1.length;
    newPoints.push(outerPoints1[o1]);
    drawPolygon(center, newPoints, 'hsl('+ colour + 50 +',70%,40%)');

    newPoints = [];
    newPoints.push(outerPoints2[o2]);
    o2 = (o2 + 1) % outerPoints2.length;
    newPoints.push(outerPoints1[o2]);
    newPoints.push(outerPoints1[o1]);
    o1 = (o1 + 1) % outerPoints1.length;
    drawPolygon(center, newPoints, 'hsl('+ colour +',70%,30%)');

    newPoints = [];
    newPoints.push(outerPoints2[o2]);
    o2 = (o2 + 1) % outerPoints2.length;
    newPoints.push(outerPoints1[o2]);
    newPoints.push(outerPoints1[o1]);
    o1 = (o1 + 1) % outerPoints1.length;
    drawPolygon(center, newPoints, 'hsl('+ colour +',70%,50%)');

  }
}

export function background6(dimensions: Dimensions, baseColour: number, baseAngle: number = 0) {
  const center = {x: dimensions.width / 2, y: dimensions.height / 2}
  drawRadial(center, 1500, 60 + baseColour, baseAngle);
  drawRadial(center, 1400, 60 + baseColour, baseAngle);
  drawRadial(center, 1300, 60 + baseColour, baseAngle);
  drawRadial(center, 1200, 60 + baseColour, baseAngle);
  drawRadial(center, 1100, 60 + baseColour, baseAngle);
  drawRadial(center, 1000, 60 + baseColour, baseAngle);
  drawRadial(center, 900, 60 + baseColour, baseAngle);
  drawRadial(center, 800, 60 + baseColour, baseAngle);
  drawRadial(center, 700, 60 + baseColour, baseAngle);
  drawRadial(center, 600, 60 + baseColour, baseAngle);
  drawRadial(center, 500, 60 + baseColour, baseAngle);
  drawRadial(center, 400, 50 + baseColour, baseAngle);
  drawRadial(center, 300, 40 + baseColour, baseAngle);
  drawRadial(center, 200, 30 + baseColour, baseAngle);
  drawRadial(center, 100, 20 + baseColour, baseAngle);
  drawRadial(center, 0, 10 + baseColour, baseAngle);
}
