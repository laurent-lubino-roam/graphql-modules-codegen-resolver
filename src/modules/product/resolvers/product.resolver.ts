import { Product } from 'src/generated-types/graphql';
import { ProductModule } from '../generated-types/module-types';
import ProductProvider from '../providers/product.provider';

export const resolvers: ProductModule.Resolvers = {
  Query: {
    getProductById: async (root, { id }, { injector }) => {
      return (await injector.get(ProductProvider).getProductById(id)) ?? null;
    },
    getMyProducts: async (root, _args, { injector }) => {
      return (await injector.get(ProductProvider).getAllProducts()) ?? null;
    },
  },
  //@ts-ignore
  Product: {
    __resolveType: (product: Product) => {
      if (product.type === 'CAR') {
        return 'Car';
      }
      if (product.type === 'SHOE') {
        return 'Shoe';
      }
      return null;
    },
  },
};
