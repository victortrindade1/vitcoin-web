"use client";

import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@/lib/registry";

import theme from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
