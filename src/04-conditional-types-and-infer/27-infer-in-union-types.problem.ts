import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends {
  [key: string]: () => infer ObjectReturnType;
}
  ? ObjectReturnType
  : T extends () => infer FunctionReturnType
  ? FunctionReturnType
  : never;

// This is ok, but could be done better!

type GetParserResult2<T> = T extends
  | { [key: string]: () => infer ReturnType }
  | (() => infer ReturnType)
  ? ReturnType
  : never;

// Remember: you can use unions in extend clauses! But be reminded that in this case,
// for the type to work, the name of the inferred type have to be the same for all of the
// members of the union! Try changing it and see what happens

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];

type tests2 = [
  Expect<Equal<GetParserResult2<typeof parser1>, number>>,
  Expect<Equal<GetParserResult2<typeof parser2>, string>>,
  Expect<Equal<GetParserResult2<typeof parser3>, boolean>>
];
