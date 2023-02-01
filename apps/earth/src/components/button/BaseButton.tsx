import {
  ClassSlot,
  component$,
  HTMLAttributes,
  Slot,
  useSignal,
} from "@builder.io/qwik";

export interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  class?: ClassSlot;
  color?: "primary" | "secondary" | "accent";
  size?: "xs" | "sm" | "md" | "lg";
}

export const BaseButton = component$<BaseButtonProps>(
  ({ color = "primary", size = "md", ...props }) => {
    const classes = useSignal({
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",

      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    });

    return (
      <button
        {...props}
        class={["btn", classes.value[color], classes.value[size], props.class]}
      >
        <Slot />
      </button>
    );
  },
);

export default BaseButton;
