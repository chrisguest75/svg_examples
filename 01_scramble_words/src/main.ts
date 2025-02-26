import * as d3 from "d3";
import { Words } from "./words";
import fontPath from "url:../public/font.svg"

const words = new Words();

function initialise(filePath: string) {
  d3.xml(filePath).then((data) => {
    console.log(`loaded ${filePath}`)
    d3.select("#svgtext").node().appendChild(data.documentElement);
    console.log(`appended ${filePath}`)
    setInterval(update, 30);
  });
}

function update() {
  console.log(`update`)
  let svgParent = d3.select("#svgtext");
  // get child elements
  let elements = svgParent.node().children[0];

  elements.setAttributeNS(null, "width", "100%");
  elements.setAttributeNS(null, "height", "100%");

  svgParent.selectAll("use").remove();

  const scrambled = words.update();

  for (let i = 0; i < scrambled.length; i++) {
    const char = scrambled[i];
    const hValue = (i * 20) % 360;
    const letter = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    letter.setAttributeNS(null, "href", `#char_${char}`);
    letter.setAttributeNS(null, "x", `${i * 80}`);
    letter.setAttributeNS(null, "y", "0");
    letter.setAttributeNS(null, "style", `--fill: hsl(${hValue}, 100%, 50%)`);
    elements.appendChild(letter);
  }
}

//initialise(fontPath);
initialise("public/font.svg");