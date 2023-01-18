import { component$, Slot } from "@builder.io/qwik";
import Footer from "../components/footer/Footer.js";
import Header from "../components/header/Header.js";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
