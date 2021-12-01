import { RESTDataSource } from 'apollo-datasource-rest';
import { Injectable, Scope } from 'graphql-modules';
import { Product, SearchInput } from 'src/generated-types/graphql';

const mockProducts: Array<Product> = [
  {
    id: '1',
    price: 120,
    type: 'SHOE',
    brand: 'Nike',
    model: 'Airmax',
    sizes: [6, 7, 8, 9, 10, 12],
  },
  {
    id: '2',
    price: 5000,
    type: 'CAR',
    brand: 'Ford',
    model: 'Fiesta',
  },
];

@Injectable({
  scope: Scope.Operation,
})
export default class ProductProvider extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = process.env['PRODUCT_API_URL'];
    // need to initialise
    this.initialize({} as any);
  }

  async getProductById(id: string) {
    // Send a GET request to the specified endpoint
    // return this.get(`/${id}`);
    return mockProducts.find((product) => product.id === id);
  }

  async getAllProducts() {
    return mockProducts;
  }
}
