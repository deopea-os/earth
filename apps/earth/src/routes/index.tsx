import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AnimatedBlobs } from "components/blob";

export default component$(() => {
  const expansionClasses = [
    "w-0",
    "max-w-fit",
    "overflow-hidden",
    "[transition:width_1000ms,margin-right_500ms]",
    "group-hover:mr-[0.5em]",
    "group-hover:w-full",
  ];

  return (
    <>
      <AnimatedBlobs class="fixed inset-0" />
      <div class="border-neutral mt-8 flex items-center justify-center border-y py-16 backdrop-blur-sm md:container md:mx-auto md:rounded md:border">
        <div class="max-w-full text-center">
          <p class="prose-base font-mono">
            We are<span class="">....</span>
          </p>
          <div class="whitespace-nowrap font-mono text-3xl uppercase sm:text-4xl md:text-5xl">
            <p class="invisible relative h-0">Devs Of Planet Earth</p>
            <p class="group flex select-none justify-center py-1 hover:normal-case">
              De
              <span class={expansionClasses}>vs</span>O
              <span class={expansionClasses}>f</span>P
              <span class={expansionClasses}>lanet</span>
              Ea<span class={expansionClasses}>rth</span>
            </p>
          </div>
        </div>
      </div>
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
