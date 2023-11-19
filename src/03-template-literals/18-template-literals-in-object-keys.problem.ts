import { Equal, Expect } from "../helpers/type-utils";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = {
  [K in TemplateLiteralKey]: string
};

// Or, even easier

type ObjectOfKeys2 = Record<TemplateLiteralKey, string>

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >,
];

type tests2 = [
  Expect<
    Equal<
      ObjectOfKeys2,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >,
];
