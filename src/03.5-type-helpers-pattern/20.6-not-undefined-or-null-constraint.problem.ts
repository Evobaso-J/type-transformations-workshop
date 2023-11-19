export type Maybe<T extends {}> = T | null | undefined;

// This works because TS does a structural comparison between types to see if those types actually match
// And everything (strings, numbers, booleans, etc.) are objects. Everything but null and undefined values!


type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];
