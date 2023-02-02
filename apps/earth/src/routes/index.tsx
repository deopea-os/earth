import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Blob } from "components/blob";
import styles from "./index.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <div class="relative h-full max-h-64 overflow-hidden md:max-h-96">
        <Blob
          color="primary"
          class="absolute -z-10 w-[500px] animate-[blob_25s_ease-in-out_infinite_alternate] opacity-50"
        />
        <Blob
          color="secondary"
          class="absolute -z-10 w-[500px] animate-[blob2_23s_ease-in-out_infinite_alternate] opacity-50"
        />
      </div>
      <div class="mx-8 h-full md:container md:mx-auto md:px-8"></div>
    </>
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
