import { ClassSlot, component$, HTMLAttributes } from "@builder.io/qwik/core";
import { Blob } from "./Blob";

export interface AnimatedBlobs extends HTMLAttributes<HTMLDivElement> {
  class?: ClassSlot;
}

export const AnimatedBlobs = component$<AnimatedBlobs>((props) => {
  return (
    <div {...props} class={["overflow-hidden", props.class]}>
      <div class="relative h-full w-full">
        <Blob
          color="primary"
          class="animate-blob absolute -z-10 w-[500px] opacity-50"
        />
        <Blob
          color="secondary"
          class="animate-blob2 absolute -z-10 w-[500px] opacity-50"
        />
      </div>
    </div>
  );
});
