/*
 * WHAT IS THIS FILE?
 *
 * It's the  entry point for the express server when building for production.
 *
 * Learn more about the cloudflare integration here:
 * - https://qwik.builder.io/integrations/deployments/node/
 *
 */
import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import fastifyMiddie from "@fastify/middie";
import fastifyStatic from "@fastify/static";
import qwikCityPlan from "@qwik-city-plan";
import fastify from "fastify";
import { BUILD_DIR, DIST_DIR, PORT } from "./config.js";
import render from "./entry.ssr.js";

// Create the Qwik City express middleware
const { router, notFound } = createQwikCity({ render, qwikCityPlan });

const app = fastify({ logger: true });

await app
  .register(fastifyStatic, {
    root: BUILD_DIR,
    prefix: "/build",
    immutable: true,
    maxAge: "1y",
    decorateReply: false,
  })
  .register(fastifyStatic, {
    root: DIST_DIR,
    redirect: false,
    decorateReply: false,
  })
  .register(fastifyMiddie);

app
  // Use Qwik City's page and endpoint request handler
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .use(router)
  // Use Qwik City's 404 handler
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .use(notFound)
  .listen({ port: parseInt(PORT) }, (error) => {
    if (!error) return;
    app.log.error(error);
    process.exit(1);
  });
