import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { Head } from "components/head";
import globalStyles from "./global.css?inline";

export default component$(() => {
  useStyles$(globalStyles);
  return (
    <QwikCityProvider>
      <Head />
      <body lang="en" class="flex h-full flex-col">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
