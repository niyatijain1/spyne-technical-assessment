import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import CaptionForm from './components/CaptionForm';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [captions, setCaptions] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');

  const handleCaptionSubmit = ({ url, captions }) => {
    setVideoUrl(url);
    setCaptions(captions);
  };

  return (
    <div className="app bg-gray-900 min-h-screen text-gray-100">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Video Caption Tool</h1>
        <div className="flex flex-col md:flex-row items-stretch md:space-x-8">
          <CaptionForm onSubmit={handleCaptionSubmit} />
          <VideoPlayer url={videoUrl} captions={captions} />
        </div>
      </div>
    </div>
  );
};

export default App;

