import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pracpros.com"),
  title: {
    default: "PracPros — AI-Native Dental Growth Platform",
    template: "%s · PracPros",
  },
  description:
    "PRACPROS is a dental marketing agency specializing in AI-native patient acquisition systems, Google Premier Partner advertising, conversion-optimized websites, local SEO, and speed-to-lead automation.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/brand/pracpros-logo.png", type: "image/png" },
    ],
    apple: "/brand/pracpros-logo.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "PracPros — AI-Native Dental Growth Platform",
    description:
      "Google Premier Partner. AI-native patient acquisition for dental practices serious about growth.",
    type: "website",
    url: "https://www.pracpros.com",
    siteName: "PracPros",
    images: [{ url: "/brand/pracpros-logo.png", width: 357, height: 135, alt: "PracPros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PracPros — AI-Native Dental Growth Platform",
    description:
      "Google Premier Partner. AI-native patient acquisition for dental practices serious about growth.",
    images: ["/brand/pracpros-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
