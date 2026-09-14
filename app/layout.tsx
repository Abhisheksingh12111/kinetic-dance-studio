import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KINETIC — Dance Studio Mumbai",
  description: "Hip hop, contemporary, jazz funk and Bollywood dance classes in Mumbai. Book your first class free.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
