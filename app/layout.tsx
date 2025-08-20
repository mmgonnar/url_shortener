import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shortly",
  description: "Shortening service and link management web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
