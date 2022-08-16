# stylelint auto fix is not working

In fact, stylelint isn't quite working for the styled-component.

Tried different `customSyntax` options (https://github.com/styled-components/styled-components-website/issues/671). Nothing really works for me.

```bash
# Installing dependencies for the suggested fix
yarn add postcss-jsx postcss-syntax @stylelint/postcss-css-in-js -D
```

```
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-styled-components"
  ],
  "customSyntax": "@stylelint/postcss-css-in-js",
```

```
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-styled-components"
  ],
  "customSyntax": "postcss-jsx",
```
