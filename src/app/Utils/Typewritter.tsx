"use client";

import React, { useState, useEffect } from "react";

interface TypewritterProps {
    text: string; // Văn bản cần hiển thị
    speed?: number; // Tốc độ gõ (ms)
    onComplete?: () => void; // Hàm callback khi hoàn thành
    className?: string; // Lớp CSS tùy chỉnh
    style?: React.CSSProperties; // Style tùy chỉnh
}

const Typewritter: React.FC<TypewritterProps> = ({
    text,
    speed = 100,
    onComplete,
    className,
    style,
}) => {
    const [displayedText, setDisplayedText] = useState(''); // Văn bản hiển thị

    useEffect(() => {
        let currentIndex = 0; // Vị trí ký tự hiện tại
        const interval = setInterval(() => {
            if (currentIndex < text.length - 1) {
                setDisplayedText((prev) => prev + text[currentIndex]); // Thêm ký tự tiếp theo
                currentIndex++;
            } else {
                clearInterval(interval);
                if (onComplete) {
                    onComplete();
                }
            }
        }, speed);

        return () => clearInterval(interval); // Dọn dẹp khi component bị hủy
    }, [text, speed, onComplete]);

    return (
        <span className={className} style={style}>
            {displayedText}
            {displayedText.length < text.length && <span className="animate-blink">|</span>} {/* Con trỏ nhấp nháy */}
        </span>
    );
};

export default Typewritter;