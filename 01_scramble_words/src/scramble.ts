
class Scramble {
    private _targetWord: string;
    private _currentWord: string;

    public constructor(word: string) {
        this._targetWord = word;
        this._currentWord = this.scrambleWord();
    }

    public scrambleWord() {
        // Scramble the word
        const scrambledWord = this._targetWord.split('').sort(() => 0.5 - Math.random()).join('');

        return scrambledWord;
    }
}