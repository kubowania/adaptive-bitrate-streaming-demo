import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABS Streaming Demo",
  description: "Adaptive Bitrate Streaming with Next.js + @imagekit/next",
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
