# pe-components-template 

This template to started developing Vue 2 library component in Vite, Storybook, Tailwind and Sass.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)  
[Volar](https://marketplace.visualstudio.com/items?itemName=zardoy.testPatched1) (and disable Vetur).
[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Type Support for `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup and run

```sh
npm install
npm run storybook
```

### Type-Check, Compile and Minify for Production

```sh
npm build
```
