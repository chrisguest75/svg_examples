import * as d3 from 'd3';
import { Dimensions } from "./types";

/**
 * 
 */
export function background1(dimensions: Dimensions, sides: number = 6) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  const { width, height } = dimensions;
  const centreX = 0; // Centre of the canvas
  const centreY = 0; // Centre of the canvas
  const radius = 100;   // Radius of the hexagon



  for (let row = 0; row < Math.floor(height / radius) + 1; row++) {
    for (let column = 0; column < Math.floor(width / (radius /2)) + 1; column++) {
      const offset = row % 2 === 0 ? -radius: radius * -1.25;
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = ((Math.PI * 2) / sides) * i; // 60-degree intervals
        const x = offset + (column * radius * 1.5) + ((centreX + radius) * Math.cos(angle));
        const y = (row * radius * 1) + ((centreY + radius) * Math.sin(angle));
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
    
      ctx.fillStyle = 'hsl('+ row * 10 +',70%,30%)';
      //`hsl('${row* 3}', '70%', '30%')`;
      ctx.fill();
        
    }
  }
}
