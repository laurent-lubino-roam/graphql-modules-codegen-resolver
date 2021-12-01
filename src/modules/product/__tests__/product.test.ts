import { gql, testkit } from 'graphql-modules';
import { application } from '../../application';
import {  productModule } from '../product.module';

describe('ProductModule', () => {
  it('should be define', () => {
    const app = testkit.testModule(productModule, { replaceExtensions: true });
    expect(app.schema.getType('Product')).toBeDefined();
  });
  it('should return expected data when it exists', async () => {
    const query = gql`
      query GetProductById {
        getProductById(id: "existingId") {
          id
        }
      }
    `;

    const result = await testkit.execute(application, {
      document: query,
    });

    expect(result.errors).not.toBeDefined();
    expect(result.data).toEqual({
      getProductById: {
        id: 'existingId',
      },
    });
  });
  it("should return null when it doesn't exist", async () => {
    const query = gql`
      query GetProductById {
        getProductById(id: "notExistingId") {
          id
        }
      }
    `;

    const result = await testkit.execute(application, {
      document: query,
    });

    expect(result.errors).not.toBeDefined();
    expect(result.data).toEqual({
      getProductById: null,
    });
  });
});
