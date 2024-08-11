import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PropsWithChildren } from "react";
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';
import { CartProvider } from "@/contexts/CartContext";

const chillax = localFont({
  src: '../../public/fonts/Chillax-Variable.ttf',
  variable: '--font-chillax'
});

const archivo = localFont({
  src: '../../public/fonts/Archivo-Variable.ttf',
  variable: '--font-archivo'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: "Ballamas",
  description: "Shop website",
};

export default function RootLayout({
  children,
}: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className={`${chillax.variable} ${archivo.variable} ${jetbrainsMono.variable}`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}