import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop.Co",
  description:
    "Browse through our diverse range of meticulously crafted garments....",
  openGraph: {
    title: "Shop.Co",
    description:
      "Browse through our diverse range of meticulously crafted garments....",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        data-new-gr-c-s-check-loaded="14.1226.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
