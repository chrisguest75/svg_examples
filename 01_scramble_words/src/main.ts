import * as d3 from "d3";
import { Scramble } from "./scramble";

const words = [
  "BRUTALIST",
  "Minimalism",
  "GEOMETRY",
  "Structure",
  "Typography",
  "Design",
  "Architecture",
  "Sculpture",
  "Concrete",
  "Form",
  "Function",
  "Perspective",
  "Symmetry",
  "Proportion",
  "Scale",
  "Rhythm",
  "Composition",
  "Evolution",
  "Adaptation"
];
let waitCount = 0;
let wordIndex = 0;

let scramble = new Scramble(words[wordIndex]);

function initialise(filePath: string) {
  d3.xml(filePath).then((data) => {
    d3.select("#svgtext").node().append(data.documentElement);
  });

  setInterval(update, 30);
}

function update() {
  let svgParent = d3.select("#svgtext");
  // get child elements
  let elements = svgParent.node().children[0];
  elements.setAttributeNS(null, "width", "100%");
  elements.setAttributeNS(null, "height", "100%");

  svgParent.selectAll("use").remove();

  scramble.moveTowardsTarget();
  if (scramble.isAtTarget()) {
    if (waitCount < 100) {
      waitCount++;
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      scramble = new Scramble(words[wordIndex]);
      waitCount = 0;
    }
  }
  const scrambled = scramble.currentWord;
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

initialise("public/font.svg");
