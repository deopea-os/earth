import { component$, Slot, useSignal } from "@builder.io/qwik/core";
import { BaseButton, BaseButtonProps } from "./BaseButton";

export interface IconButtonProps extends BaseButtonProps {
  variant?: "circle" | "square";
}

export const IconButton = component$<IconButtonProps>(
  ({ variant = "circle", ...props }) => {
    const classes = useSignal({
      circle: "btn-circle",
      square: "btn-square",
    });

    return (
      <BaseButton
        {...props}
        class={["btn", classes.value[variant], props.class]}
      >
        <Slot />
      </BaseButton>
    );
  },
);
