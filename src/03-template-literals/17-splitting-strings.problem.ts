// Might come in handy!
import { S } from "ts-toolbelt";
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

import { Equal, Expect } from "../helpers/type-utils";

// TODO: explore and try to implement string.split on your own

type Path = "Users/John/Documents/notes.txt";

type SplitPath = S.Split<Path, '/'>;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
