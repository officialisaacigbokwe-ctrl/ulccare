
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Universal Living Care Center | Quality Care Across Texas",
  description:
    "Universal Living Care Center provides community-based HCS and TxHmL services and licensed assisted living support across Texas.",
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
