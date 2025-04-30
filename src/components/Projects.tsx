export default function Projects() {
  const projects = [
    {
      title: "대규모 웹 애플리케이션",
      description: "React, Node.js, MongoDB 기반의 대규모 서비스 개발 경험.",
      role: "백엔드 개발 및 UI/UX 개선",
      github: "https://github.com/yourusername/project1",
      technologies: ["Java", "Spring", "MySQL", "Docker"]
    },
    {
      title: "실시간 채팅 서비스",
      description: "Next.js, Socket.io, PostgreSQL을 활용한 실시간 채팅 플랫폼.",
      role: "풀스택 개발 및 배포 자동화",
      github: "https://github.com/yourusername/project2",
      technologies: ["Java", "Spring", "WebSocket", "Redis"]
    },
  ];

  return (
    <section id="projects" className="py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">{project.role}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIdx) => (
                  <span 
                    key={techIdx}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 