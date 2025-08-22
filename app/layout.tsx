import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../features/providers/components/theme-provider";

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
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
