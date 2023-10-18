import { component$, Slot, useSignal } from "@builder.io/qwik";
import { BaseButton, BaseButtonProps } from "./BaseButton";

export interface ButtonProps extends BaseButtonProps {
  variant?: "contained" | "outlined" | "ghost";
}

export const Button = component$<ButtonProps>(
  ({ variant = "contained", ...props }) => {
    const classes = useSignal({
      contained: undefined,
      outlined: "btn-outlined",
      ghost: "btn-ghost",
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
