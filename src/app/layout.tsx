import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rayca Precision UI",
  description: "A dashboard for Rayca Precision.",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/14034/14034481.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className + " bg-white dark:bg-mainDash transition-colors duration-500 ease-in-out"}>
    {children}
    </body>
    </html>
  );
}
