import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = ProductBase & {
  __typename?: 'Car';
  brand: Scalars['String'];
  id: Scalars['ID'];
  model: Scalars['String'];
  odometerKms?: Maybe<Scalars['Int']>;
  price: Scalars['Float'];
  type: ProductType;
};

export type Mutation = {
  __typename?: 'Mutation';
  empty?: Maybe<Scalars['Boolean']>;
};

export type Product = Car | Shoe;

export type ProductBase = {
  id: Scalars['ID'];
  price: Scalars['Float'];
  type: ProductType;
};

export type ProductType =
  | 'CAR'
  | 'SHOE';

export type Query = {
  __typename?: 'Query';
  empty?: Maybe<Scalars['Boolean']>;
  getMyProducts: Array<Product>;
  getProductById?: Maybe<Product>;
};


export type QueryGetProductByIdArgs = {
  id: Scalars['ID'];
};

export type SearchInput = {
  text?: InputMaybe<Scalars['String']>;
};

export type Shoe = ProductBase & {
  __typename?: 'Shoe';
  brand: Scalars['String'];
  id: Scalars['ID'];
  model: Scalars['String'];
  price: Scalars['Float'];
  sizes: Array<Scalars['Float']>;
  type: ProductType;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Car: ResolverTypeWrapper<Car>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolversTypes['Car'] | ResolversTypes['Shoe'];
  ProductBase: ResolversTypes['Car'] | ResolversTypes['Shoe'];
  ProductType: ProductType;
  Query: ResolverTypeWrapper<{}>;
  SearchInput: SearchInput;
  Shoe: ResolverTypeWrapper<Shoe>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Car: Car;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Product: ResolversParentTypes['Car'] | ResolversParentTypes['Shoe'];
  ProductBase: ResolversParentTypes['Car'] | ResolversParentTypes['Shoe'];
  Query: {};
  SearchInput: SearchInput;
  Shoe: Shoe;
  String: Scalars['String'];
};

export type CarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Car'] = ResolversParentTypes['Car']> = {
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  odometerKms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  empty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  __resolveType: TypeResolveFn<'Car' | 'Shoe', ParentType, ContextType>;
};

export type ProductBaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBase'] = ResolversParentTypes['ProductBase']> = {
  __resolveType: TypeResolveFn<'Car' | 'Shoe', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  empty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  getMyProducts?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  getProductById?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryGetProductByIdArgs, 'id'>>;
};

export type ShoeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shoe'] = ResolversParentTypes['Shoe']> = {
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sizes?: Resolver<Array<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Car?: CarResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductBase?: ProductBaseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Shoe?: ShoeResolvers<ContextType>;
};

