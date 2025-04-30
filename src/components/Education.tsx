export default function Education() {
  const education = [
    {
      title: "성결대학교",
      degree: "컴퓨터공학 학사 (편입)",
      period: "2022.03 - 2025.02",
      description: "컴퓨터공학과 학생회 활동, 졸업 프로젝트 수행",
      icon: (
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "멋쟁이사자처럼 백엔드 부트캠프 13기: Java",
      degree: "백엔드 개발 과정 수료",
      period: "2024.11 - 2025.06",
      description: "Spring Boot 기반의 웹 서비스 개발, REST API 설계, DB 모델링, 배포 등 백엔드 전반을 학습",
      icon: (
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {edu.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.title}</h3>
                  <div className="flex flex-wrap gap-2 items-center mb-2">
                    <span className="text-sm text-gray-600">{edu.degree}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{edu.period}</span>
                  </div>
                  <p className="text-base text-gray-600">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 