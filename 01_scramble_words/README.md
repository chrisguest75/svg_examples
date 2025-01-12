# SCRAMBLE WORDS

Create a simple SVG text printer.  

NOTES:

* Not sure why vitest and parcel require different postcss configs.

TODO:

* fix the manual svg copy to public in dist
* load svg and print characters
* css when loaded from hosted is broken
* single step debugging https://parceljs.org/recipes/debugging/

## Install

Install `node_modules`

```sh
just install
```

## Test

Run the unittests

```sh
just test
```

## Run

Host and use live server in the `dist` folder.  

```sh
just host
```

## Resources

* SVG Exercise 12: Blockfont (WIP) [here](https://codepen.io/learosema/pen/JoPGzbr)
* Install Tailwind CSS with Parcel [here](https://tailwindcss.com/docs/guides/parcel)
* Vitest Next Generation Testing Framework [here](https://vitest.dev/)
* @parcel/transformer-typescript-tsc [here](https://www.npmjs.com/package/@parcel/transformer-typescript-tsc)
