"use client";
import { MessagesProvider } from "@/context/messages";
// import { MessagesProvider } from '@/context/messages'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    // <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <MessagesProvider>{children}</MessagesProvider>
      </QueryClientProvider>
    // </ThemeProvider>
  );
};

export default Providers;
