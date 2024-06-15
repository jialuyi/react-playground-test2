import { Monaco } from '@monaco-editor/react';
export declare const useEditor: () => {
    autoLoadExtraLib: (editor: any, monaco: any, defaultValue: string, onWatch: any) => Promise<{
        acquireType: (code: string) => Promise<void>;
        addListener: <T extends "progress" | "receivedFile" | "errorMessage" | "started" | "finished">(event: T, handler: Required<{
            receivedFile?: Set<(code: string, path: string) => void>;
            progress?: Set<(downloaded: number, estimatedTotal: number) => void>;
            errorMessage?: Set<(userFacingMessage: string, error: Error) => void>;
            started?: Set<() => void>;
            finished?: Set<(files: Map<string, string>) => void>;
        }>[T] extends infer T_1 ? T_1 extends Required<{
            receivedFile?: Set<(code: string, path: string) => void>;
            progress?: Set<(downloaded: number, estimatedTotal: number) => void>;
            errorMessage?: Set<(userFacingMessage: string, error: Error) => void>;
            started?: Set<() => void>;
            finished?: Set<(files: Map<string, string>) => void>;
        }>[T] ? T_1 extends Set<infer U> ? U : never : never : never) => void;
        removeListener: <T_2 extends "progress" | "receivedFile" | "errorMessage" | "started" | "finished">(event: T_2, handler: Required<{
            receivedFile?: Set<(code: string, path: string) => void>;
            progress?: Set<(downloaded: number, estimatedTotal: number) => void>;
            errorMessage?: Set<(userFacingMessage: string, error: Error) => void>;
            started?: Set<() => void>;
            finished?: Set<(files: Map<string, string>) => void>;
        }>[T_2] extends infer T_3 ? T_3 extends Required<{
            receivedFile?: Set<(code: string, path: string) => void>;
            progress?: Set<(downloaded: number, estimatedTotal: number) => void>;
            errorMessage?: Set<(userFacingMessage: string, error: Error) => void>;
            started?: Set<() => void>;
            finished?: Set<(files: Map<string, string>) => void>;
        }>[T_2] ? T_3 extends Set<infer U> ? U : never : never : never) => void;
        dispose: () => void;
    }>;
    doOpenEditor: (editor: any, input: any) => void;
    loadJsxSyntaxHighlight: (editor: any, monaco: Monaco) => {
        highlighter: (code?: string) => void;
        dispose: () => void;
    };
};
