// sum.test.js
import { expect, test } from 'vitest'
import { Scramble } from './scramble.ts'

test('', () => {
    // ARRANGE
    const scramble = new Scramble('hello');
    // ACT
    const scrambled = scramble.scrambleWord();

    // ASSERT
    console.log(scrambled);
    expect(scrambled).not.toBe('hello');
})