import { background1 } from './background1';
import { background2 } from './background2';
import { background3 } from './background3';
import { background4 } from './background4';
import { background5 } from './background5';
import { background6 } from './background6';
import { background7 } from './background7';
import { background8 } from './background8';
import { background9 } from './background9';
import { Dimensions } from './types';


export type Background = {
    name: string
    draw: (dimensions: Dimensions) => void
    default?: boolean
}

function scales(dimensions: Dimensions) {
    background1(dimensions, 5);
}

function portal(dimensions: Dimensions) {
    background2(dimensions, Math.random() * 360, Math.random() * Math.PI);
}

function fractal(dimensions: Dimensions) {
    background3(dimensions);
}

function jellytots(dimensions: Dimensions) {
    background4(dimensions);
}

function triangle(dimensions: Dimensions) {
    background5(dimensions);
}

function lighthouse(dimensions: Dimensions) {
    background6(dimensions, Math.random() * 360, Math.random() * Math.PI);
}

function cubistspiral(dimensions: Dimensions) {
    background7(dimensions);
}

function feathers(dimensions: Dimensions) {
    background8(dimensions);
}

function brokentruchet(dimensions: Dimensions) {
    background9(dimensions);
}

export const backgrounds: Background[] = [
    {
        name: 'Scales',
        draw: scales,
    },
    {
        name: 'Portal',
        draw: portal,
    },
    {
        name: 'Fractal',
        draw: fractal,
    },
    {
        name: 'Jellytots',
        draw: jellytots,
    },
    {
        name: 'Triangle',
        draw: triangle,
    },
    {
        name: 'Lighthouse',
        draw: lighthouse,
        default: true,
    },
    {
        name: 'Cubist Spiral',
        draw: cubistspiral,
    },
    {
        name: 'Feathers',
        draw: feathers,
    },
    {
        name: 'Broken Truchet',
        draw: brokentruchet,
    },
]
    