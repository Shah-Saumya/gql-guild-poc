import { Manifest } from "$fresh/server.ts";

// ROUTES
import * as Yoga from "./routes/graphql/yoga.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";

const manifest = {
    routes: {
        "./routes/graphql/yoga.tsx": Yoga,
        "./routes/_app.tsx": $_app,
        "./routes/_404.tsx": $_404,
    },
    islands: {},
    baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
