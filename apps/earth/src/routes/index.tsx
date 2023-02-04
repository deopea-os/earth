import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AnimatedBlobs } from "components/blob";

export default component$(() => {
  return (
    <>
      <AnimatedBlobs class="fixed inset-0" />
      <div class="border-neutral mt-8 flex items-center justify-center border-y py-16 backdrop-blur-sm md:container md:mx-auto md:rounded md:border">
        <div class="max-w-full text-center">
          <p class="prose-base font-mono">
            We are<span class="">....</span>
          </p>
          <div class="xs:text-3xl whitespace-nowrap font-mono text-3xl uppercase sm:text-4xl md:text-5xl">
            <div class="invisible relative h-0">Devs Of Planet Earth</div>
            <div
              class="group relative flex justify-center hover:normal-case
                  [&>span]:inline-block
                  [&>span]:w-0
                  [&>span]:max-w-fit
                  [&>span]:overflow-hidden
                  [&>span]:opacity-0
                  [&>span]:[transition-property:width,opacity]
                  [&>span]:[transition-timing-function:ease-out]
                  [&>span]:[transition-duration:750ms]
                  [&>span]:[transition-delay:0ms,750ms]
                  [&>span]:hover:w-full
                  [&>span]:hover:opacity-100
                  [&>span]:hover:[transition-delay:0ms]"
            >
              De
              <span>vs&nbsp;</span>O<span>f&nbsp;</span>P
              <span>lanet&nbsp;</span>
              Ea
              <span>rth</span>
            </div>
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
