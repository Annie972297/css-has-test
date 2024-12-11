# CSS :has() test
a project to test the postcss plugin "css-has-pseudo"

## Requirements
- `pnpm`
- `node` > 16

## Getting started
1. Install dependencies
```
pnpm install
```
2. run the project
```
pnpm run dev
```
## Build the project
```
pnpm run build
```

## Note
From the website "caniuse" (https://caniuse.com/?search=%3Ahas()) we can find that Firefox doesn't support ":has()" totally before version 121.   
To test the postcss plugin "css-has-pseudo" we can use Firefox 110.0 for example.   

After installing "css-has-pseudo", I do the next two steps following the README of the plugin:
1. import and use it in `App.vue`
2. import and use it in `postcss.config.js`

Then I restart the project. It works in Firefox 110.0. I can see there is a "csstools-has-" attribute on the corresponding element.  

But if I build the project and open the `index.html` in the `dist` folder with vscode plugin "Live Server", it doesn't work.
