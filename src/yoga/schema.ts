import { createSchema } from "graphql-yoga";
import { resolvers } from "./resolvers.ts";

const typeDefs = await Deno.readTextFile("./typeDef.gql");

export const schema = createSchema({
    typeDefs,
    resolvers,
});
