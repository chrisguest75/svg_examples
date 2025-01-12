
import * as d3 from "d3";
import { Scramble } from './scramble'

const scramble = new Scramble("BRUTALISM")

function initialise(filePath: string) {
    d3.xml(filePath)
    .then(data => {
      d3.select("#svgtext")
        .node().append(data.documentElement)
    });

    setInterval(update, 30)
}

/*
<use href="#char_2" x="0" y="0" style="--fill: hsl(320, 100%, 50%)"></use>
<use href="#char_18" x="95" y="0" style="--fill: hsl(340, 100%, 50%)"></use>
<use href="#char_21" x="190" y="0" style="--fill: hsl(0, 100%, 50%)"></use>
<use href="#char_20" x="285" y="0" style="--fill: hsl(20, 100%, 50%)"></use>
<use href="#char_1" x="380" y="0" style="--fill: hsl(40, 100%, 50%)"></use>
<use href="#char_12" x="475" y="0" style="--fill: hsl(60, 100%, 50%)"></use>
<use href="#char_9" x="570" y="0" style="--fill: hsl(80, 100%, 50%)"></use>
<use href="#char_19" x="665" y="0" style="--fill: hsl(100, 100%, 50%)"></use>
<use href="#char_13" x="760" y="0" style="--fill: hsl(120, 100%, 50%)"></use>
*/


function update() {
    let svgParent = d3.select("#svgtext")
    // get child elements  
    let elements = svgParent.node().children[0]
    elements.setAttributeNS(null, "width", "100%")
    elements.setAttributeNS(null, "height", "100%")

    svgParent.selectAll("use").remove()

    scramble.moveTowardsTarget()
    const scrambled = scramble.currentWord
    for (let i = 0; i < scrambled.length; i++) {
      const char = scrambled[i]
      const hValue = i * 20 % 360
      const letter = document.createElementNS("http://www.w3.org/2000/svg", "use")
      letter.setAttributeNS(null, "href", `#char_${char}`)
      letter.setAttributeNS(null, "x", `${i * 80}`)
      letter.setAttributeNS(null, "y", "0")
      letter.setAttributeNS(null, "style", `--fill: hsl(${hValue}, 100%, 50%)`)
      elements.appendChild(letter) 
    }


}

initialise("public/font.svg")