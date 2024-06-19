import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const CaptionForm = ({ onSubmit }) => {
    const [url, setUrl] = useState('');
    const [captions, setCaptions] = useState([]);
    const [text, setText] = useState('');
    const [timestamp, setTimestamp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCaption = { text, timestamp: parseFloat(timestamp) };
        setCaptions([...captions, newCaption]);
        setText('');
        setTimestamp('');
    };

    const handleSave = () => {
        onSubmit({ url, captions });
    };

    return (
        <div className="flex-1 bg-gray-700 rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Video URL:</label>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-800 text-gray-100 px-3 py-2"
                        placeholder="Enter video URL"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Caption Text:</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-800 text-gray-100 px-3 py-2"
                        placeholder="Enter caption text"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Timestamp (in seconds):</label>
                    <input
                        type="number"
                        value={timestamp}
                        onChange={(e) => setTimestamp(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-800 text-gray-100 px-3 py-2"
                        placeholder="Enter timestamp"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
                >
                    Add Caption
                </button>
            </form>
            <button
                onClick={handleSave}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-200"
            >
                Save Captions and click to play
            </button>
            <ul className="mt-4 space-y-2">
                {captions.map((caption, index) => (
                    <li key={index} className="text-sm">
                        {caption.timestamp}s: {caption.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CaptionForm;













































