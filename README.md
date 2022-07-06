# pe-components-template

This template to started developing Vue 2 library component in Vite, Storybook, Tailwind and Sass.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)<br/>
[Volar](https://marketplace.visualstudio.com/items?itemName=zardoy.testPatched1) (and disable Vetur).<br/>
[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)<br/>
[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)<br/>

.vscode/settings.json

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "css.validate": false,
  "scss.validate": false,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.encoding": "utf8",
  "files.eol": "\n",
  "diffEditor.ignoreTrimWhitespace": false,
  "files.insertFinalNewline": true,
  "[mdx]": {
    "files.insertFinalNewline": false
  }
}
```

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

## Type Support for `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VSCode command palette.
