import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kronotitans.com"),
  title: {
    default: "Krono Titans (KTN) | Future of Gaming Cryptocurrency",
    template: "%s | Krono Titans",
  },
  description:
    "Krono Titans (KTN) - Revolutionary gaming cryptocurrency merging secure blockchain technology with immersive gaming innovation. Join the future of decentralized gaming.",
  keywords: [
    "Krono Titans",
    "KTN",
    "gaming cryptocurrency",
    "blockchain gaming",
    "gaming token",
    "crypto gaming",
    "play to earn",
    "gaming blockchain",
    "decentralized gaming",
    "GameFi",
    "gaming metaverse",
    "crypto token",
    "gaming ecosystem",
    "blockchain technology",
    "cryptocurrency investment",
  ],
  authors: [{ name: "Krono Titans Team" }],
  creator: "Krono Titans",
  publisher: "Krono Titans",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kronotitans.com",
    siteName: "Krono Titans",
    title: "Krono Titans (KTN) | Revolutionary Gaming Cryptocurrency",
    description:
      "Join the future of gaming with Krono Titans (KTN). Seamlessly merging blockchain security with immersive gaming experiences.",
    images: [
      {
        url: "/kronotitans.jpeg",
        width: 1200,
        height: 630,
        alt: "Krono Titans - Future of Gaming Cryptocurrency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Krono Titans (KTN) | Future of Gaming Cryptocurrency",
    description:
      "Revolutionary gaming cryptocurrency merging blockchain technology with immersive gaming experiences. Join the future of decentralized gaming.",
    creator: "@KronoTitans",
    images: ["/kronotitans.jpeg"],
  },

  alternates: {
    canonical: "https://kronotitans.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    bitcoin: "", // bitcoin address
    coinbase: "", //coinbase commerce checkout link
    telegram: "https://t.me/KronoTitansHQ",
    discord: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="application-name" content="Krono Titans" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Krono Titans" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
