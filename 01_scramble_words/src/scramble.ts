
export class Scramble {
    private _targetWord: Array<number>;
    private _currentWord: Array<number>;

    constructor(word: string) {
        this._targetWord = [];
        this._currentWord = [];

        this._targetWord = this.stringToWord(word)
        this._currentWord = this.scrambleWord();
    }

    private stringToWord(word: string) {
        const newWord: Array<number> = []
        word.split('').forEach((letter, index) => {
            newWord.push(letter.charCodeAt(0));
        })
        return newWord
    }

    public setTargetWord(word: string) {
        this._targetWord = this.stringToWord(word)
    }

    public get targetWord() {
        return this._targetWord;
    }

    public get currentWord() {
        return this._currentWord;
    }

    private scrambleWord() {
        const newWord: Array<number> = []

        for (let i = 0; i < this._targetWord.length; i++) {
            newWord.push(Math.floor(Math.random() * 255));
        }
        return newWord
    }

    public moveTowardsTarget() {
        for (let i = 0; i < this._currentWord.length; i++) {
            const delta = Math.floor(Math.random() * 5)
            if (Math.abs(this._currentWord[i] - this._targetWord[i]) > delta) {
                this._currentWord[i] += delta;
            } else {
                this._currentWord[i] = this._targetWord[i]
            }
            this._currentWord[i] = this._currentWord[i] % 256;
        }
    }

    public isAtTarget() {
        for (let i = 0; i < this._currentWord.length; i++) {
            if (this._currentWord[i] !== this._targetWord[i]) {
                return false;
            }
        }
        return true;
    }
}