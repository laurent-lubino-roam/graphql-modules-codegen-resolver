import 'graphql-import-node';

import { createApplication } from 'graphql-modules';

import { emptyModule } from './__empty/empty.module';
import { productModule } from './product/product.module';

export const application = createApplication({
  modules: [emptyModule, productModule],
});
