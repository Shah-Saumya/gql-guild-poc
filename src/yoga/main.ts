import { createYoga } from "graphql-yoga";
import { schema } from "./schema.ts";

const yoga = createYoga({
    schema,
    context: {
        token: "my-secret-token",
    },
    graphiql: {
        defaultQuery: `
query {
    hello
}
`,
    },
});

Deno.serve({
    port: 4000,
}, async (req) => {
    const pathname = new URL(req.url).pathname;
    switch (pathname) {
        case "/graphql":
            return await yoga(req);
        default:
            return new Response("Not Found", { status: 404 });
    }
});
