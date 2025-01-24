/// <reference types="vite/client" />
declare module 'next-themes' {
    export const ThemeProvider: React.FC;
    export const useTheme: () => {
      theme: string;
      setTheme: (theme: string) => void;
    };
  }