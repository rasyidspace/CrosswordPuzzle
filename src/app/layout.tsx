import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { LearningProvider } from "@/context/LearningContext";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crossword Puzzle: Peninggalan Sejarah Indonesia | IPAS Kelas V SD",
  description:
    "Media Pembelajaran Interaktif Peninggalan Sejarah Indonesia untuk siswa Kelas 5 SD/MI Kurikulum Merdeka Fase C.",
  keywords: [
    "Peninggalan Sejarah Indonesia",
    "Crossword Puzzle",
    "IPAS Kelas 5",
    "Media Pembelajaran Interaktif",
    "Candi Borobudur",
    "Keraton",
    "Prasasti",
    "Kurikulum Merdeka",
  ],
  authors: [{ name: "Media Pembelajaran Interaktif SD" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FFF8E7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${nunito.variable} antialiased`}>
      <body className="min-h-screen bg-[#FFF8E7] text-[#2D3748] flex justify-center items-center p-0 sm:p-4 selection:bg-amber-200">
        <LearningProvider>{children}</LearningProvider>
      </body>
    </html>
  );
}
