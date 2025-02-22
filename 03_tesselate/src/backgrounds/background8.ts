import * as d3 from 'd3';
import { Point, Dimensions } from './types';

function drawBox(topLeft: Point, color1: string, color2: string, size: number = 600) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');
  
  ctx.beginPath();
  ctx.moveTo(topLeft.x, topLeft.y);
  ctx.lineTo(topLeft.x + size, topLeft.y);
  ctx.lineTo(topLeft.x + size, topLeft.y + size);
  ctx.lineTo(topLeft.x, topLeft.y + size );    
  ctx.closePath();
  ctx.fillStyle = color1;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(topLeft.x, topLeft.y);
  ctx.arc(topLeft.x, topLeft.y, size, Math.PI * 1.5, Math.PI * 3.0);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.fillStyle = color2;
  ctx.fill();
  ctx.stroke();
}


export function background8(dimensions: Dimensions) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  const { width, height } = dimensions;

  const boxSize = 100;
  const maxRows = Math.floor(height / boxSize) + 1
  const maxColumms = Math.floor(width / boxSize) + 1

  for (let row = 0; row < maxRows; row++) {
    for (let column = 0; column < maxColumms; column++) {

      const topLeft = { x: column * boxSize, y: row * boxSize};
      const color1 = 'hsl(' + (column + 30) + (Math.random() * 5) + ',70%,40%)'
      const color2 = 'hsl(' + (row + 100) + (Math.random() * 10) + ',70%,30%)'
      drawBox(topLeft, color1, color2, boxSize);
    }
  }
}
