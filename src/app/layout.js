import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import { about, profile } from "./data/portfolio";

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
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  `https://rathachhorm.github.io${basePath || "/portfolio"}`;
const pageTitle = `${profile.name} | ${profile.title}`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: about.description,
  openGraph: {
    title: pageTitle,
    description: about.description,
    type: "website",
    images: [asset(profile.image)],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: about.description,
    images: [asset(profile.image)],
  },
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
