import { ICustomFiles, IImportMap, ITheme } from './types';
export declare function debounce(fn: (...args: any[]) => void, n?: number): (...args: any[]) => void;
export declare function utoa(data: string): string;
export declare function atou(base64: string): string;
export declare const setPlaygroundTheme: (theme: ITheme) => void;
export declare const getPlaygroundTheme: () => "light" | "dark";
export declare const getCustomActiveFile: (files?: ICustomFiles) => string;
export declare const getMergedCustomFiles: (files?: ICustomFiles, importMap?: IImportMap) => {
    "import-map.json": {
        name: string;
        language: string;
        value: string;
    };
    "main.tsx": {
        name: string;
        language: string;
        value: string;
    };
};
export declare const fileName2Language: (name: string) => "javascript" | "typescript" | "json" | "css";
export declare const generateRandomString: (length?: number) => string;
