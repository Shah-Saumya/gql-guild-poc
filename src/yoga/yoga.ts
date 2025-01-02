import { createYoga } from "graphql-yoga";
import { schema } from "./schema.ts";

export const yoga = createYoga({
    schema,
    graphqlEndpoint: "/graphql/yoga",
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
