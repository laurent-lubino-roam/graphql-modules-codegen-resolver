import { loadFilesSync } from '@graphql-tools/load-files';
import { createModule } from 'graphql-modules';

const typeDefsArray = loadFilesSync(`${__dirname}/schemas/*.schema.gql`, {
  useRequire: true,
});

// Required to serve as the base Query and Mutation definition
export const emptyModule = createModule({
  id: 'empty',
  dirname: __dirname,
  typeDefs: typeDefsArray,
});
