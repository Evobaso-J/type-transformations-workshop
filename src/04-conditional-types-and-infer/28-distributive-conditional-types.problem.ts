import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type ExtendsAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana = ExtendsAppleOrBanana<Fruit>;

// The solution here is not really important: what really matters is that
// unions behave differenty when used BEFORE AN EXTEND CLAUSE and BEFORE AN EXTEND CLAUSE ONLY
// So the type of T will be used distributively: the TS compiler is gonna check
// - "apple" against "apple" | "banana" -> true
// - "banana" against "apple" | "banana" -> true
// - "orange" against "apple" | "banana" -> false

// and that's why the type AppleOrBanana is initially "never"

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
