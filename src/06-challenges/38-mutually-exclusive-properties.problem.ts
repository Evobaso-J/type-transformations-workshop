import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  id: string;
  email: string;
  username: string;
}

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes?
 */
type MutuallyExclusive<T extends object> = {
  [K in keyof T]: {
    [InnerKey in K]: T[K];
  };
}[keyof T];

// This is good and it works, but, as usual, overly complicated

type MutuallyExclusive2<T extends object> = {
  [K in keyof T]: Record<K, T[K]>;
}[keyof T];

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type ExclusiveAttributes2 = MutuallyExclusive2<Attributes>;

type tests = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
          id: string;
        }
      | {
          email: string;
        }
      | {
          username: string;
        }
    >
  >
];
type tests2 = [
  Expect<
    Equal<
      ExclusiveAttributes2,
      | {
          id: string;
        }
      | {
          email: string;
        }
      | {
          username: string;
        }
    >
  >
];
