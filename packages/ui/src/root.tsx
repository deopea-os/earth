import { component$, useStyles$ } from "@builder.io/qwik/core";
import { BaseButton } from "./button";
import globalStyles from "./global.css?inline";

export default component$(() => {
  useStyles$(globalStyles);
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <BaseButton>Button</BaseButton>
      </body>
    </>
  );
});
