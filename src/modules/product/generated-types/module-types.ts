import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace ProductModule {
  interface DefinedFields {
    Query: 'getMyProducts' | 'getProductById';
    Car: 'id' | 'type' | 'price' | 'brand' | 'model' | 'odometerKms';
    Shoe: 'id' | 'type' | 'price' | 'brand' | 'model' | 'sizes';
    ProductBase: 'id' | 'type' | 'price';
  };
  
  interface DefinedEnumValues {
    ProductType: 'CAR' | 'SHOE';
  };
  
  interface DefinedInputFields {
    SearchInput: 'text';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Product = Types.Product;
  export type SearchInput = Pick<Types.SearchInput, DefinedInputFields['SearchInput']>;
  export type ProductType = DefinedEnumValues['ProductType'];
  export type ProductBase = Pick<Types.ProductBase, DefinedFields['ProductBase']>;
  export type Car = Pick<Types.Car, DefinedFields['Car']>;
  export type Shoe = Pick<Types.Shoe, DefinedFields['Shoe']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type CarResolvers = Pick<Types.CarResolvers, DefinedFields['Car'] | '__isTypeOf'>;
  export type ShoeResolvers = Pick<Types.ShoeResolvers, DefinedFields['Shoe'] | '__isTypeOf'>;
  export type ProductBaseResolvers = Pick<Types.ProductBaseResolvers, DefinedFields['ProductBase']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Car?: CarResolvers;
    Shoe?: ShoeResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getMyProducts?: gm.Middleware[];
      getProductById?: gm.Middleware[];
    };
    Car?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      type?: gm.Middleware[];
      price?: gm.Middleware[];
      brand?: gm.Middleware[];
      model?: gm.Middleware[];
      odometerKms?: gm.Middleware[];
    };
    Shoe?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      type?: gm.Middleware[];
      price?: gm.Middleware[];
      brand?: gm.Middleware[];
      model?: gm.Middleware[];
      sizes?: gm.Middleware[];
    };
  };
}