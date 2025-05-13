import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaCode, FaGraduationCap, FaCertificate, FaProjectDiagram, FaEnvelope, FaGithub, FaBlog, FaBriefcase } from 'react-icons/fa';

type HeroSideProps = {
  activeSection: string;
};

export default function HeroSide({ activeSection }: HeroSideProps) {
  const navItems = [
    { id: "about", label: "About Me", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
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
      <div className="flex flex-col items-center text-center gap-8">
        <div className="w-44 h-44 rounded-full border-4 border-gray-300 shadow-md overflow-hidden">
          <Image 
            src="/images/profile.jpg" 
            alt="황지윤 프로필 사진" 
            width={176} 
            height={176} 
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">황지윤</h1>
          <p className="text-xl text-gray-600">꾸준함으로 성장중인</p>
          <p className="text-xl text-gray-600">백엔드 개발자 황지윤입니다</p>
        </div>

        <div className="flex gap-5 mt-3">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3.5 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
              aria-label={link.name}
              title={link.name}
            >
              <span className="text-2xl">{link.icon}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">Java</span>
          <span className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">Spring</span>
          <span className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">MySQL</span>
          <span className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">Docker</span>
        </div>
      </div>
      
      <nav className="mt-14">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link 
                href={`#${item.id}`} 
                className={`flex items-center px-6 py-3.5 rounded-lg transition-all duration-200 
                ${activeSection === item.id 
                  ? 'bg-gray-300 text-gray-800 font-medium shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-200'}`}
              >
                <span className="mr-4 text-base opacity-80">{item.icon}</span>
                <span className="text-lg">{item.label}</span>
                {activeSection === item.id && (
                  <span className="ml-auto w-2.5 h-2.5 rounded-full bg-gray-500"></span>
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