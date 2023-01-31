import { ClassSlot, component$, HTMLAttributes, Slot } from "@builder.io/qwik";

export interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  class?: ClassSlot;
}

export const BaseButton = component$<BaseButtonProps>((props) => {
  return (
    <button {...props} class={["py-2 px-3", props.class]}>
      <span>
        <Slot />
      </span>
    </button>
  );
});

export default BaseButton;
