import Header from './component/Header';
import './globals.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import SkillBar from './component/Skills';
import Project from './component/Projects';
import Education from './component/Education';
import Typewritter from './Utils/Typewritter';
import Certificates from './component/Certificates';
import MusicPlayer from './component/MusicPlayer';
export default function HomePage() {


    return (
        <main className="flex min-h-screen bg-cyberpunk flex-col items-center justify-center  bg-gradient-to-b from-[#0f0f1c] to-[#1a1a2e] text-[#00f0ff] p-8 space-y-12">
            {/* Header Section */}
            <div className="w-full max-w-5xl retro-border p-4">
                <Header />
            </div>

            {/* Music Player */}
            <div className="w-full max-w-5xl text-center text-[#00f0ff] mb-8 retro-border p-4">
                <MusicPlayer />
            </div>

            {/* Main Content */}
            <div className="text-center max-w-3xl space-y-8 p-8 bg-[#1a1a2e]/90 rounded-xl shadow-2xl border border-[#00f0ff]/50 transform transition-all hover:scale-105">
                {/* Title Section */}
                <h1 className="text-6xl font-extrabold neon-text mb-6">
                    <span className="text-[#ff00ff]">
                        <Typewritter
                            text="Xiin chào!"
                            speed={1000}
                            className="text-[#ff00ff]"
                        /></span>
                </h1>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#ff00ff] via-[#00f0ff] to-[#00ff00] text-transparent bg-clip-text mb-4 animate-pulse sparkle-text">
                    Tôi là Bắc Vũ, 24 tuổi, thích nghiên cứu công nghệ và khoa học tự nhiên.
                </h2>
                <h3 className="text-xl font-medium animate-fadeIn">
                    IoT & Automation Engineering
                </h3>
                <p className="text-lg text-[#00f0ff] mt-4 leading-relaxed">
                    Chào mừng bạn đến với trang cá nhân của tôi! Tôi là một kỹ sư đam mê công nghệ và tự động hóa. Với hơn 2 năm kinh nghiệm,
                    tôi đã tham gia nhiều dự án thú vị, từ thiết kế hệ thống IoT đến tự động hóa quy trình, mang lại giá trị thực tiễn và sáng tạo.
                </p>
                <p className="text-lg text-[#00f0ff] mt-4 leading-relaxed">
                    <Typewritter
                        text="N ếu bạn muốn thảo luận về công nghệ, hợp tác dự án, hoặc chỉ đơn giản là trò chuyện, hãy liên hệ với tôi qua các kênh bên dưới. Tôi luôn sẵn sàng kết nối!"
                        speed={50}
                        className="text-[#00f0ff]"
                    />

                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mt-6">
                    <a
                        href="https://facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00f0ff] hover:text-[#ff00ff] transform hover:scale-125 transition-all duration-300"
                        aria-label="Facebook"
                    >
                        <FaFacebook size={32} />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00f0ff] hover:text-[#ff00ff] transform hover:scale-125 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00f0ff] hover:text-[#ff00ff] transform hover:scale-125 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={32} />
                    </a>
                </div>
            </div>
            {/* Skills Section */}
            <div className="w-full max-w-3xl p-8 bg-[#1a1a2e]/90 rounded-xl shadow-2xl border border-[#00f0ff]/50 transform transition-all hover:scale-105">
                <SkillBar name="Vật lý" level={70} description="Đam mê nghiên cứu trong lĩnh vực vật lý" animated />
                <SkillBar name="Toán" level={50} description="Chuyên sâu về đại số và giải tích" animated />
                <SkillBar name="Hóa học" level={30} description="Nghiên cứu hóa học ứng dụng" animated />
                <SkillBar name="Developer" level={100} description="Lập trình và phát triển phần mềm" animated />
                <SkillBar name="Blogger" level={10} description="Chia sẻ kiến thức và kinh nghiệm" animated />
            </div>
            {/* Education Section */}
            <div className="w-full max-w-3xl p-8 bg-[#1a1a2e]/90 rounded-xl shadow-2xl border border-[#00f0ff]/50 transform transition-all hover:scale-105">
                <Education />
            </div>

            { /*certification Section */}
            <div className="w-full max-w-3xl p-8 bg-[#1a1a2e]/90 rounded-xl shadow-2xl border border-[#00f0ff]/50 transform transition-all hover:scale-105">
                <Certificates />
            </div>
            {/* Projects Section */}
            <div className="w-full max-w-3xl p-8 bg-[#1a1a2e]/90 rounded-xl shadow-2xl border border-[#00f0ff]/50 transform transition-all hover:scale-105">
                <Project />
            </div>

            {/* Experience Section */}
            <div className="w-full max-w-3xl p-8 bg-[#1a1a2e]/90 rounded-xl shadow-2xl border border-[#00f0ff]/50 transform transition-all hover:scale-105">
                <h2 className="text-3xl font-semibold mb-4 text-[#ff00ff]">Kinh nghiệm làm việc</h2>

                <p className="text-lg text-[#00f0ff] mb-4">
                    Tôi đã làm việc trong nhiều dự án thú vị và có cơ hội học hỏi từ những người có nhiều năm kinh nghiệm.

                </p>
                <p className='text-lg text-[#00f0ff] mb-4'>
                    Dưới đây là một số kinh nghiệm nổi bật của tôi:
                </p>


                <ul className="list-disc list-inside space-y-4 text-lg text-[#00f0ff]">
                    <li>
                        <strong>2024 - 2025 (1 năm):</strong> Kỹ sư IoT tại Công ty TNHH Hamaden Việt Nam, tham gia vào các dự án tự động hóa và IoT.
                    </li>
                    <li>
                        <strong>2023 - 2024 (6 tháng):</strong>  Fresher tại FPT software, tham gia vào các dự án phát triển phần mềm và IoT.
                    </li>
                    <li>
                        <strong>2022 - 2023: </strong>  Tham gia nghiên cứu khoa học tại Đại học Sư phạm Kỹ thuật Hưng Yên
                    </li>
                </ul>
            </div>




            {/* Contact Section */}
            <div className="w-full max-w-3xl p-8 bg-[#1a1a2e]/90 rounded-xl shadow-2xl border border-[#00f0ff]/50 transform transition-all hover:scale-105">
                <h2 className="text-3xl font-semibold mb-4">Liên với tôi</h2>
                <p className="text-lg text-[#00f0ff] mb-4">
                    Email:
                    <a
                        href="mailto:your-email@example.com"
                        className="text-[#ff00ff] hover:underline ml-2"
                    >
                        bacvu225@gmail.com
                    </a>
                </p>
                <p className="text-lg text-[#00f0ff] mb-4">
                    Điện thoại:
                    <span className="text-[#ff00ff] ml-2">+84 0333108687</span>
                </p>
                <p className="text-lg text-[#00f0ff]">
                    Địa chỉ:
                    <span className="text-[#ff00ff] ml-2">Hà Nội, Việt Nam</span>
                </p>
            </div>

            {/* Footer Section */}
            <footer className="w-full max-w-5xl text-center text-[#00f0ff] mt-12">
                <p className="text-sm">© 2023 Bắc Vũ. All rights reserved.</p>
                <p className="text-sm">Designed with ❤️ by Bắc Vũ</p>
            </footer>
        </main >
    );
}