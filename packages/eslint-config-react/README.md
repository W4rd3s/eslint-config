# eslint-config

> Personal Eslint config (react + typescript)

> Prettier friendly !


---
## Installation

Install `@wardes/eslint-config-react`:
``` bash
npm i -D eslint @wardes/eslint-config-react
```

``` bash
yarn add -D eslint @wardes/eslint-config-react
```

``` bash
pnpm add -D eslint @wardes/eslint-config-react
```

Add the following to your eslint config:

```json
{
  "extends": [
    "@wardes/eslint-config-react"
  ]
}
```
or for nextjs:

```json
{
  "extends": [
    "@wardes/eslint-config-react/next"
  ]
}
```
And add ECMAScript env in your eslint config from [Eslint envrionement config](https://eslint.org/docs/latest/use/configure/language-options#specifying-environments)

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