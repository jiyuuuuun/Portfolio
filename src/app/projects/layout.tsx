import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '황지윤 포트폴리오 - 프로젝트 상세',
  description: '백엔드 개발자 황지윤의 프로젝트 상세 보기',
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 