import "@builder.io/qwik";

declare module "@builder.io/qwik/core" {
  export type ClassSlot = Exclude<HTMLAttributes<HTMLElement>["class"], Signal>;
}
