"use client";

import { FC, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillBarProps {
    name: string;
    level: number;
    description: string;
    animated?: boolean;
}

const SkillBar: FC<SkillBarProps> = ({ name, level, description, animated }) => {
    const [animatedWidth, setAnimatedWidth] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedWidth(level);
        }, 100);
        return () => clearTimeout(timer);
    }, [level]);

    return (
        <motion.div
            layout
            className="space-y-2 relative group bg-[#101020] p-4 rounded-md border border-[#00f0ff]/30"
            role="progressbar"
            aria-label={`Skill: ${name}, Level: ${level}%`}
        >
            {/* Header */}
            <motion.div
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 cursor-pointer"
            >
                <motion.div
                    layout
                    className="h-6 w-6 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#ff00ff]"
                ></motion.div>
                <div className="flex justify-between flex-grow text-lg font-medium">
                    <span className="text-[#00f0ff]">{name}</span>
                    <span className="text-[#ff00ff]">{level}/100</span>
                </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full bg-[#0f0f1c] rounded-full h-4 border border-[#00f0ff]/50">
                <motion.div
                    className="bg-gradient-to-r from-[#ff00ff] to-[#00f0ff] h-full rounded-full transition-all duration-[1500ms] ease-in-out"
                    style={{ width: `${animatedWidth}%` }}
                />
            </div>

            {/* Description Reveal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <h3 className="text-lg font-semibold text-[#ff00ff] mb-1">{name}</h3>
                        <p>{description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SkillBar;
