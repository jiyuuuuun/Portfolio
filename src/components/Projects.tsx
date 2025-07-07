import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaCode, FaLightbulb, FaBrain, FaInfo, FaChevronLeft, FaChevronRight, FaDesktop } from 'react-icons/fa';
import Image from 'next/image';

type TabType = '소개' | '팀 구성' | '주요 기능' | '담당 역할' | '성능 최적화' | '문제 해결 사례' | '회고' | 'UI';

interface TeamMember {
  name: string;
  role: string;
}

interface Contribution {
  title: string;
  details: string[];
}

interface Reflection {
  title: string;
  details: string[];
}

interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  longDescription: string;
  role: string;
  github: string;
  liveDemo?: string;
  technologies: string[];
  features: string[];
  challenges: string;
  lessons: string;
  team: TeamMember[];
  myContributions: Contribution[];
  reflections: Reflection[];
  thumbnail: string;
}

export default function Projects() {
  const [selectedTabs, setSelectedTabs] = useState<{ [key: string]: TabType }>({});
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});

  // 탭 정의
  const tabs: TabType[] = ['소개', '팀 구성', '주요 기능', '담당 역할', '성능 최적화', '문제 해결 사례', '회고', 'UI'];

  // UI 이미지 정의
  const uiImages = {
    juseyo: [
      { src: "/images/주세요메인화면.png", alt: "Juseyo 메인화면", title: "Juseyo 메인 페이지" },
      { src: "/images/주세요관리자대시보드.png", alt: "Juseyo 관리자대시보드", title: "관리자 대시보드" },
      { src: "/images/주세요비품요청내역.png", alt: "Juseyo 비품요청내역", title: "비품 요청내역 조회" },
      { src: "/images/주세요비품반납내역.png", alt: "Juseyo 비품반납내역", title: "비품 반납내역 조회" },
      { src: "/images/주세요입고내역.png", alt: "Juseyo 입고내역", title: "입고내역 조회" },
      { src: "/images/사용자 맞춤 추천 비품.png", alt: "Juseyo 사용자 맞춤 추천 비품", title: "일반회원 대시보드" },
      { src: "/images/주세요비품요청.png", alt: "Juseyo 비품요청", title: "나의 비품 요청 리스트" },
      { src: "/images/주세요새비품요청.png", alt: "Juseyo 새비품요청", title: "새 비품 요청" },
      { src: "/images/주세요검색.png", alt: "Juseyo 검색", title: "검색 기능" },
      { src: "/images/주세요채팅.png", alt: "Juseyo 채팅", title: "채팅 기능" }
    ],
    hakple: [
      { src: "/images/학플메인페이지.png", alt: "Hakple 메인페이지", title: "Hakple 메인페이지" },
      { src: "/images/학플홈페이지.png", alt: "Hakple 홈페이지", title: "홈페이지" },
      { src: "/images/학플게시판.png", alt: "Hakple 게시판", title: "게시판" },
      { src: "/images/학플게시물.png", alt: "Hakple 게시물", title: "게시물" },
      { src: "/images/학플마이페이지.png", alt: "Hakple 마이페이지", title: "마이페이지" },
      { src: "/images/관리자페이지.png", alt: "Hakple 관리자페이지", title: "관리자페이지" }
    ]
  };

  // 이미지 이동 함수
  const prevImage = (projectId: string) => {
    const images = uiImages[projectId as keyof typeof uiImages] || [];
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) === 0 ? images.length - 1 : (prev[projectId] || 0) - 1
    }));
  };

  const nextImage = (projectId: string) => {
    const images = uiImages[projectId as keyof typeof uiImages] || [];
    setCurrentImageIndexes(prev => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) === images.length - 1 ? 0 : (prev[projectId] || 0) + 1
    }));
  };

  // 키보드 네비게이션 처리
  const handleKeyDown = (e: React.KeyboardEvent, projectId: string) => {
    if (e.key === 'ArrowLeft') {
      prevImage(projectId);
    } else if (e.key === 'ArrowRight') {
      nextImage(projectId);
    }
  };

  const projects = [
    {
      id: "juseyo",
      title: "Juseyo (재고/자산 관리 플랫폼)",
      period: "2025.05.02 ~ 2025.06.02",
      description: "기업별 자산과 재고를 효율적으로 관리하고 요청·승인 프로세스를 자동화하는 재고 관리 플랫폼",
      longDescription: `
        Juseyo는 자산과 재고를 효율적으로 관리하고, 요청 및 승인 프로세스를 자동화하는 재고 관리 플랫폼입니다.
        단순한 자산 등록/조회 기능을 넘어, 부서별 자산 분류, 체계적인 요청 흐름, 실시간 재고 현황 파악까지 하나의 시스템 안에서 통합 관리할 수 있도록 설계되었습니다.
      `,
      role: "PM, 백엔드 개발, 프론트엔드 개발",
      github: "https://github.com/treejh/JUSEYO",
      liveDemo: "https://www.app.jusey0.site/",
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "React", "Next.js", "TypeScript", "Docker", "AWS EC2", "AWS S3", "NGINX", "Terraform", "GitHub Actions", "Redis", "Swagger", "JavaScript"],
      features: [
        "🌟 부서 및 역할(Role) 기반 권한 관리",
        "🔄 요청 → 승인 → 반납 흐름 구조",
        "📊 실시간 상태 추적 및 Excel 입출력",
        "💬 SSE 기반 알림 & STOMP 기반 실시간 채팅",
        "🤖 사용자 맞춤 비품 추천 기능 구현",
        "회원 & 인증 - 역할 기반 회원가입, JWT 인증, 이메일 & 휴대폰 인증",
        "비품 관리 - 비품 등록/수정/삭제/조회, 요청 생성/승인/반려, 출고/입고 상태 추적",
        "실시간 채팅 - 1:1 / 고객센터 / 단체방, STOMP + SockJS + JWT 인증",
        "실시간 알림 - SSE 기반 실시간 알림, 역할 기반 이벤트 알림",
        "검색 및 추천 - 키워드/카테고리 기반 검색, 협업 필터링 알고리즘을 통한 비품 추천"
      ],
      challenges: "대규모 기업의 복잡한 자산 관리 프로세스를 효율적으로 자동화하고, 실시간 데이터 처리와 사용자 맞춤 추천 시스템을 구현하는 과정에서 성능 최적화에 도전했습니다.",
      lessons: "이 프로젝트를 통해 PM 역할을 수행하며 팀 관리와 프로젝트 기획의 중요성을 배웠습니다. 또한 복잡한 비즈니스 로직을 체계적으로 설계하고, 실시간 기능과 AI 추천 시스템을 구현하는 기술을 습득했습니다.",
      team: [
        { name: "황지윤", role: "PM" },
        { name: "장지현", role: "개발 팀장" },
        { name: "홍보람", role: "팀원" },
        { name: "근하람", role: "팀원" },
        { name: "이현석", role: "팀원" }
      ],
      myContributions: [
        {
          title: "비품 통계 및 분석 기능",
          details: [
            "카테고리별 분석: 비품을 카테고리 단위로 분류하여 등록 수, 사용률 등 주요 지표를 시각화할 수 있도록 API 제공",
            "월별 출고량/입고량 집계: 월 단위로 입고/출고 이력을 분석해 통계 데이터를 리턴하는 기능 개발",
            "품목별 사용 빈도 통계: 가장 많이 사용된 비품 순위를 도출하여 관리자 대시보드에 제공",
            "JPQL을 활용한 동적 쿼리 처리 생성",
            "통계 캐싱 최적화를 위한 Redis 사용",
            "관리 대시보드와 연동되는 데이터 API 설계"
          ]
        },
        {
          title: "비품 관리 및 프로세스 흐름",
          details: [
            "비품 구매 CRUD 기능 개발: 비품 구매, 수정, 삭제, 조회 API 구현 (Validation, 예외 처리 포함)",
            "상태 전이를 enum 기반 로직으로 설계하여 유지보수성 향상",
            "입출고 관리: 반납 요청 처리, 입고 내역 관리, 비품 구매 처리",
            "반납 요청 시 재고 상태 변경 및 요청 상태 기록",
            "반납 승인 시 입고 처리되며, 재고 복구 및 입고 이력 저장",
            "구매 시 자동 입고 등록 및 이력 연동 처리"
          ]
        },
        {
          title: "관리자 페이지 생성 기능",
          details: [
            "관리페이지 CRUD: 관리페이지(비품, 사용자, 요청 등)를 위한 API 개발",
            "공공데이터 포털의 사업자등록 상태조회 API를 활용한 사업자 등록번호의 유효성 및 실재 여부 검증",
            "프론트엔드와 협업하여 요청/승인/반려 기능과 통합"
          ]
        },
        {
          title: "사용자 맞춤 비품 추천 기능",
          details: [
            "협업 필터링 알고리즘 기반 추천 기능 구현",
            "유사 사용자의 요청 데이터를 분석하여 비슷한 품목 추천",
            "사용자 요청 이력 기반 유사도 계산 로직 설계",
            "개인화된 추천 리스트 제공 API 개발"
          ]
        },
        {
          title: "프로젝트 전체 디자인 총괄",
          details: [
            "색상, 컴포넌트, 레이아웃 정의",
            "공통 UI 컴포넌트 설계 및 반응형 대응"
          ]
        },
        {
          title: "배포 및 운영 → 관련 기술과 고민은 블로그 글에서 확인 가능합니다",
          details: [
            "IaC 기반 클라우드 인프라 구성",
            "  - Terraform을 활용한 AWS 리소스 자동화",
            "  - IAM, EC2, RDS, S3 등 주요 AWS 서비스 관리",
            "서버 및 네트워크 구성",
            "  - AWS EC2 인스턴스에 Nginx 기반 백엔드 서버 배포",
            "  - VPC, 보안 그룹 등 기본 네트워크 설정 구성",
            "CI/CD 파이프라인 구축",
            "  - GitHub Actions 기반 백엔드 테스트 및 EC2 자동 배포",
            "  - 프론트엔드는 Vercel을 활용한 자동 빌드 및 배포"
          ]
        }
      ],
      reflections: [
        {
          title: "PM 역할의 중요성",
          details: [
            "프로젝트 기획부터 배포까지 전체 과정을 관리하며 팀 리더십의 중요성을 깨달았습니다.",
            "명확한 요구사항 정의와 일정 관리가 프로젝트 성공의 핵심임을 배웠습니다."
          ]
        },
        {
          title: "복잡한 비즈니스 로직 설계",
          details: [
            "기업의 실제 업무 프로세스를 시스템화하는 과정에서 도메인 설계의 중요성을 경험했습니다.",
            "상태 관리와 워크플로우 설계를 통해 확장 가능한 아키텍처의 필요성을 느꼈습니다."
          ]
        },
        {
          title: "AI 추천 시스템 구현",
          details: [
            "협업 필터링 알고리즘을 구현하며 데이터 분석과 머신러닝의 기초를 배웠습니다.",
            "사용자 행동 데이터를 분석하여 개인화된 서비스를 제공하는 방법을 습득했습니다."
          ]
        },
        {
          title: "팀 협업과 커뮤니케이션",
          details: [
            "다양한 역할의 팀원들과 협업하며 효과적인 의사소통의 중요성을 깨달았습니다.",
            "기술적 의사결정과 비즈니스 요구사항의 균형을 맞추는 리더십을 경험했습니다."
          ]
        }
      ],
      thumbnail: "/images/project-thumb.jpg"
    },
    {
      id: "hakple",
      title: "Hakple (학원생 커뮤니티 플랫폼)",
      period: "2025.04.03 ~ 2025.05.01",
      description: "학원 수강생들이 자유롭게 소통하고 정보를 공유할 수 있는 커뮤니티 플랫폼",
      longDescription: `
        Hakple은 학원 수강생들이 자유롭게 소통하고 정보를 공유할 수 있는 커뮤니티 플랫폼입니다.
        회원 관리, 게시판, 공지사항, 댓글, 좋아요, 알림, 캘린더, 관리자 페이지 등 다양한 기능을 제공합니다.
      `,
      role: "백엔드 개발, 프론트엔드 전체 구현",
      github: "https://github.com/golden-dobakhe/hakple",
      liveDemo: "https://www.hakple.site",
      technologies: ["Java", "Spring Boot", "Spring Security", "JavaScript", "React", "Next.js", "TypeScript", "MySQL", "Redis", "AWS S3", "Docker", "Terraform", "AWS EC2", "GitHub Actions", "NGINX", "Swagger"],
      features: [
        "👥 회원 관리",
        "• JWT(JSON Web Token) 기반 인증 시스템으로 보안 강화",
        "• 신규 사용자 회원가입 및 기존 사용자 로그인 기능",
        "• 사용자 휴대폰 번호 변경 및 프로필 이미지 변경 기능",
        "• 개인화된 서비스 이용 지원",
        "",
        "📝 게시판 기능",
        "• 자유 게시판: 사용자들이 자유롭게 소통할 수 있는 공간",
        "• 인기 게시판: 조회수, 좋아요 수 기반 인기글 선별",
        "• 게시글 작성, 수정, 삭제 기능 제공",
        "",
        "📢 공지사항",
        "• 관리자 공지사항 등록 및 관리 기능",
        "• 사용자 공지사항 조회 및 열람 기능",
        "• 효율적인 정보 전달 시스템",
        "",
        "💬 댓글 & 좋아요",
        "• 게시글 댓글 작성, 수정, 삭제 기능",
        "• 게시글 &apos;좋아요&apos; 기능으로 상호작용 활성화",
        "• 커뮤니티 기능 강화",
        "",
        "🔔 실시간 알림",
        "• 댓글 작성 시 실시간 알림",
        "• 게시글 &apos;좋아요&apos; 시 실시간 알림",
        "• 공지사항 등록 시 실시간 알림",
        "• 서비스 참여도 향상",
        "",
        "📅 캘린더",
        "• 개인화된 캘린더 화면 제공",
        "• 일정 추가, 수정, 삭제 기능",
        "• 일정 알림 기능으로 효율적인 일정 관리",
        "• 중요한 일정 놓침 방지",
        "",
        "⚙️ 관리자 기능",
        "• 학원 정보 관리 (등록, 수정)",
        "• 관리자 계정 관리 (추가, 수정, 삭제)",
        "• 전체 회원 목록 조회 및 관리",
        "• 효율적인 시스템 운영 지원"
      ],
      challenges: "여러 사용자의 동시 접속과 실시간 데이터 업데이트를 처리하는 과정에서 성능 최적화에 도전했습니다.",
      lessons: "이 프로젝트를 통해 대규모 데이터를 효율적으로 처리하는 방법과 실시간 기능을 구현하는 기술을 배웠습니다. 또한 팀 협업 과정에서 효과적인 커뮤니케이션의 중요성을 깨달았습니다.",
      team: [
        { name: "박주호", role: "팀장" },
        { name: "김명수", role: "부팀장" },
        { name: "고희은", role: "팀원" },
        { name: "도상원", role: "팀원" },
        { name: "황지윤", role: "팀원" }
      ],
      myContributions: [
        {
          title: "관리자 페이지 전체 개발",
          details: [
            "학원 정보 관리 - 학원 등록/수정/삭제, 학원별 회원 관리 기능 구현",
            "회원 관리 - 회원 검색, 필터링, 상세 정보 조회 및 수정 기능",
            "관리자 권한 관리 - 관리자 등급별 접근 권한 설정 및 권한 부여/회수 기능",
            "복잡한 테이블 UI와 필터링/검색/페이지네이션 기능 구현으로 관리자 편의성 향상"
          ]
        },
        {
          title: "비밀번호 재설정 기능 구현",
          details: [
            "누리고 SMS API를 활용하여 휴대폰 인증 기반 비밀번호 재설정 기능 개발",
            "6자리 랜덤 인증번호 생성 및 5분 유효 시간 설정",
            "Redis를 활용한 인증번호 임시 저장 및 관리",
            "사용자 보안성을 고려한 토큰 검증 및 예외 처리 로직 구성"
          ]
        },
        {
          title: "댓글 기능 개발",
          details: [
            "게시글 댓글 작성, 삭제, 수정, 신고 기능 구현",
            "JWT 기반 토큰 인증을 통해 사용자 권한 검증 및 요청 처리",
            "소프트 딜리트(Soft Delete) 패턴 적용으로 데이터 무결성 유지"
          ]
        },
        {
          title: "캘린더 기능 개발",
          details: [
            "사용자 맞춤 일정 등록/수정/삭제 기능이 포함된 캘린더 페이지 구현",
            "FullCalendar 라이브러리 기반으로 직관적인 UI 개발",
            "일정 알림 및 카테고리별 필터링 기능 추가"
          ]
        },
        {
          title: "프론트엔드 전체 구현 (Next.js 기반)",
          details: [
            "전체 페이지 디자인을 총괄하며 일관된 디자인 시스템 및 스타일링 전략 적용",
            "반응형 레이아웃 설계로 다양한 기기에서의 최적화된 사용자 경험 제공",
            "상태 관리 및 API 연동 구조 설계로 효율적인 데이터 흐름 구현",
          ]
        },
        {
          title: "사용자 마이페이지(내 정보 페이지) 구현",
          details: [
            "사용자 활동 내역 조회 및 관리 기능 개발",
            "비밀번호 변경 기능 구현"
          ]
        },
        {
          title: "접근성 및 성능 최적화",
          details: [
            "다양한 기기에서도 편리하게 사용할 수 있도록 반응형 레이아웃 설계",
            "스켈레톤 UI 적용으로 로딩 상태에서의 사용자 경험 개선",
          ]
        }
      ],
      reflections: [
        {
          title: "협업의 중요성 인식",
          details: [
            "기능 구현보다 소통이 더 중요하다는 것을 느꼈습니다.",
            "이슈 등록, PR 메시지, 커밋 메시지 등의 규칙을 정해두는 것이 중요하다는 것을 깨달았습니다."
          ]
        },
        {
          title: "문서화의 필요성",
          details: [
            "API 명세서, 요구 사항 정의서, ERD, 역할 분담 등을 문서화하고 팀원들과 공유하는 것이 중요하다는 것을 알게 되었습니다.",
            "트러블 슈팅 기록을 통해 같은 문제가 생겼을 때 빠르게 해결할 수 있었습니다."
          ]
        },
        {
          title: "테스트의 중요성",
          details: [
            "더 안정적인 코드를 위해 테스트의 중요성을 느꼈습니다.",
            "다음 프로젝트에는 제대로 된 테스트 도구를 활용하고 싶습니다."
          ]
        },
        {
          title: "패키지 구조의 중요성",
          details: [
            "프로젝트 규모가 커질수록 도메인별로 패키지를 나누는 것이 유지보수에 좋다는 것을 느꼈습니다."
          ]
        },
        {
          title: "새로운 기술 경험",
          details: [
            "카카오 로그인, 누리고 SMS 인증 API, Soft Delete, meAPI, fetchAPI, 블랙리스트 토큰 등 처음 사용해본 기술들을 경험했습니다.",
            "다음에는 처음부터 카카오 로그인 구현이나 배포를 직접 해보고 싶다는 생각이 들었습니다."
          ]
        },
        {
          title: "성능 최적화에 대한 관심",
          details: [
            "DB 요청 속도 줄이기나 AI 기능 추가 등 성능 최적화에 대한 욕심이 생겼습니다."
          ]
        }
      ],
      thumbnail: "/images/project-thumb.jpg"
    },
  ];

  // 현재 선택된 탭 가져오기 (기본값: '소개')
  const getSelectedTab = (projectId: string) => selectedTabs[projectId] || '소개';
  
  // 탭 변경 함수
  const setSelectedTab = (projectId: string, tab: TabType) => {
    setSelectedTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  // 탭 아이콘 매핑
  const tabIcons = {
    '소개': <FaInfo className="mr-2 text-blue-600" />,
    '팀 구성': <FaUsers className="mr-2 text-blue-600" />,
    '주요 기능': <FaCode className="mr-2 text-blue-600" />,
    '담당 역할': <FaLightbulb className="mr-2 text-blue-600" />,
    '성능 최적화': <FaCode className="mr-2 text-green-600" />,
    '문제 해결 사례': <FaCode className="mr-2 text-orange-600" />,
    '회고': <FaBrain className="mr-2 text-blue-600" />,
    'UI': <FaDesktop className="mr-2 text-blue-600" />
  };

  // 선택된 탭에 따른 내용 렌더링
  const renderTabContent = (project: Project) => {
    const selectedTab = getSelectedTab(project.id);
    
    switch (selectedTab) {
      case '소개':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">💡 프로젝트 소개</h3>
              <div className="whitespace-pre-line text-gray-700">
                {project.longDescription}
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={() => setSelectedTab(project.id, 'UI')}
                className="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
              >
                <FaDesktop className="mr-2" /> 
                UI 화면 보기
              </button>
            </div>
          </div>
        );
      case '팀 구성':
        return (
          <div className="bg-gray-50 p-4 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left py-2 px-3 text-gray-700">이름</th>
                  <th className="text-left py-2 px-3 text-gray-700">역할</th>
                </tr>
              </thead>
              <tbody>
                {project.team.map((member: TeamMember, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
                    <td className="py-2 px-3 text-gray-800">{member.name}</td>
                    <td className="py-2 px-3 text-gray-600">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case '주요 기능':
        // Juseyo 프로젝트인 경우에만 상세 기능 표시
        if (project.id === 'juseyo') {
          return (
            <div className="space-y-6">
              {/* 주요 포인트 섹션 */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                  <span className="mr-2">🎯</span>
                  주요 포인트
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">🌟 부서 및 역할(Role) 기반 권한 관리</h4>
                    <p className="text-sm text-gray-600">기업 조직 구조에 맞춘 세분화된 권한 관리 시스템으로 보안성과 효율성을 동시에 확보</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">🔄 요청 → 승인 → 반납 흐름 구조</h4>
                    <p className="text-sm text-gray-600">체계적인 워크플로우로 업무 프로세스 자동화 및 투명성 확보</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">📊 실시간 상태 추적 및 Excel 입출력</h4>
                    <p className="text-sm text-gray-600">실시간 재고 현황 파악과 Excel 연동으로 데이터 관리 효율성 극대화</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">💬 SSE 기반 알림 & STOMP 기반 실시간 채팅</h4>
                    <p className="text-sm text-gray-600">실시간 커뮤니케이션으로 사용자 경험 향상 및 업무 효율성 증대</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-2">
                    <h4 className="font-semibold text-gray-800 mb-2">🤖 사용자 맞춤 비품 추천 기능 구현</h4>
                    <p className="text-sm text-gray-600">협업 필터링 알고리즘을 활용한 개인화된 추천 시스템으로 사용자 만족도 향상</p>
                  </div>
                </div>
              </div>

              {/* 상세 기능 섹션 */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">📋 상세 기능</h3>
                  
                  {/* 회원가입 및 인증 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">👥</span>
                      회원가입 및 인증
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">역할 기반 회원가입 및 JWT 인증 방식을 적용하여 보안성과 관리 편의성을 높였습니다.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>역할(Role)에 따른 회원가입: 관리자(Admin), 일반 사용자(User), 최초 매니저(Initial Manager), 일반 매니저(Manager)</li>
                      <li>JWT 기반 인증 및 권한 관리</li>
                      <li>이메일 인증 / 휴대폰 인증 구현</li>
                      <li>Refresh Token을 Redis에 저장하여, RTR 방식(Refresh Token Rotation)으로 Access Token 재발급</li>
                    </ul>
                  </div>

                  {/* 비품 관리 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">📑</span>
                      비품 관리
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>비품 CRUD: 비품 추가, 수정, 삭제, 조회 기능</li>
                      <li>비품요청 관리: 사용자별 요청 생성, 수정, 승인, 반려</li>
                      <li>대여 처리: 대여 승인 시 출고 상태 변경 및 재고 차감</li>
                      <li>반납 처리: 반납 승인 시 입고 상태 변경 및 재고 복구</li>
                      <li>개별자산 관리: 비품의 인스턴스 단위 등록 및 상태 관리</li>
                      <li>비품추적: 요청 처리 시 이력 기록 및 상태 변경 추적</li>
                      <li>엑셀 내보내기: 데이터 다운로드</li>
                    </ul>
                  </div>

                  {/* 채팅 기능 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">💬</span>
                      채팅 기능
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">STOMP 기반 WebSocket으로 구현한 실시간 채팅 기능입니다. 1:1, 고객센터, 그룹 채팅을 지원하며, JWT 인증과 Redis, RDS를 활용한 구조입니다.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>STOMP + SockJS 기반 실시간 메시지 전송</li>
                      <li>1:1 / 고객센터 / 그룹 채팅방 생성 및 관리</li>
                      <li>JWT 쿠키 인증 기반 세션 사용자 메시지 처리</li>
                      <li>메시지 RDS 저장, 채팅방 상태 Redis 관리</li>
                      <li>미확인 메시지 &apos;NEW&apos; 뱃지 표시</li>
                      <li>중복 채팅방 생성 방지</li>
                    </ul>
                  </div>

                  {/* 알림 기능 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">✨</span>
                      알림 기능
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">권한(Role)에 따라 다양한 이벤트 발생 시 알림을 전송하도록 옵저버 패턴과 스케줄러 기반 로직을 조합하여 구현했습니다.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>역할 기반 알림 시스템: 권한(Role)에 따라 다양한 이벤트에 대해 알림을 전송</li>
                      <li>옵저버 패턴 적용: 비품 요청/반납, 회원 가입 등 실시간 이벤트 발생 시 즉시 알림 발송</li>
                      <li>스케줄러 기반 알림: 지정 반납일 초과, 요청 지연 등 주기적 검사에 따른 알림 발송</li>
                      <li>SSE(Server-Sent Events) 기반 실시간 알림 전달</li>
                    </ul>
                  </div>

                  {/* 검색 및 추천 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">🔍</span>
                      검색 및 추천
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>키워드/카테고리 기반 검색</li>
                      <li>협업 필터링 알고리즘을 통한 비품 추천</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        
        // Hakple 프로젝트인 경우에만 상세 기능 표시
        if (project.id === 'hakple') {
          return (
            <div className="space-y-6">
              {/* 주요 포인트 섹션 */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <span className="mr-2">🎯</span>
                  주요 포인트
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">👥 JWT 기반 회원 관리</h4>
                    <p className="text-sm text-gray-600">보안 강화된 인증 시스템과 개인화된 프로필 관리로 안전하고 편리한 서비스 이용</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">📝 자유/인기 게시판 분리</h4>
                    <p className="text-sm text-gray-600">자유로운 소통 공간과 인기글 선별 시스템으로 활발한 커뮤니티 형성</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">🔔 실시간 알림 시스템</h4>
                    <p className="text-sm text-gray-600">댓글, 좋아요, 공지사항 등 모든 활동에 대한 실시간 알림으로 참여도 향상</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">📅 개인 맞춤 캘린더</h4>
                    <p className="text-sm text-gray-600">일정 관리와 알림 기능을 통한 효율적인 개인 시간 관리 지원</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-2">
                    <h4 className="font-semibold text-gray-800 mb-2">⚙️ 체계적인 관리자 기능</h4>
                    <p className="text-sm text-gray-600">학원 정보 관리, 관리자 계정 관리, 회원 관리 등 효율적인 시스템 운영 지원</p>
                  </div>
                </div>
              </div>

              {/* 상세 기능 섹션 */}
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">📋 상세 기능</h3>
                  
                  {/* 회원 관리 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">👥</span>
                      회원 관리
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">JWT 기반 인증 시스템으로 보안을 강화하고, 개인화된 서비스 이용을 지원합니다.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>JWT(JSON Web Token) 기반 인증 시스템으로 보안 강화</li>
                      <li>신규 사용자 회원가입 및 기존 사용자 로그인 기능</li>
                      <li>사용자 휴대폰 번호 변경 및 프로필 이미지 변경 기능</li>
                      <li>개인화된 서비스 이용 지원</li>
                    </ul>
                  </div>

                  {/* 게시판 기능 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">📝</span>
                      게시판 기능
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>자유 게시판: 사용자들이 자유롭게 소통할 수 있는 공간</li>
                      <li>인기 게시판: 조회수, 좋아요 수 기반 인기글 선별</li>
                      <li>게시글 작성, 수정, 삭제 기능 제공</li>
                    </ul>
                  </div>

                  {/* 공지사항 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">📢</span>
                      공지사항
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>관리자 공지사항 등록 및 관리 기능</li>
                      <li>사용자 공지사항 조회 및 열람 기능</li>
                      <li>효율적인 정보 전달 시스템</li>
                    </ul>
                  </div>

                  {/* 댓글 및 좋아요 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">💬</span>
                      댓글 & 좋아요
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>게시글 댓글 작성, 수정, 삭제 기능</li>
                      <li>게시글 &apos;좋아요&apos; 기능으로 상호작용 활성화</li>
                      <li>커뮤니티 기능 강화</li>
                    </ul>
                  </div>

                  {/* 실시간 알림 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">🔔</span>
                      실시간 알림
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>댓글 작성 시 실시간 알림</li>
                      <li>게시글 &apos;좋아요&apos; 시 실시간 알림</li>
                      <li>공지사항 등록 시 실시간 알림</li>
                      <li>서비스 참여도 향상</li>
                    </ul>
                  </div>

                  {/* 캘린더 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">📅</span>
                      캘린더
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>개인화된 캘린더 화면 제공</li>
                      <li>일정 추가, 수정, 삭제 기능</li>
                      <li>일정 알림 기능으로 효율적인 일정 관리</li>
                      <li>중요한 일정 놓침 방지</li>
                    </ul>
                  </div>

                  {/* 관리자 기능 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">⚙️</span>
                      관리자 기능
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>학원 정보 관리 (등록, 수정)</li>
                      <li>관리자 계정 관리 (추가, 수정, 삭제)</li>
                      <li>전체 회원 목록 조회 및 관리</li>
                      <li>효율적인 시스템 운영 지원</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        
        // 다른 프로젝트는 기존 방식으로 표시
        return (
          <ul className="list-disc pl-5 space-y-2">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        );
      case '담당 역할':
        return (
          <div className="space-y-4">
            {project.myContributions.map((contrib: Contribution, i: number) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-md text-gray-800 mb-2">
                  {contrib.title.includes('블로그 글') ? '배포 및 운영' : contrib.title}
                </h3>
                {contrib.title.includes('블로그 글') && (
                  <p className="text-gray-500 text-sm mb-3">
                    → 관련 기술과 고민은{' '}
                    <a 
                      href="https://jjiyuuuuun.tistory.com/93" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 underline decoration-gray-400 hover:decoration-gray-600"
                    >
                      블로그 글
                    </a>
                    에서 확인 가능합니다
                  </p>
                )}
                <ul className="list-disc pl-5 space-y-1">
                  {contrib.details.map((detail: string, j: number) => (
                    detail.startsWith('  - ')
                      ? <div key={j} className="ml-4 text-sm text-gray-600">- {detail.replace('  - ', '')}</div>
                      : <li key={j} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case '성능 최적화':
        // Juseyo 프로젝트인 경우에만 성능 최적화 내용 표시
        if (project.id === 'juseyo') {
          return (
            <div className="space-y-6">
              {/* 프로젝트 목표 */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">📦 Inventory 분석 성능 최적화 시스템 구축</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">✅ 프로젝트 목표</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>분석 API 응답 속도 개선 및 실시간성 확보</li>
                        <li>DB 부하를 줄이고, 트래픽 증가에 안정적으로 대응</li>
                        <li>관리자/사용자 편의를 위한 Redis 기반 캐시 및 무효화 기능 제공</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">🧠 기술 스택 및 구조</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li><strong>Backend:</strong> Spring Boot, JPA (Hibernate)</li>
                        <li><strong>캐싱:</strong> Redis (Value, ZSet, Hash)</li>
                        <li><strong>보안:</strong> Spring Security (@PreAuthorize)</li>
                        <li><strong>설계 기준:</strong> 사용자별 managementId 기반 Redis 키 분리 및 멀티 테넌시 고려</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redis 캐싱 전략 */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🚀 Redis 캐싱 전략 및 적용 내용</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700 border-b">분석 항목</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700 border-b">Redis 구조</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700 border-b">캐시 키 예시</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700 border-b">TTL 설정</th>
                        <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700 border-b">목적 및 효과</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">카테고리별 비품 수량/종류 요약</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">Value (Map)</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 font-mono">category_summary:managementId</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">30분</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">반복 조회에 즉시 응답, 전체 분류 통계 캐싱</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">품목별 출고 사용 빈도 (랭킹)</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">ZSet</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 font-mono">item_usage_frequency:managementId</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">실시간</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">출고 시 점수 누적, 빠른 정렬 및 랭킹 조회</td>
                      </tr>
                      <tr>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">Outbound 상태별 인스턴스 개수 통계</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">Hash</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700 font-mono">item_instances:outbound_count:managementId</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">10분</td>
                        <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm text-gray-700">상태별 수량 조회 속도 개선, DB Count 제거</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Redis TTL 기반으로 데이터 신선도 유지 및 메모리 효율성 고려</strong>
                  </p>
                </div>
              </div>

              {/* 성능 개선 효과 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📊 성능 개선 효과</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">분석 항목</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">개선 전 방식</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">개선 후 방식</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">정성적 성능 효과</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 text-sm text-gray-700">📦 카테고리 요약 조회</td>
                        <td className="px-4 py-3 text-sm text-gray-700">전체 Item 조회 + Java groupingBy</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Redis Value 구조 사용, DTO Map 캐싱</td>
                        <td className="px-4 py-3 text-sm text-gray-700">응답 속도 264ms → 65ms (DB 의존 제거, 반복 조회 최적화)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 text-sm text-gray-700">📊 품목 사용 빈도 조회 (Top N)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">출고 로그 정렬 쿼리 반복 + ZSet 역직렬화 병목</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Redis ZSet + StringRedisTemplate + DTO 경량화 적용</td>
                        <td className="px-4 py-3 text-sm text-gray-700">응답 시간 277ms → 92ms (약 66% 단축), 실시간 정렬 제공</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">📈 Outbound 상태별 개수 통계</td>
                        <td className="px-4 py-3 text-sm text-gray-700">상태별 DB Count 반복</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Redis Hash에 상태별 개수 저장</td>
                        <td className="px-4 py-3 text-sm text-gray-700">응답 속도 756ms → 86ms, 트래픽 증가 시 DB 부하 완화</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-gray-50 rounded border-l-4 border-gray-400">
                    <p className="text-sm text-gray-700">
                      <strong>🔍 ZSet 조회 시 TypedTuple&lt;Object&gt;로 인해 발생한 역직렬화 병목을</strong><br/>
                      <strong>StringRedisTemplate 기반으로 구조 개선하고 DTO를 경량화하여</strong><br/>
                      <strong>평균 응답 시간 약 66% 개선 (277ms → 92ms)</strong>
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>✅ 실제 Postman 체감 응답 시간도 평균 693ms → 203ms 수준으로 감소</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* 성능 테스트 도구 */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🧪 성능 테스트 도구 및 방법</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">🔹 Postman (외부 체감 속도 측정)</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>첫 요청 시 DB 조회 → 두 번째 요청부터 Redis HIT 비교</li>
                      <li>응답 시간 분석: TTFB, Total, Content Download</li>
                      <li>결과 예시: Redis HIT 전 600~700ms → Redis HIT 후 150~200ms</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">🔹 Spring StopWatch (내부 성능 로깅)</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>각 메서드에 StopWatch 삽입하여 실행 시간 측정</li>
                      <li>Redis HIT / MISS 여부에 따라 로그 출력</li>
                      <li>병목 구간 명확화 → 품목 빈도 조회(ZSet) 성능 튜닝 성공</li>
                    </ul>
                  </div>
                </div>
                
                {/* 코드 예시 */}
                <div className="mt-6 bg-gray-100 p-4 rounded">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">💻 코드 예시</h4>
                  <pre className="text-sm text-gray-700 overflow-x-auto">
{`StopWatch sw = new StopWatch();
sw.start();
// ... 처리
sw.stop();
log.info("응답 시간: {} ms", sw.getTotalTimeMillis());`}
                  </pre>
                </div>
              </div>
              
            </div>
          );
        }
        
        // 다른 프로젝트는 기본 메시지 표시
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">이 프로젝트에는 성능 최적화 내용이 없습니다.</p>
          </div>
        );
      case '문제 해결 사례':
        // Juseyo 프로젝트인 경우에만 문제 해결 사례 표시
        if (project.id === 'juseyo') {
          return (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🛠 문제 해결 사례 – 공공 API 인증키 오류</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">📌 문제 상황</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>공공데이터포털 API 호출 시, Spring Boot에서는 400 Bad Request 발생</li>
                      <li>오류 메시지: &quot;등록되지 않은 인증키입니다&quot;</li>
                      <li>Postman에서는 정상 동작하지만, 서버에서는 인증 실패</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">🔍 원인 분석</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>인코딩된 인증키를 URL 문자열에 직접 붙였더니, Spring이 <strong>다시 인코딩</strong> → 이중 인코딩 발생</li>
                      <li><code>UriComponentsBuilder.queryParam()</code> 사용 시, <code>=</code> 같은 특수문자 오류 발생</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">✅ 해결 방법</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li><code>URLEncoder.encode()</code>로 명시적으로 인코딩 처리</li>
                      <li><code>URI.create()</code>로 완성된 URL 직접 생성하여 RestTemplate에 전달</li>
                    </ul>
                  </div>

                  {/* 코드 예시 */}
                  <div className="bg-gray-100 p-4 rounded">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">💻 해결 코드</h4>
                    <pre className="text-sm text-gray-700 overflow-x-auto">
{`String encodedKey = URLEncoder.encode(serviceKey, StandardCharsets.UTF_8);
URI uri = URI.create(baseUrl + "?serviceKey=" + encodedKey);`}
                    </pre>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">🎯 결과</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>인증 오류 해결, 공공 API 정상 호출 성공</li>
                      <li>Spring의 URI 처리 방식에 대한 이해도 향상</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-gray-50 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>🔗 </strong>
                      <a 
                        href="https://jjiyuuuuun.tistory.com/91" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Tistory 블로그 글 참고 링크
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        
        // 다른 프로젝트는 기본 메시지 표시
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">이 프로젝트에는 문제 해결 사례가 없습니다.</p>
          </div>
        );
      case '회고':
        return (
          <div className="space-y-4">
            {project.reflections.map((reflection: Reflection, i: number) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-md text-gray-800 mb-2">{reflection.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {reflection.details.map((detail: string, j: number) => (
                    <li key={j} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'UI':
        const projectImages = uiImages[project.id as keyof typeof uiImages] || [];
        const currentIndex = currentImageIndexes[project.id] || 0;
        
        if (projectImages.length === 0) {
          return (
            <div className="text-center py-8">
              <p className="text-gray-500">이미지를 불러올 수 없습니다.</p>
            </div>
          );
        }
        
        return (
          <div className="space-y-6">
            <div className="rounded-lg shadow-xl overflow-hidden">
              {/* 이미지 영역 */}
              <div 
                className="relative w-full overflow-hidden bg-white flex items-center justify-center"
                style={{ minHeight: '75vh' }}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, project.id)}
              >
                {/* 좌측 화살표 */}
                <button 
                  onClick={(e) => { e.preventDefault(); prevImage(project.id); }} 
                  className="absolute left-4 z-10 flex items-center justify-center w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full transition-all duration-300"
                  aria-label="이전 이미지"
                >
                  <FaChevronLeft className="text-xl" />
                </button>
                
                {/* 우측 화살표 */}
                <button 
                  onClick={(e) => { e.preventDefault(); nextImage(project.id); }} 
                  className="absolute right-4 z-10 flex items-center justify-center w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full transition-all duration-300"
                  aria-label="다음 이미지"
                >
                  <FaChevronRight className="text-xl" />
                </button>
                
                <div className="relative w-full h-[70vh] flex items-center justify-center">
                  <Image
                    src={projectImages[currentIndex].src}
                    alt={projectImages[currentIndex].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              
              {/* 이미지 제목과 인디케이터 */}
              <div className="bg-white border-t border-gray-100">
                <div className="flex justify-center items-center px-4 py-4">
                  <div className="text-center bg-gray-50 px-6 py-2 rounded-full shadow-sm">
                    <h4 className="text-xl font-semibold text-gray-800">{projectImages[currentIndex].title}</h4>
                    <p className="text-sm text-gray-500">
                      {currentIndex + 1} / {projectImages.length}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center py-2 px-6 space-x-3">
                  {projectImages.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.preventDefault(); setCurrentImageIndexes(prev => ({ ...prev, [project.id]: idx })); }}
                      className={`w-14 h-2 rounded-full transition-colors ${
                        idx === currentIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`${idx + 1}번 이미지로 이동`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

    return (
    <section id="projects" className="py-8">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Projects</h2>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              {/* 프로젝트 헤더 */}
              <div className="p-4 md:p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  {/* 로고 섹션 - 왼쪽 배치 */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto md:mx-0 flex-shrink-0">
                    <Image
                      src={project.id === 'juseyo' ? "/images/주세요이미지.png" : "/images/logo.png"}
                      alt={`${project.title} 로고`}
                      width={192}
                      height={192}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                  
                  {/* 프로젝트 정보 */}
                  <div className="flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <FaCalendarAlt className="mr-2 text-sm" />
                        <span className="text-sm">{project.period}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 mb-3">{project.description}</p>
                      <p className="text-xs md:text-sm text-gray-500">{project.role}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center px-2 md:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors text-sm"
                      >
                        <FaGithub className="mr-1 md:mr-2" /> GitHub
                      </a>
                      {project.id === 'juseyo' && (
                        <>
                          <a 
                            href="https://youtu.be/xFiNAreXASI?si=UQrH5aXcmsNUwpeV" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center px-2 md:px-4 py-2 bg-red-100 hover:bg-red-200 rounded-md text-red-700 transition-colors text-sm"
                          >
                            <FaExternalLinkAlt className="mr-1 md:mr-2" /> 시연 영상
                          </a>
                          <a 
                            href="https://youtu.be/FELFFBucDe0?si=jswpwxR4ln5Zg1qp" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center px-2 md:px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-md text-orange-700 transition-colors text-sm"
                          >
                            <FaExternalLinkAlt className="mr-1 md:mr-2" /> 발표 영상
                          </a>
                        </>
                      )}
                      {project.id === 'hakple' && (
                        <a 
                          href="https://youtu.be/fph2-jl0f7Q?si=U_PJyop3Et76h0rN" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center px-2 md:px-4 py-2 bg-green-100 hover:bg-green-200 rounded-md text-green-700 transition-colors text-sm"
                        >
                          <FaExternalLinkAlt className="mr-1 md:mr-2" /> 발표 영상
                        </a>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      <span className="text-xs md:text-sm font-medium text-gray-700 mr-2 flex items-center">
                        <FaCode className="mr-1" />
                        기술 스택:
                      </span>
                      {project.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-2 md:px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 탭 내비게이션 */}
              <div className="flex border-b border-gray-200 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm whitespace-nowrap font-medium flex items-center ${
                      getSelectedTab(project.id) === tab 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedTab(project.id, tab)}
                  >
                    {tabIcons[tab]}
                    <span className="hidden sm:inline">{tab}</span>
                    <span className="sm:hidden">{tab.length > 4 ? tab.substring(0, 4) : tab}</span>
                  </button>
                ))}
              </div>
              
              {/* 선택된 탭 내용 */}
              <div className="p-4 md:p-6">
                {renderTabContent(project)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 