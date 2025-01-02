/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { createHandler } from "$fresh/server.ts";
import manifest from "./src/fresh.gen.ts";
import config from "./src/fresh.config.ts";

const handler = await createHandler(manifest, config);

Deno.serve({ port: 8000 }, async (req) => {
    return await handler(req);
});
