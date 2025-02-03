# TESSELATION

A playground for tesselation.  

NOTES:

* You have to point to the html file in you `tailwind.config.js`  
* You can create a debug style using @apply to add borders to everything.  

## Prereqs

```sh
code --install-extension bradlc.vscode-tailwindcss
```

## Install

```sh
nvm use
#or
just nix

just install

just host

# build and watch styles
npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch
```

## Browse

```sh
just host
```

## Resources

