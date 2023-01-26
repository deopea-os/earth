import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { sprinkles } from "css/sprinkles.css";

export default component$(() => {
  return (
    <div>
      <h1 class={sprinkles({})}>Welcome to Deopea!</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Deopea",
  meta: [
    {
      name: "description",
      content: "Home of Deopea",
    },
  ],
};
