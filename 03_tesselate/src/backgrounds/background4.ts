import * as d3 from 'd3';
import { Point, Dimensions } from './types';

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


export function background4(dimensions: Dimensions) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  const { width, height } = dimensions;

  const boxSize = 25;
  const maxRows = Math.floor(height / boxSize) + 1
  const maxColumms = Math.floor(width / boxSize) + 1
  //const maxRows = 1
  //const maxColumms = 1

  for (let row = 0; row < maxRows; row++) {
    for (let column = 0; column < maxColumms; column++) {

      //const points = polygon(boxSize + (Math.random() * 10) - 5, 4, ((Math.PI * 2)/ maxRows) * (column + (Math.random() * 10)));
      const points = polygon(boxSize  + (Math.random() * 2), 4, 0);
      const center = { x: column * boxSize * 2, y: row * boxSize * 2};
      drawPolygon(center, points, 'hsl(' + (row * column) + (Math.random() * 5) + ',70%,40%)');
    }
  }
}
