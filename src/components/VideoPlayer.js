import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import 'tailwindcss/tailwind.css';
const VideoPlayer = ({ url, captions }) => {
    const playerRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current) {
                setCurrentTime(playerRef.current.getCurrentTime());
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-gray-700 rounded-lg p-6 overflow-hidden">
            <ReactPlayer
                url={url}
                controls
                ref={playerRef}
                width="100%"
                height="100%"
                className="rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center text-white text-xl pointer-events-none">
                {captions.map((caption, index) => (
                    <div
                        key={index}
                        className={`caption ${currentTime >= caption.timestamp && currentTime < caption.timestamp + 5 ? 'block' : 'hidden'}`}
                        style={{
                            maxWidth: '80%',
                            background: 'rgba(0, 0, 0, 0.6)',
                            padding: '8px',
                            borderRadius: '8px',
                        }}
                    >
                        {caption.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoPlayer;
