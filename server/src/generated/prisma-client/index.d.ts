// Code generated by Prisma (prisma@1.25.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  beer: (where?: BeerWhereInput) => Promise<boolean>;
  brewery: (where?: BreweryWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  beer: (where: BeerWhereUniqueInput) => BeerPromise;
  beers: (args?: {
    where?: BeerWhereInput;
    orderBy?: BeerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Beer>;
  beersConnection: (args?: {
    where?: BeerWhereInput;
    orderBy?: BeerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => BeerConnectionPromise;
  brewery: (where: BreweryWhereUniqueInput) => BreweryPromise;
  breweries: (args?: {
    where?: BreweryWhereInput;
    orderBy?: BreweryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Brewery>;
  breweriesConnection: (args?: {
    where?: BreweryWhereInput;
    orderBy?: BreweryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => BreweryConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createBeer: (data: BeerCreateInput) => BeerPromise;
  updateBeer: (args: {
    data: BeerUpdateInput;
    where: BeerWhereUniqueInput;
  }) => BeerPromise;
  updateManyBeers: (args: {
    data: BeerUpdateManyMutationInput;
    where?: BeerWhereInput;
  }) => BatchPayloadPromise;
  upsertBeer: (args: {
    where: BeerWhereUniqueInput;
    create: BeerCreateInput;
    update: BeerUpdateInput;
  }) => BeerPromise;
  deleteBeer: (where: BeerWhereUniqueInput) => BeerPromise;
  deleteManyBeers: (where?: BeerWhereInput) => BatchPayloadPromise;
  createBrewery: (data: BreweryCreateInput) => BreweryPromise;
  updateBrewery: (args: {
    data: BreweryUpdateInput;
    where: BreweryWhereUniqueInput;
  }) => BreweryPromise;
  updateManyBreweries: (args: {
    data: BreweryUpdateManyMutationInput;
    where?: BreweryWhereInput;
  }) => BatchPayloadPromise;
  upsertBrewery: (args: {
    where: BreweryWhereUniqueInput;
    create: BreweryCreateInput;
    update: BreweryUpdateInput;
  }) => BreweryPromise;
  deleteBrewery: (where: BreweryWhereUniqueInput) => BreweryPromise;
  deleteManyBreweries: (where?: BreweryWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  beer: (
    where?: BeerSubscriptionWhereInput
  ) => BeerSubscriptionPayloadSubscription;
  brewery: (
    where?: BrewerySubscriptionWhereInput
  ) => BrewerySubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type BeerOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type BreweryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "url_ASC"
  | "url_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface BreweryUpdateOneRequiredWithoutBeersInput {
  create?: BreweryCreateWithoutBeersInput;
  update?: BreweryUpdateWithoutBeersDataInput;
  upsert?: BreweryUpsertWithoutBeersInput;
  connect?: BreweryWhereUniqueInput;
}

export type BeerWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface BeerUpdateManyWithoutBreweryInput {
  create?: BeerCreateWithoutBreweryInput[] | BeerCreateWithoutBreweryInput;
  delete?: BeerWhereUniqueInput[] | BeerWhereUniqueInput;
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput;
  disconnect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput;
  update?:
    | BeerUpdateWithWhereUniqueWithoutBreweryInput[]
    | BeerUpdateWithWhereUniqueWithoutBreweryInput;
  upsert?:
    | BeerUpsertWithWhereUniqueWithoutBreweryInput[]
    | BeerUpsertWithWhereUniqueWithoutBreweryInput;
  deleteMany?: BeerScalarWhereInput[] | BeerScalarWhereInput;
  updateMany?:
    | BeerUpdateManyWithWhereNestedInput[]
    | BeerUpdateManyWithWhereNestedInput;
}

export interface BreweryCreateInput {
  name: String;
  beers?: BeerCreateManyWithoutBreweryInput;
  url: String;
}

export interface BreweryUpdateInput {
  name?: String;
  beers?: BeerUpdateManyWithoutBreweryInput;
  url?: String;
}

export interface BreweryUpsertWithoutBeersInput {
  update: BreweryUpdateWithoutBeersDataInput;
  create: BreweryCreateWithoutBeersInput;
}

export interface BrewerySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: BreweryWhereInput;
  AND?: BrewerySubscriptionWhereInput[] | BrewerySubscriptionWhereInput;
  OR?: BrewerySubscriptionWhereInput[] | BrewerySubscriptionWhereInput;
  NOT?: BrewerySubscriptionWhereInput[] | BrewerySubscriptionWhereInput;
}

export interface BreweryUpdateManyMutationInput {
  name?: String;
  url?: String;
}

export interface BeerCreateInput {
  name: String;
  brewery: BreweryCreateOneWithoutBeersInput;
  description: String;
}

export interface BeerUpdateManyWithWhereNestedInput {
  where: BeerScalarWhereInput;
  data: BeerUpdateManyDataInput;
}

export interface BreweryCreateOneWithoutBeersInput {
  create?: BreweryCreateWithoutBeersInput;
  connect?: BreweryWhereUniqueInput;
}

export interface BeerUpsertWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput;
  update: BeerUpdateWithoutBreweryDataInput;
  create: BeerCreateWithoutBreweryInput;
}

export interface BreweryCreateWithoutBeersInput {
  name: String;
  url: String;
}

export interface BeerUpdateWithoutBreweryDataInput {
  name?: String;
  description?: String;
}

export interface BeerUpdateInput {
  name?: String;
  brewery?: BreweryUpdateOneRequiredWithoutBeersInput;
  description?: String;
}

export interface BreweryWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  beers_every?: BeerWhereInput;
  beers_some?: BeerWhereInput;
  beers_none?: BeerWhereInput;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  AND?: BreweryWhereInput[] | BreweryWhereInput;
  OR?: BreweryWhereInput[] | BreweryWhereInput;
  NOT?: BreweryWhereInput[] | BreweryWhereInput;
}

export interface BeerCreateWithoutBreweryInput {
  name: String;
  description: String;
}

export interface BeerUpdateManyDataInput {
  name?: String;
  description?: String;
}

export interface BeerCreateManyWithoutBreweryInput {
  create?: BeerCreateWithoutBreweryInput[] | BeerCreateWithoutBreweryInput;
  connect?: BeerWhereUniqueInput[] | BeerWhereUniqueInput;
}

export interface BeerUpdateManyMutationInput {
  name?: String;
  description?: String;
}

export interface BeerWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  brewery?: BreweryWhereInput;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: BeerWhereInput[] | BeerWhereInput;
  OR?: BeerWhereInput[] | BeerWhereInput;
  NOT?: BeerWhereInput[] | BeerWhereInput;
}

export interface BreweryUpdateWithoutBeersDataInput {
  name?: String;
  url?: String;
}

export interface BeerScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  AND?: BeerScalarWhereInput[] | BeerScalarWhereInput;
  OR?: BeerScalarWhereInput[] | BeerScalarWhereInput;
  NOT?: BeerScalarWhereInput[] | BeerScalarWhereInput;
}

export interface BeerSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: BeerWhereInput;
  AND?: BeerSubscriptionWhereInput[] | BeerSubscriptionWhereInput;
  OR?: BeerSubscriptionWhereInput[] | BeerSubscriptionWhereInput;
  NOT?: BeerSubscriptionWhereInput[] | BeerSubscriptionWhereInput;
}

export interface BeerUpdateWithWhereUniqueWithoutBreweryInput {
  where: BeerWhereUniqueInput;
  data: BeerUpdateWithoutBreweryDataInput;
}

export type BreweryWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface BreweryPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  url: String;
}

export interface BreweryPreviousValuesPromise
  extends Promise<BreweryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  url: () => Promise<String>;
}

export interface BreweryPreviousValuesSubscription
  extends Promise<AsyncIterator<BreweryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface AggregateBeer {
  count: Int;
}

export interface AggregateBeerPromise
  extends Promise<AggregateBeer>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBeerSubscription
  extends Promise<AsyncIterator<AggregateBeer>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Beer {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  description: String;
}

export interface BeerPromise extends Promise<Beer>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  brewery: <T = BreweryPromise>() => T;
  description: () => Promise<String>;
}

