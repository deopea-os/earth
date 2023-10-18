import { component$ } from "@builder.io/qwik";
import { Link } from "components/link";

export const Footer = component$(() => {
  return (
    <footer class="prose prose-sm py-4 px-8 font-mono">
      <Link href="/">Made with ♡ by Deopea</Link>
    </footer>
  );
});
