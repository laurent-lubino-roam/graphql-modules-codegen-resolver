# graphql-modules-codegen-resolver

## Bug explanations

When creating interfaces and unions, we cannot define `__resolveType` in Module.Resolver.

It is generated, imported, but not added to Resolver definition.

Error can be experienced by playing with this repo (`Product.resolver.ts`). Please install `yarn` and run `yarn dev` .

See image bellow for better description.

![Typescript issue](./doc/typescript-issue.jpg?raw=true 'Typescript issue')

![Types created](./doc/types-well-created.jpg?raw=true 'Types created')

![Types not added](./doc/types-not-added.jpg?raw=true 'But Types not added')

![Typescript wrongly error](./doc/typescript-ignored-working.jpg?raw=true 'Typescript error wrongly because working as expected')
