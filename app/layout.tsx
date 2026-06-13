import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/components/site/ModalProvider";

export const metadata: Metadata = {
  title: "K-Study Match — 한국 유학, 막연하게 준비하지 마세요",
  description:
    "외국인 유학생을 위한 한국 대학 비교·추천·상담 플랫폼. 등록금·장학금·기숙사·생활비를 한눈에 비교하고 내 조건에 맞는 한국 대학을 찾아보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        {/* Pretendard (variable, dynamic-subset). 프로덕션에서는 셀프호스팅 권장 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full antialiased">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
