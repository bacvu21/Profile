"use client";

interface EducationItem {
    institution: string;
    degree: string;
    year: string;
    description?: string;
}

const educationData: EducationItem[] = [
    {
        institution: "Đại học Sư phạm Kỹ thuật Hưng Yên",
        degree: "Cử nhân Cơ Điện tử",
        year: "2019 - 2023",
        description: "Tốt nghiệp với thành tích nổi bật.",
    }
    // },
    // {
    //     institution: "Đại học khoa học tự nhiên - Đại học Quốc gia Hà Nội",
    //     degree: "Ths. Vật lý",
    //     year: "2025 - 2027",
    //     description: "Chương trình thạc sĩ về vật lý phóng xạ. Xuất bản nhiều nghiên cứu khoa học được đánh giá cao",
    // }
];

export default function Education() {
    return (
        <section className="w-full max-w-3xl p-8 bg-[#1a1a2e]/90 rounded-xl shadow-2xl border border-[#00f0ff]/50 transform transition-all hover:scale-105">
            <h2 className="text-3xl font-semibold text-[#00f0ff] mb-6 text-center">
                Trình độ học vấn
            </h2>
            <ul className="space-y-6">
                {educationData.map((item, index) => (
                    <li key={index} className="bg-[#0f0f1c] p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-[#ff00ff]">{item.institution}</h3>
                        <p className="text-lg text-[#00f0ff] italic mt-2">
                            {item.degree} <span className="text-sm text-[#00f0ff]/70 italic">({item.year})</span>
                        </p>
                        {item.description && (
                            <p className="text-sm text-[#00f0ff]/80 mt-2">{item.description}</p>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}