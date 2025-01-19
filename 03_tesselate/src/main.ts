import * as d3 from 'd3';

function background1(sides: number = 6) {
  const canvas = d3.select('#background');
  const ctx = canvas.node().getContext('2d');

  const centreX = 40; // Centre of the canvas
  const centreY = 40; // Centre of the canvas
  const radius = 50;   // Radius of the hexagon

  for (let row = 0; row < 25; row++) {
    for (let column = 0; column < 20; column++) {
      const offset = row % 2 === 0 ? 0 : radius * 2.5;
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = ((Math.PI * 2) / sides) * i; // 60-degree intervals
        const x = offset + (column * radius * 3) + ((centreX + radius) * Math.cos(angle));
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


function initialise() {
  background1(5);


}

initialise();
