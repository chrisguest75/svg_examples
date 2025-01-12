
export class Scramble {
    private _targetWord: Array<number>;
    private _currentWord: Array<number>;

    constructor(word: string, ) {
        this._targetWord = [];
        this._currentWord = [];

        word.split('').forEach((letter, index) => {
            this._targetWord.push(letter.charCodeAt(0));
        })

        this._currentWord = this.scrambleWord();
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
            if (this._currentWord[i] < this._targetWord[i]) {
                this._currentWord[i] += 1;
            } else if (this._currentWord[i] > this._targetWord[i]) {
                this._currentWord[i] -= 1;
            }
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