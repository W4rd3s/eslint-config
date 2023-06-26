# eslint-config

> Personal Eslint config (typescript)

typescript-eslint: v5.60.0

Typescript compilerOptions:

```json
{
  "strict": true,
}
```
or
```json
{
  "noImplicitAny": true,
  "strictNullChecks": true,
}
```


## Installation

Install `@wardes/eslint-config-typescript`:
``` bash
npm i -D eslint @wardes/eslint-config-typescript
```

``` bash
yarn add -D eslint @wardes/eslint-config-typescript
```

``` bash
pnpm add -D eslint @wardes/eslint-config-typescript
```

Add the following to your eslint config:

```json
{
  "extends": [
    "@wardes/eslint-config-typescript"
  ]
}
```