import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James & Summer's Wedding",
  description: "Join us as we celebrate our special day - September 15th, 2025",
  keywords: ["wedding", "James", "Summer", "Johnson", "Smith", "San Francisco"],
  openGraph: {
    title: "James & Summer's Wedding",
    description: "Join us as we celebrate our special day - September 15th, 2025",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
