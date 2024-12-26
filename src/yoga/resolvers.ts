type User = {
    name: string;
};

export const resolvers = [
    {
        Query: {
            hello: () => "Hello World!",
            hello1: () => "Hello new World!",
            hello2: () => "Hello new World!",
        },
        Mutation: {
            createUser: (_, { name }: { name: string }) => `User ${name} created`,
            createUser1: (_, { name }: { name: string }) => `New User ${name} created`,
            createUser2: (_, { name }: { name: string }): User => ({
                name,
            }),
        },
    },
];