import {
  ClassSlot,
  component$,
  HTMLAttributes,
  useSignal,
} from "@builder.io/qwik";

export interface BlobProps extends HTMLAttributes<HTMLElement> {
  class?: ClassSlot;
  color?: "primary" | "secondary" | "accent";
}

export const Blob = component$<BlobProps>(({ color = "primary", ...props }) => {
  const classes = useSignal({
    primary: "fill-primary",
    secondary: "fill-secondary",
    accent: "fill-accent",
  });

  return (
    <svg
      {...props}
      class={[classes.value[color], props.class]}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="inherit"
        d="M63.4,-17.6C73.1,9.4,65.8,45,44.7,60C23.7,74.9,-11.2,69.2,-29.2,53.1C-47.2,37,-48.2,10.5,-40.5,-13.7C-32.8,-38,-16.4,-60,5.2,-61.7C26.8,-63.3,53.6,-44.7,63.4,-17.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
});
