"use client";
import { GlobalStyle } from "ui/styles/index";
import { useState, type ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Cookies from "js-cookie";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

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
