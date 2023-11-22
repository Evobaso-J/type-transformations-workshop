import { Split } from "ts-toolbelt/out/String/Split";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";
type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type SplitPathValues<T extends string> = Split<T, "/">[number];

type ExtractPathParams<T extends string> = {
  [K in SplitPathValues<T> as K extends `:${infer StringParam}`
    ? StringParam
    : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
