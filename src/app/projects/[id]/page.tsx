'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaCode, FaLightbulb, FaBrain } from 'react-icons/fa';

// 프로젝트 데이터 (실제로는 API 호출 또는 상태 관리 라이브러리 사용)
const projectsData = [
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
      "사용자 인증 및 권한 관리 시스템",
      "게시판 및 공지사항",
      "댓글 및 좋아요 기능",
      "알림 시스템",
      "캘린더 기능",
      "관리자 페이지"
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
          "학원 정보 관리, 회원 관리, 관리자 관리 등 관리자 전용 기능 구현",
          "복잡한 테이블 UI와 필터링/검색 기능 등을 포함하여 관리자 편의성 고려"
        ]
      },
      {
        title: "비밀번호 재설정 기능 구현",
        details: [
          "누리고 SMS API를 활용하여 휴대폰 인증 기반 비밀번호 재설정 기능 개발",
          "사용자 보안성을 고려한 토큰 검증 및 예외 처리 로직 구성"
        ]
      },
      {
        title: "댓글 기능 개발",
        details: [
          "댓글 작성, 삭제, 수정, 신고 기능 구현",
          "JWT 기반 토큰 인증을 통해 사용자 권한 검증 및 요청 처리"
        ]
      },
      {
        title: "캘린더 기능 개발",
        details: [
          "사용자 맞춤 일정 등록/수정/삭제 기능이 포함된 캘린더 페이지 구현",
          "FullCalendar 라이브러리 기반으로 개발",
          "일정 알림 및 사용자가 사용하기 쉬운 UI 구성"
        ]
      },
      {
        title: "프론트엔드 전체 구현 (Next.js 기반)",
        details: [
          "전체 페이지 디자인을 총괄하며 일관된 디자인 시스템 및 스타일링 전략 적용"
        ]
      },
      {
        title: "사용자 마이페이지(내 정보 페이지) 구현",
        details: [
          "사용자가 작성한 댓글, 게시글, 좋아요한 게시글 목록을 확인할 수 있는 마이페이지 구현"
        ]
      },
      {
        title: "접근성 및 반응형 디자인 고려",
        details: [
          "다양한 기기에서도 편리하게 사용할 수 있도록 반응형 레이아웃 설계",
          "스켈레톤 UI 적용"
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

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ID로 프로젝트 찾기
    const projectId = params.id as string;
    const foundProject = projectsData.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
    }
    
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">프로젝트를 찾을 수 없습니다</h1>
        <p className="text-gray-600 mb-6">요청하신 프로젝트가 존재하지 않거나 삭제되었습니다.</p>
        <Link 
          href="/#projects" 
          className="flex items-center text-blue-600 hover:underline font-medium"
        >
          <FaArrowLeft className="mr-2" /> 프로젝트 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline mb-4"
          >
            <FaArrowLeft className="mr-2" /> 프로젝트 목록으로 돌아가기
          </Link>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{project.title}</h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span>{project.period}</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-blue-100 hover:bg-blue-200 rounded-md text-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" /> 배포 링크
                  </a>
                )}
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech: string, i: number) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">💡 프로젝트 소개</h2>
                <p className="text-gray-700">{project.description}</p>
                
                {project.longDescription && (
                  <div className="whitespace-pre-line text-gray-700 mt-3">
                    {project.longDescription}
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaUsers className="mr-2 text-blue-600" /> 팀 구성
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
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
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaCode className="mr-2 text-blue-600" /> 주요 기능
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaLightbulb className="mr-2 text-blue-600" /> 담당 역할 및 기여 내용
              </h2>
              <div className="space-y-6">
                {project.myContributions.map((contrib: any, i: number) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{contrib.title}</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {contrib.details.map((detail: string, j: number) => (
                        <li key={j} className="text-gray-700">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaBrain className="mr-2 text-blue-600" /> 프로젝트 회고 및 배운 점
              </h2>
              <div className="space-y-6">
                {project.reflections.map((reflection: any, i: number) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{reflection.title}</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {reflection.details.map((detail: string, j: number) => (
                        <li key={j} className="text-gray-700">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">내 역할</h2>
              <p className="text-gray-700">{project.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 