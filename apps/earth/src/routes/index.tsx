import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1 class="prose prose-h1">Welcome to Deopea!</h1>
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
