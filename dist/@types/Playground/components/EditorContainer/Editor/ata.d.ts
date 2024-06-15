import { ATABootstrapConfig } from '@typescript/ata';
type DelegateListener = Required<{
    [k in keyof ATABootstrapConfig['delegate']]: Set<NonNullable<ATABootstrapConfig['delegate'][k]>>;
}>;
type InferSet<T> = T extends Set<infer U> ? U : never;
export declare function createATA(): Promise<{
    acquireType: (code: string) => Promise<void>;
    addListener: <T extends "progress" | "receivedFile" | "errorMessage" | "started" | "finished">(event: T, handler: InferSet<DelegateListener[T]>) => void;
    removeListener: <T_1 extends "progress" | "receivedFile" | "errorMessage" | "started" | "finished">(event: T_1, handler: InferSet<Required<{
        receivedFile?: Set<(code: string, path: string) => void>;
        progress?: Set<(downloaded: number, estimatedTotal: number) => void>;
        errorMessage?: Set<(userFacingMessage: string, error: Error) => void>;
        started?: Set<() => void>;
        finished?: Set<(files: Map<string, string>) => void>;
    }>[T_1]>) => void;
    dispose: () => void;
}>;
export {};
