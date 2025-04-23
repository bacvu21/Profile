"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import CDmage from "../images/vinyl-record-isolated.jpg";

const MusicPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0); // Thời gian hiện tại
    const [duration, setDuration] = useState(0); // Tổng thời gian

    const togglePlay = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number(e.target.value);
            setCurrentTime(Number(e.target.value));
        } ``
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
        <div className="flex flex-col items-center space-y-6  ">
            {/* Rotating CD */}
            <div className="relative w-40 h-40">
                <Image
                    src={CDmage}
                    alt="CD"
                    className={`w-full h-full rounded-full border-4 border-[#00f0ff] shadow-[0_0_20px_#00f0ff] ${isPlaying ? "animate-spin" : ""
                        }`}
                />
            </div>

            {/* Audio Element */}
            <audio
                ref={audioRef}
                loop
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            >
                <source src="/Music/lofi.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Progress Bar */}
            <div className="w-full max-w-md mb-2">
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full appearance-none bg-[#00f0ff] h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-sm text-[#00f0ff] mt-2">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            {/* Play/Pause Button */}
            <button
                onClick={togglePlay}
                className="px-4 py-2 text-[#ff00ff] rounded active:bg-[#00f0ff] transition-all flex items-center justify-center"
            >
                {isPlaying ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-6 h-6"
                    >
                        <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-6 h-6"
                    >
                        <path d="M6.79 3.093A.5.5 0 0 1 7.5 3.5v9a.5.5 0 0 1-.71.454l-6-4a.5.5 0 0 1 0-.908l6-4a.5.5 0 0 1 .29-.053z" />
                    </svg>
                )}
            </button>

            {/* Quote */}
            <div className="text-center">
                <p className="text-lg text-[#ff00ff]">
                    "Âm nhạc là ngôn ngữ của tâm hồn, nơi mà công nghệ và cảm xúc hòa quyện."
                </p>
            </div>
        </div >
    );
};

export default MusicPlayer;