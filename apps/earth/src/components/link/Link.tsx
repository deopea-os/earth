import { ClassSlot, component$, Slot } from "@builder.io/qwik";
import {
  Link as QCLink,
  LinkProps as QCLinkProps,
} from "@builder.io/qwik-city";

export interface LinkProps extends QCLinkProps {
  class?: ClassSlot;
}

export const Link = component$<LinkProps>((props) => {
  return (
    <QCLink {...props} class={["link link-hover", props.class]}>
      <Slot />
    </QCLink>
  );
});
