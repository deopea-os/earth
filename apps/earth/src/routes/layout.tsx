import { component$, Slot } from "@builder.io/qwik";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

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
