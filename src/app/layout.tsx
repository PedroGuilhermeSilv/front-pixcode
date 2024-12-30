import { NavBar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "PixCode",
  description: "Geração de QR Code para Pix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
