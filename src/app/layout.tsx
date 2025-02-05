import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cashly",
  description:
    "Cashly es una plataforma de confianza para ahorrar tu dinero. Hacemos registros claros y mantenemos tus finanzas seguras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
