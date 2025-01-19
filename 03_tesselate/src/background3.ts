import * as d3 from 'd3';
import { Point, Dimensions } from './types';


function drawSquare(ctx, topLeft: Point, dimensions: Dimensions, depth: number) {
  const { width, height } = dimensions;
  const { x, y } = topLeft;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x+width, y);
  ctx.lineTo(x+width, y+height);
  ctx.lineTo(x, y+height);
  ctx.lineTo(x, y);
  ctx.closePath();

  ctx.fillStyle = 'hsl('+ depth * 30 + ',70%, 30%)';
  ctx.fill();
  if (depth > 0) {
    const newWidth = (width / 2);
    const newHeight = (height / 2);

    const skip = [Math.random(), Math.random(), Math.random(), Math.random()];
    let applied = 0
    for (let index = 0; index < 4; index++) {
        if (!(applied < 3 && index < 2)) {
          if ((skip[index] < 0.25)) {
            continue;
          }  
        }
        switch (index) {
          case 0:
            drawSquare(ctx, {x: x, y: y}, {width: newWidth, height: newHeight}, depth - 1);  
            applied++;
            break;
          case 1:
            drawSquare(ctx, {x: x + newWidth, y: y}, {width: newWidth, height: newHeight}, depth - 1);
            applied++;
            break;
          case 2:
            drawSquare(ctx, {x: x, y: y + newHeight}, {width: newWidth, height: newHeight}, depth - 1);
            applied++;
            break;
          case 3:
            drawSquare(ctx, {x: x + newWidth, y: y + newHeight}, {width: newWidth, height: newHeight}, depth - 1);
            applied++;
            break;
        }
    }
  }
}


export function background3(dimensions: Dimensions) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  const { width, height } = dimensions;

  drawSquare(ctx, {x:0, y:0}, {width: width*2 , height: height*2 }, 10);

}
