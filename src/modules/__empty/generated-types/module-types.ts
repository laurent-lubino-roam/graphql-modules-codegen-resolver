import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace __EmptyModule {
  interface DefinedFields {
    Query: 'empty';
    Mutation: 'empty';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      empty?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      empty?: gm.Middleware[];
    };
  };
}