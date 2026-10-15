import type { DotnetHostBuilder } from './dotnet.js';
import './components/define.js';
/** Owns a running browser application. Repeated disposal is harmless. */
export interface MauiApplicationHandle {
    dispose(): void;
}
/** Start a MAUI app with the builder exported by its matching NativeAOT LLVM dotnet.js. */
export declare function startMaui(dotnet: DotnetHostBuilder, mainAssembly: string, element?: HTMLElement | null): Promise<MauiApplicationHandle>;
