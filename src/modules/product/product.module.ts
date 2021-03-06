import { createModule } from 'graphql-modules';
import { loadFilesSync } from '@graphql-tools/load-files';

const typeDefs = loadFilesSync(`${__dirname}/schemas/*.schema.gql`, {
  useRequire: true,
});

const resolvers = loadFilesSync(`${__dirname}/resolvers/*.resolver.ts`, {
  useRequire: true,
});

const providers = loadFilesSync(`${__dirname}/providers/*.provider.ts`, {
  useRequire: true,
});

export const productModule = createModule({
  id: 'product',
  dirname: __dirname,
  typeDefs,
  resolvers,
  providers,
});
