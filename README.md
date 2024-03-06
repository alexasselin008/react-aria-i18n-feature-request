# React-Aria i18n feature request

## Problem

Currently, React-aria does not export the type LocalizedStringFormatter from the package. This makes it difficult to use the useLocalizedStringFormatter hook in a TypeScript project.

## Repro steps

- install dependencies with `yarn`
- build the project with `yarn build`
- Notice that the build fails with the following error:
```
src/intl/src/useLocalizedString.tsx(11,17): error TS2742: The inferred type of 'useLocalizedString' cannot be named without a reference to 'react-aria/node_modules/@internationalized/string'. This is likely not portable. A type annotation is necessary.
```

## Suggested modifications

1- In @react-aria/i18n, export the type LocalizedStringFormatter from the package.

2- In react-aria, re-export the type LocalizedStringFormatter from @react-aria/i18n.