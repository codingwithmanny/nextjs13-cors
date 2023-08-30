// Config
// ========================================================
import "./globals.css";
import type { Metadata } from "next";

// Metadata Config
// ========================================================
export const metadata: Metadata = {
  title: "Create Next App Cors Configuration",
  description: "NextJS13 Configured with CORS",
};

// Root Layout
// ========================================================
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
