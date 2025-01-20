import React, { useState, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="w-96 p-4 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <h2 className="text-lg font-semibold mb-2">Audio Player</h2>
      <button
        onClick={togglePlayPause}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleProgressChange}
        className="w-full"
      />
      <div className="text-sm text-gray-600 mt-2">
        {Math.floor(currentTime / 60)}:
        {Math.floor(currentTime % 60).toString().padStart(2, "0")} /{" "}
        {Math.floor(duration / 60)}:
        {Math.floor(duration % 60).toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default AudioPlayer;
