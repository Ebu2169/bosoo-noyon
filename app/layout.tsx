import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "БОСОО НОЁН",
  description:
    "Монголын тэргүүлэгч мэргэжлийн шатрын клуб. Шатрын спортоор дамжуулан ирээдүйн стратегичдыг бэлтгэнэ.",
  keywords: "шатар, шатрын клуб, Монгол, Босоо Ноён, chess, Mongolia",
  openGraph: {
    title: "БОСОО НОЁН",
    description: "Монголын тэргүүлэгч мэргэжлийн шатрын клуб.",
    url: "https://bosoo-chess-master.base44.app",
    siteName: "БОСОО НОЁН",
    images: [
      {
        url: "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/c34f28b5f_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
