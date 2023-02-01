import { ClassSlot, component$, Slot } from "@builder.io/qwik";
import { Link, LinkProps } from "@builder.io/qwik-city";

export interface LinkButtonProps extends LinkProps {
  class?: ClassSlot;
}

export const LinkButton = component$<LinkButtonProps>((props) => {
  return (
    <Link {...props} class={["btn btn-ghost", props.class]}>
      <Slot />
    </Link>
  );
});
