import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "황지윤 포트폴리오",
  description: "고급스럽고 진지한 다크톤 프론트엔드 개발자 포트폴리오",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gradient-to-br from-[#181a20] to-[#23272f] text-[#f4f4f4] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
