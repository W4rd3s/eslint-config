# eslint-config

> Personal Eslint config (typescript)

> Prettier friendly !

---
<b><ins>Rules are based on:</ins></b>

eslint: v8.35.0

typescript-eslint: v5.60.0

eslint-config-prettier: v8.8.0

---
<b><ins>Typescript compilerOptions:</ins></b>

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
npm i -D eslint typescript @wardes/eslint-config-typescript
```

``` bash
yarn add -D eslint typescript @wardes/eslint-config-typescript
```

``` bash
pnpm add -D eslint typescript @wardes/eslint-config-typescript
```

Add the following to your eslint config:

```json
{
  "extends": [
    "@wardes/eslint-config-typescript"
  ]
}
```