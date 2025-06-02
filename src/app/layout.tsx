import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tawashi | Technical Writer & QA Engineer",
  description:
    "テクニカルライター・QAエンジニアとして6年の経験を持つtawashiのポートフォリオサイト。ドキュメント作成、プロジェクト管理、データ分析の実績をご紹介。",
  keywords: [
    "テクニカルライター", 
    "QA", 
    "データ分析", 
    "プロジェクト管理", 
    "technical writer", 
    "quality assurance",
    "documentation",
    "portfolio"
  ],
  authors: [{ name: "tawashi" }],
  openGraph: {
    title: "tawashi | Technical Writer & QA Engineer",
    description: "テクニカルライター・QAエンジニアとして6年の経験を持つtawashiのポートフォリオ",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "tawashi | Technical Writer & QA Engineer",
    description: "テクニカルライター・QAエンジニアとして6年の経験を持つtawashiのポートフォリオ",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
