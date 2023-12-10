"use client";

import { GlobalStyle } from "ui/styles/index";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface ProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        {children}
      </QueryClientProvider>
    </>
  );
};

export default Provider;
