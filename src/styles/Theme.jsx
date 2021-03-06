/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react'
import { memo } from 'react';

const theme = {
  colors: {
    primary: '#1F2A38',
    secondary: '#35465c',
    tertiary: '#F3F4F6',
    quartenary: '#fff',
  },
  background: {
    primary: '#fff',
    secondary: '#F3F4F6'
  },
  sizes: {
    header: 72,
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default memo(Theme);