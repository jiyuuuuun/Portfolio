import Link from 'next/link';
import { FaUser, FaCode, FaGraduationCap, FaCertificate, FaProjectDiagram, FaEnvelope, FaGithub, FaBlog } from 'react-icons/fa';

type HeroSideProps = {
  activeSection: string;
};

export default function HeroSide({ activeSection }: HeroSideProps) {
  const navItems = [
    { id: "about", label: "About Me", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "certificates", label: "Certificates", icon: <FaCertificate /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> }
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/jiyuuuuun" },
    { name: "Blog", icon: <FaBlog />, url: "https://jjiyuuuuun.tistory.com" },
    { name: "Email", icon: <FaEnvelope />, url: "mailto:hwangjy001@naver.com" }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-36 h-36 rounded-full border-4 border-gray-300 shadow-sm bg-gray-300 flex items-center justify-center overflow-hidden">
          <svg className="w-24 h-24 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800">황지윤</h1>
        <p className="text-lg text-gray-600">백엔드 개발자</p>

        <div className="flex gap-4 mt-2">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
              aria-label={link.name}
              title={link.name}
            >
              <span className="text-xl">{link.icon}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">Java</span>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">Spring</span>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">MySQL</span>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">Docker</span>
        </div>
      </div>
      
      <nav className="mt-12">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link 
                href={`#${item.id}`} 
                className={`flex items-center px-5 py-3 rounded-lg transition-all duration-200 
                ${activeSection === item.id 
                  ? 'bg-gray-300 text-gray-800 font-medium shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-200'}`}
              >
                <span className="mr-3 text-sm opacity-70">{item.icon}</span>
                {item.label}
                {activeSection === item.id && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-gray-500"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto pt-8 border-t border-gray-200 mx-5">
        <p className="text-xs text-gray-500 mt-4 text-center">© 2024 황지윤</p>
      </div>
    </div>
  );
} 