import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { BaseButton } from "components/button";

export const Header = component$(() => {
  const navigate = useNavigate();
  return (
    <header class="p-2 flex">
      <div class="flex-1">
        <a onClick$={() => navigate("/")} href="/">
          deopea
        </a>
      </div>
      <nav class="flex justify-between space-x-2">
        <a>What we do</a>
        <a>About Us</a>
        <a>The Team</a>
      </nav>
      <div class="flex-1 flex justify-end">
        <BaseButton>Contact Us</BaseButton>
      </div>
    </header>
  );
});

export default Header;
