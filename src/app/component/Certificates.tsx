import React from "react";

const Certificates: React.FC = () => {
    const certificates = [
        {
            name: "Chứng chỉ IoT từ Coursera",
            link: "https://www.coursera.org",
        },
        {
            name: "Chứng chỉ Lập trình Python từ Udemy",
            link: "https://www.udemy.com",
        },
        {
            name: "English B1",
            link: "https://www.efset.org",
        },
        {
            name: "Tiếng Trung",
            link: "https://www.hskonline.com",
        },
        {
            name: "Tiếng Nhật",
            link: "https://www.jlpt.jp",
        },
    ];

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4 text-[#ff00ff]">Chứng chỉ</h2>
            <p className="text-lg text-[#00f0ff] mb-4">
                Tôi đã hoàn thành nhiều khóa học và chứng chỉ trong lĩnh vực IoT và tự động hóa.
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg text-[#00f0ff]">
                {certificates.map((certificate, index) => (
                    <li key={index}>
                        <a
                            href={certificate.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff00ff] hover:underline"
                        >
                            {certificate.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Certificates;
