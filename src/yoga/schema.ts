import { createSchema } from "graphql-yoga";
import { resolvers } from "./resolvers.ts";

const typeDefs = await Deno.readTextFile("src/yoga/typeDef.gql");

export const schema = createSchema({
    typeDefs,
    resolvers,
});
