import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (path) => `${basePath}${path}`;

export const metadata = {
  title: "Chhorm Ratha",
  description:
    "Portfolio site built with Next.js and Tailwind, pairing bold visuals with a clear, modular layout.",
  icons: {
    icon: [
      { url: asset("/assets/favicon.ico"), rel: "icon", sizes: "any", type: "image/x-icon" },
      { url: asset("/assets/logo.ico"), rel: "icon", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: asset("/assets/favicon.ico"),
    apple: asset("/assets/logo.ico"),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}
