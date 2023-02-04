import { component$ } from "@builder.io/qwik";
import { Button } from "components/button";
import { Link } from "components/link";
import { LinkButton } from "components/link/LinkButton";

export const Header = component$(() => {
  return (
    <header class="navbar z-10 flex border-b bg-transparent py-4 px-8 font-mono backdrop-blur-sm">
      <div class="navbar-start">
        <Link class="font-mono uppercase" href="/">
          deopea
        </Link>
      </div>
      <nav class="navbar-center hidden md:block">
        <LinkButton class="btn-sm">What we do</LinkButton>
        <LinkButton class="btn-sm">About Us</LinkButton>
        <LinkButton class="btn-sm">The Team</LinkButton>
      </nav>
      <div class="navbar-end">
        <Button variant="outlined" size="sm">
          Contact Us
        </Button>
      </div>
    </header>
  );
});
