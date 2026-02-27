declare module "mini-lib" {
  export function sum(a: number, b: number): number;
}

declare global {
  interface Window {
    APP_VERSION: string;
  }
}

export {};
