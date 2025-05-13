import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaCode, FaLightbulb, FaBrain, FaInfo, FaChevronLeft, FaChevronRight, FaDesktop } from 'react-icons/fa';
import Image from 'next/image';

type TabType = '소개' | '팀 구성' | '주요 기능' | '담당 역할' | '회고' | 'UI';

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState<TabType>('소개');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 탭 정의
  const tabs: TabType[] = ['소개', '팀 구성', '주요 기능', '담당 역할', '회고', 'UI'];

  // UI 이미지 정의
  const uiImages = [
    { src: "/images/학플메인페이지.png", alt: "Hakple 메인페이지", title: "메인페이지" },
    { src: "/images/학플홈페이지.png", alt: "Hakple 홈페이지", title: "홈페이지" },
    { src: "/images/학플게시판.png", alt: "Hakple 게시판", title: "게시판" },
    { src: "/images/학플게시물.png", alt: "Hakple 게시물", title: "게시물" },
    { src: "/images/학플마이페이지.png", alt: "Hakple 마이페이지", title: "마이페이지" }
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
      technologies: ["Java 21", "Spring Boot", "JavaScript", "React", "Next.js", "MySQL", "Redis", "AWS S3", "Docker", "Terraform", "AWS EC2", "GitHub Actions"],
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
        { name: "박주호", role: "백엔드 개발 (팀장)" },
        { name: "김명수", role: "백엔드 개발 (부팀장)" },
        { name: "고희은", role: "백엔드 개발" },
        { name: "도상원", role: "백엔드 개발" },
        { name: "황지윤", role: "백엔드 개발" }
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

  // 선택된 프로젝트는 항상 첫 번째 프로젝트(추후 여러 프로젝트 추가 시 선택 기능 구현 필요)
  const project = projects[0];

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
  const renderTabContent = () => {
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
                onClick={() => setSelectedTab('UI')}
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
                {project.team.map((member, i) => (
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
        return (
          <ul className="list-disc pl-5 space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        );
      case '담당 역할':
        return (
          <div className="space-y-4">
            {project.myContributions.map((contrib, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-md text-gray-800 mb-2">{contrib.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {contrib.details.map((detail, j) => (
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
            {project.reflections.map((reflection, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-md text-gray-800 mb-2">{reflection.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {reflection.details.map((detail, j) => (
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
        
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
          {/* 프로젝트 헤더 */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* 로고 섹션 - 왼쪽 배치 */}
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Hakple 로고"
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
                  selectedTab === tab 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tabIcons[tab]}
                {tab}
              </button>
            ))}
          </div>
          
          {/* 선택된 탭 내용 */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
}