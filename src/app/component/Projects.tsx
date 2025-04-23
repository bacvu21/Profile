"use client";

interface Project {
    title: string;
    description: string;
    link: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "Dự án IoT",
        description: "Hệ thống giám sát và điều khiển thiết bị IoT từ xa.",
        link: "https://example.com/iot-project",
        image: "/images/iot-project.jpg",
    },
    {
        title: "Ứng dụng Web",
        description: "Ứng dụng quản lý công việc với giao diện hiện đại.",
        link: "https://example.com/web-app",
        image: "/images/web-app.jpg",
    },
    {
        title: "Hệ thống tự động hóa",
        description: "Giải pháp tự động hóa quy trình sản xuất.",
        link: "https://example.com/automation",
        image: "/images/automation.jpg",
    },
    {
        title: "Bài báo cáo tốt nghiệp",
        description: "Giải pháp tự động hóa quy trình sản xuất.",
        link: "https://example.com/automation",
        image: "/images/automation.jpg",
    },
    {
        title: "Nghiên cứu khoa học",
        description: "Giải pháp tự động hóa quy trình sản xuất.",
        link: "https://example.com/automation",
        image: "/images/automation.jpg",
    },
    {
        title: "Bài báo về năng lượng tái tạo",
        description: "Tái sử dụng năng lượng tốt cho nghiên cứu và phát triển.",
        link: "https://example.com/automation",
        image: "/images/automation.jpg",
    },
];

export default function Projects() {
    return (
        <section className="w-full max-w-5xl mx-auto p-8 bg-[#1a1a2e]/90 rounded-xl shadow-2xl border border-[#00f0ff]/50 transform transition-all hover:scale-105">
            <h2 className="text-3xl font-extrabold text-center text-[#00f0ff] mb-8">
                Dự án của tôi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#0f0f1c] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-[#ff00ff] mb-2">
                                {project.title}
                            </h3>
                            <p className="text-[#00f0ff] mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00f0ff] hover:text-[#ff00ff] font-semibold underline"
                            >
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}