export interface BeerSubscription
  extends Promise<AsyncIterator<Beer>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  brewery: <T = BrewerySubscription>() => T;
  description: () => Promise<AsyncIterator<String>>;
}

export interface BeerEdge {
  node: Beer;
  cursor: String;
}

export interface BeerEdgePromise extends Promise<BeerEdge>, Fragmentable {
  node: <T = BeerPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BeerEdgeSubscription
  extends Promise<AsyncIterator<BeerEdge>>,
    Fragmentable {
  node: <T = BeerSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Brewery {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  url: String;
}

export interface BreweryPromise extends Promise<Brewery>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  beers: <T = FragmentableArray<Beer>>(args?: {
    where?: BeerWhereInput;
    orderBy?: BeerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  url: () => Promise<String>;
}

export interface BrewerySubscription
  extends Promise<AsyncIterator<Brewery>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  beers: <T = Promise<AsyncIterator<BeerSubscription>>>(args?: {
    where?: BeerWhereInput;
    orderBy?: BeerOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  url: () => Promise<AsyncIterator<String>>;
}

export interface AggregateBrewery {
  count: Int;
}

export interface AggregateBreweryPromise
  extends Promise<AggregateBrewery>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBrewerySubscription
  extends Promise<AsyncIterator<AggregateBrewery>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BeerSubscriptionPayload {
  mutation: MutationType;
  node: Beer;
  updatedFields: String[];
  previousValues: BeerPreviousValues;
}

export interface BeerSubscriptionPayloadPromise
  extends Promise<BeerSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = BeerPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BeerPreviousValuesPromise>() => T;
}

export interface BeerSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BeerSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BeerSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BeerPreviousValuesSubscription>() => T;
}

export interface BeerConnection {
  pageInfo: PageInfo;
  edges: BeerEdge[];
}

export interface BeerConnectionPromise
  extends Promise<BeerConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<BeerEdge>>() => T;
  aggregate: <T = AggregateBeerPromise>() => T;
}

export interface BeerConnectionSubscription
  extends Promise<AsyncIterator<BeerConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BeerEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBeerSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface BreweryEdge {
  node: Brewery;
  cursor: String;
}

export interface BreweryEdgePromise extends Promise<BreweryEdge>, Fragmentable {
  node: <T = BreweryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BreweryEdgeSubscription
  extends Promise<AsyncIterator<BreweryEdge>>,
    Fragmentable {
  node: <T = BrewerySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BrewerySubscriptionPayload {
  mutation: MutationType;
  node: Brewery;
  updatedFields: String[];
  previousValues: BreweryPreviousValues;
}

export interface BrewerySubscriptionPayloadPromise
  extends Promise<BrewerySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = BreweryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BreweryPreviousValuesPromise>() => T;
}

export interface BrewerySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BrewerySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BrewerySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BreweryPreviousValuesSubscription>() => T;
}

export interface BeerPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  description: String;
}

export interface BeerPreviousValuesPromise
  extends Promise<BeerPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface BeerPreviousValuesSubscription
  extends Promise<AsyncIterator<BeerPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface BreweryConnection {
  pageInfo: PageInfo;
  edges: BreweryEdge[];
}

export interface BreweryConnectionPromise
  extends Promise<BreweryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<BreweryEdge>>() => T;
  aggregate: <T = AggregateBreweryPromise>() => T;
}

export interface BreweryConnectionSubscription
  extends Promise<AsyncIterator<BreweryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BreweryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBrewerySubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Beer",
    embedded: false
  },
  {
    name: "Brewery",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
