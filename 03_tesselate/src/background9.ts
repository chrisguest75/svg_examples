import * as d3 from 'd3';
import { Point, Dimensions } from './types';

function drawBox(ctx, topLeft: Point, color1: string, color2: string, size: number = 600) {
  ctx.beginPath();
  ctx.moveTo(topLeft.x, topLeft.y);
  ctx.lineTo(topLeft.x + size, topLeft.y);
  ctx.lineTo(topLeft.x + size, topLeft.y + size);
  ctx.lineTo(topLeft.x, topLeft.y + size );    
  ctx.closePath();
  ctx.fillStyle = color1;
  ctx.stroke();
  ctx.fill();

  if (Math.random() > 0.5) {
    ctx.beginPath();
    ctx.arc(topLeft.x, topLeft.y, size / 2, 0, Math.PI / 2);
    ctx.strokeStyle = color2;
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.arc(topLeft.x, topLeft.y, size / 2, Math.PI, Math.PI + Math.PI / 2);
    ctx.strokeStyle = color2;
    ctx.lineWidth = 8;
    ctx.stroke();  
    ctx.closePath();
  } else {
    ctx.beginPath();
    ctx.arc(topLeft.x + size, topLeft.y, size / 2, Math.PI / 2, Math.PI);
    ctx.strokeStyle = color2;
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.arc(topLeft.x, topLeft.y + size, size / 2, Math.PI + Math.PI / 2, Math.PI * 2);
    ctx.strokeStyle = color2;
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.closePath();
   }
}

export function background9(dimensions: Dimensions) {
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
      drawBox(ctx, topLeft, color1, color2, boxSize);
    }
  }
}
