import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaCode, FaLightbulb, FaBrain, FaInfo, FaChevronLeft, FaChevronRight, FaDesktop } from 'react-icons/fa';
import Image from 'next/image';

type TabType = '소개' | '팀 구성' | '주요 기능' | '담당 역할' | '회고' | 'UI';

export default function Projects() {
  const [selectedTabs, setSelectedTabs] = useState<{ [key: string]: TabType }>({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 탭 정의
  const tabs: TabType[] = ['소개', '팀 구성', '주요 기능', '담당 역할', '회고', 'UI'];

  // UI 이미지 정의
  const uiImages = [
    { src: "/images/학플메인페이지.png", alt: "Hakple 메인페이지", title: "메인페이지" },
    { src: "/images/학플홈페이지.png", alt: "Hakple 홈페이지", title: "홈페이지" },
    { src: "/images/학플게시판.png", alt: "Hakple 게시판", title: "게시판" },
    { src: "/images/학플게시물.png", alt: "Hakple 게시물", title: "게시물" },
    { src: "/images/학플마이페이지.png", alt: "Hakple 마이페이지", title: "마이페이지" },
    { src: "/images/관리자페이지.png" ,alt: "Hakple 관리자페이지", title: "관리자페이지" }
  ];

  // 이미지 이동 함수
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? uiImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === uiImages.length - 1 ? 0 : prev + 1));
  };

  // 키보드 네비게이션 처리
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
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
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "React", "Next.js", "TypeScript", "Docker", "AWS EC2", "AWS S3", "NGINX", "Terraform", "GitHub Actions", "Redis", "Swagger"],
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
          title: "실시간 기능 구현",
          details: [
            "SSE와 STOMP를 활용한 실시간 알림 및 채팅 기능 구현으로 사용자 경험 향상의 중요성을 배웠습니다.",
            "실시간 데이터 처리 시 성능 최적화와 동시성 처리의 어려움을 경험했습니다."
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
      technologies: ["Java ", "Spring Boot", "JavaScript", "React", "Next.js", "MySQL", "Redis", "AWS S3", "Docker", "Terraform", "AWS EC2", "GitHub Actions"],
      features: [
        "회원 관리 - 회원가입 / 로그인 (JWT 인증), 프로필 수정 (휴대폰 번호, 프로필 이미지 변경)",
        "게시판 - 자유 게시판 / 인기 게시판 분리, 글 작성, 수정, 삭제",
        "공지사항 - 관리자 공지 등록, 사용자 공지 열람",
        "댓글 / 좋아요 - 게시글 댓글 작성 및 삭제, 게시글 좋아요 기능",
        "알림 - 댓글, 좋아요, 공지사항에 대한 실시간 알림",
        "캘린더 - 사용자 맞춤 캘린더 제공, 일정 추가, 삭제, 수정 기능, 일정 알림 기능",
        "관리자 - 학원 관리, 관리자 관리, 회원 목록 조회"
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
    '회고': <FaBrain className="mr-2 text-blue-600" />,
    'UI': <FaDesktop className="mr-2 text-blue-600" />
  };

  // 선택된 탭에 따른 내용 렌더링
  const renderTabContent = (project: any) => {
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
                {project.team.map((member: any, i: number) => (
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
                      <li>미확인 메시지 'NEW' 뱃지 표시</li>
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

                  {/* 검색 기능 */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="mr-2">🔍</span>
                      검색 기능
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>비품 검색: 관리페이지 등록 비품 검색 기능</li>
                      <li>추천 검색어: 관리페이지 등록 비품 추천 검색어 기능</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        
        // Hakple 프로젝트는 기존 방식으로 표시
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
            {project.myContributions.map((contrib: any, i: number) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-md text-gray-800 mb-2">{contrib.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {contrib.details.map((detail: string, j: number) => (
                    <li key={j} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case '회고':
        return (
          <div className="space-y-4">
            {project.reflections.map((reflection: any, i: number) => (
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
        return (
          <div className="space-y-6">
            <div className="rounded-lg shadow-xl overflow-hidden">
              {/* 이미지 영역 */}
              <div 
                className="relative w-full overflow-hidden bg-white flex items-center justify-center"
                style={{ minHeight: '75vh' }}
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
                {/* 좌측 화살표 */}
                <button 
                  onClick={prevImage} 
                  className="absolute left-4 z-10 flex items-center justify-center w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full transition-all duration-300"
                  aria-label="이전 이미지"
                >
                  <FaChevronLeft className="text-xl" />
                </button>
                
                {/* 우측 화살표 */}
                <button 
                  onClick={nextImage} 
                  className="absolute right-4 z-10 flex items-center justify-center w-12 h-12 bg-black bg-opacity-30 hover:bg-opacity-60 text-white rounded-full transition-all duration-300"
                  aria-label="다음 이미지"
                >
                  <FaChevronRight className="text-xl" />
                </button>
                
                <img
                  src={uiImages[currentImageIndex].src}
                  alt={uiImages[currentImageIndex].alt}
                  className="max-w-full max-h-[70vh] object-contain"
                  style={{ display: 'block', margin: '0 auto' }}
                  loading="eager"
                />
              </div>
              
              {/* 이미지 제목과 인디케이터 */}
              <div className="bg-white border-t border-gray-100">
                <div className="flex justify-center items-center px-4 py-4">
                  <div className="text-center bg-gray-50 px-6 py-2 rounded-full shadow-sm">
                    <h4 className="text-xl font-semibold text-gray-800">{uiImages[currentImageIndex].title}</h4>
                    <p className="text-sm text-gray-500">
                      {currentImageIndex + 1} / {uiImages.length}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center py-2 px-6 space-x-3">
                  {uiImages.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-14 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
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
          {projects.map((project, projectIndex) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              {/* 프로젝트 헤더 */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* 로고 섹션 - 왼쪽 배치 */}
                  <div className="w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 flex-shrink-0">
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
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <div className="flex items-center text-gray-600 mb-3">
                        <FaCalendarAlt className="mr-2 text-sm" />
                        <span className="text-sm">{project.period}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <p className="text-sm text-gray-500">{project.role}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-md text-blue-700 transition-colors"
                        >
                          <FaExternalLinkAlt className="mr-2" /> 배포 링크
                        </a>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-gray-700 mr-2 flex items-center">
                        <FaCode className="mr-1" />
                        기술 스택:
                      </span>
                      {project.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs transition-colors"
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
                    className={`px-4 py-3 text-sm whitespace-nowrap font-medium flex items-center ${
                      getSelectedTab(project.id) === tab 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedTab(project.id, tab)}
                  >
                    {tabIcons[tab]}
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* 선택된 탭 내용 */}
              <div className="p-6">
                {renderTabContent(project)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 