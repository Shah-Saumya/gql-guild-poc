type User = {
    name: string;
};

export const resolvers = [
    {
        Query: {
            hello: () => "Hello World!",
        },
    },
];
