'use client';
import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CacheProvider from '@/app/components/basic/cacheProvider';


const fontFamily = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500','600', '700','800', '900'],
  
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: fontFamily.style.fontFamily,
    button: {
      textTransform: 'none'
    }
  },
});

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
