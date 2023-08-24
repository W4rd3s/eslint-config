# eslint-config

> Personal Eslint config (typescript)

> Prettier friendly !

---
## Installation

Install `@wardes/eslint-config-typescript`:
``` bash
npm i -D eslint typescript @wardes/eslint-config-typescript
```

``` bash
yarn add -D eslint typescript @wardes/eslint-config-typescript
```

``` bash
pnpm add -D eslint typescript @wardes/eslint-config-typescript
```

Add ECMAScript env in your eslint config from [Eslint envrionement config](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments) and extends config:
```json
{
  "env": {
    "es6": true
  },
  "extends": [
    "@wardes/eslint-config-typescript"
  ]
}
```

<br>
Typescript compilerOptions (in tsconfig.json) :

```json
{
  "strict": true,
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
or
```json
{
  "noImplicitAny": true,
  "strictNullChecks": true,
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```