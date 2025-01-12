// sum.test.js
import { expect, test } from 'vitest'
import { Scramble } from './scramble.ts'

test('Word gets scrambled', () => {
    // ARRANGE
    const scramble = new Scramble('hello');
    // ACT
    const scrambled = scramble.currentWord;
    const target = scramble.targetWord;

    // ASSERT
    // console.log(`target: ${target}`);
    // console.log(`scrambled: ${scrambled}`);
    expect(scrambled).not.toStrictEqual('target');
})

test('Move towards target', () => {
    // ARRANGE
    const scramble = new Scramble('hello');
    // ACT
    const scrambled = scramble.currentWord;
    const target = scramble.targetWord;
    
    console.log(`target: ${scramble.targetWord}`);
    console.log(`currentWord: ${scramble.currentWord}`);
    scramble.moveTowardsTarget();

    // ASSERT
    console.log(`target: ${target}`);
    console.log(`scrambled: ${scrambled}`);
    expect(scrambled).not.toStrictEqual('target');
})

test('Reaches target', () => {
    // ARRANGE
    const scramble = new Scramble('hello');
    // ACT
    const scrambled = scramble.currentWord;
    const target = scrambled;

    while (!scramble.isAtTarget()) {
        scramble.moveTowardsTarget();
        console.log(`currentWord: ${scramble.currentWord}`);
    }

    // ASSERT
    console.log(`target: ${target}`);
    console.log(`scrambled: ${scrambled}`);
    expect(scrambled).not.toStrictEqual('target');
})