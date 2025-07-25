import { FaGithub, FaBlogger, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-8">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <span className="text-gray-500"><FaEnvelope /></span> Contact
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-gray-500" />
            <span className="font-medium text-gray-700">이메일:</span>
            <a href="mailto:hwangjy001@naver.com" className="text-gray-600 hover:text-gray-800 transition-colors">
              hwangjy001@naver.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub className="text-gray-500" />
            <span className="font-medium text-gray-700">GitHub:</span>
            <a href="https://github.com/jiyuuuuun" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors">
              https://github.com/jiyuuuuun
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaBlogger className="text-gray-500" />
            <span className="font-medium text-gray-700">Blog:</span>
            <a href="https://jjiyuuuuun.tistory.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors">
              https://jjiyuuuuun.tistory.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 