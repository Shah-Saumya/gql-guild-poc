//#region Types
type KvOperation<T> = (kv: Deno.Kv) => Promise<T>;
//#endregion

//#region Database Operations
/**
 * Executes a KV operation with automatic resource management
 * @param operation Function that performs the KV operation
 * @returns Result of the operation
 */
export const withKv = async <T>(operation: KvOperation<T>): Promise<T> => {
    const kv = await Deno.openKv("DenoKV.kv");
    try {
        const result = await operation(kv);
        return result;
    } finally {
        kv.close();
    }
};
//#endregion
