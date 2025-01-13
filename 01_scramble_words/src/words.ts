import { Scramble } from "./scramble";

const words = [
    "BRUTALIST   ",
    "Minimalism  ",
    "GEOMETRY    ",
    "Structure   ",
    "Typography  ",
    "Design      ",
    "Architecture",
    "Sculpture   ",
    "Concrete    ",
    "FORM        ",
    "Function    ",
    "Perspective ",
    "Symmetry    ",
    "Proportion  ",
    "SCALE       ",
    "Rhythm      ",
    "Composition ",
    "Evolution   ",
    "Adaptation  "
  ];
  
export class Words {
    private _scramble: Scramble;
    private _waitCount = 0;
    private _wordIndex = 0;

    constructor() {
        this._wordIndex = Math.floor(Math.random() * words.length);
        this._scramble = new Scramble(words[this._wordIndex]);
    }
    
    public update() {
        this._scramble.moveTowardsTarget();
        if (this._scramble.isAtTarget()) {
          if (this._waitCount < 100) {
            this._waitCount++;
          } else {
            this._wordIndex = (this._wordIndex + 1) % words.length;
            this._scramble.setTargetWord(words[this._wordIndex]));
            this._waitCount = 0;
          }
        }
        return(this._scramble.currentWord);

}