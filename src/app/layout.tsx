import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Make Fun of Image",
  description: "Generated funnylines for Image",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
