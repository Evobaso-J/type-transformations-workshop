import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type ClickEvent = Extract<Event, Event & { type: 'click'}> // WRONG! 
// Actually, it works, but you just need { type: 'click' } for it to work
// The reason is that Extract looks if any of the types in the union extends the second type argument, so { type: 'click' } is enough

type ClickEvent2 = Extract<Event, {type: 'click'}>

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
