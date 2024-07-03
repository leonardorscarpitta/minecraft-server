import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./reset.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minecraft Server",
  description: "Web Page for a Minecraft Server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
