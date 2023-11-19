import { Equal, Expect } from "../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

type ProgramModeEnumMap = typeof programModeEnumMap
type ProgramModeEnumMapKeys = keyof ProgramModeEnumMap

export type IndividualProgram = Extract<ProgramModeEnumMap[ProgramModeEnumMapKeys], '1on1' | 'selfDirected' | 'planned1on1' | 'plannedSelfDirected'>
// This works, but it's overly complicated. There are 2 much simpler ways:

export type IndividualProgram2 = ProgramModeEnumMap['ONE_ON_ONE' | 'SELF_DIRECTED' | 'PLANNED_ONE_ON_ONE' | 'PLANNED_SELF_DIRECTED']

// Or even

export type IndividualProgram3 = ProgramModeEnumMap[Exclude<ProgramModeEnumMapKeys, 'GROUP' | 'ANNOUNCEMENT'>]

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];

type tests2 = [
  Expect<
    Equal<
      IndividualProgram2,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];

type tests3 = [
  Expect<
    Equal<
      IndividualProgram3,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >,
];
