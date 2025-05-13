export default function Experience() {
  const experiences = [
    {
      title: "브이유텍",
      subtitle: "텍스트 데이터 처리 업무",
      period: "2021.12.14 ~ 2022.02.28",
      description: [
        "데이터베이스 구축을 위한 텍스트 자료 정리 및 필드 분류 작업 수행",
        "엑셀 기반 포맷에 맞춰 텍스트 항목별 라벨링 및 정규화 진행",
        "가이드라인에 따라 텍스트를 특정 카테고리 및 키워드 기준으로 분류",
        "일정 준수 및 작업 정확도 관리 경험 보유"
      ],
      icon: (
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "브이유텍",
      subtitle: "이미지 객체 인식 라벨링",
      period: "2024.05 ~ 2024.05",
      description: [
        "AI 모델 학습용 이미지에서 사람 객체 인식 및 라벨링 수행",
        "이미지 내 인물의 위치를 Bounding Box 형태로 지정하고 태그 입력",
        "외부 배경과 혼잡도가 높은 장면에서 정확도 높은 작업 수행"
      ],
      icon: (
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "브이유텍",
      subtitle: "생선 이미지 데이터 라벨링",
      period: "2024.10 ~ 2024.10",
      description: [
        "생선 이미지를 대상으로 한 AI 학습용 데이터 라벨링 작업 수행",
        "다양한 각도와 배경의 이미지에서 물체(생선 종류) 식별 및 구역 지정"
      ],
      icon: (
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "멋쟁이사자처럼",
      subtitle: "백엔드 부트캠프 13기: Java",
      period: "2024.11 ~ 2025.06",
      description: [
        "Spring Boot 기반의 웹 서비스 개발, REST API 설계, DB 모델링, 배포 등 백엔드 전반을 학습"
      ],
      icon: (
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="py-8">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience & Activities</h2>
        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {exp.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{exp.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{exp.subtitle}</p>
                  <div className="flex flex-wrap gap-2 items-center mb-3">
                    <span className="text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-5 text-base text-gray-600 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 