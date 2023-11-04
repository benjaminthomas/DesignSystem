import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderPrimary } from "@/components/layout/header/headers";
import { FooterPrimary } from "@/components/layout/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design System",
  description: "A design system for the web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen flex flex-col bg-gradient-to-t from-primary-500/10 to-primary-100/10">
          <HeaderPrimary />
          {children}
          <FooterPrimary />
        </main>
      </body>
    </html>
  );
}
