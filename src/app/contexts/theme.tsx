'use client';
import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IContext {}

interface IProvider {
  children: React.ReactNode;
}

const Context = React.createContext<IContext>({});

const Provider: React.FC<IProvider> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  const value = React.useMemo(() => ({}), []);

  return (
    <Context.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};

export type { IContext };
export { Context, Provider };
