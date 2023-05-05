import Chat from "@/components/Chat";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookbuddy",
  description: "Book Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
