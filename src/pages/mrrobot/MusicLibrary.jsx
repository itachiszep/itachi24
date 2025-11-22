'use client';
 
import React, { useEffect, useState, useRef } from "react";
 
export default function MusicLibrary() {
  const [music, setMusic] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
 
  useEffect(() => {
    setMusic([
      {
        title: "After Party (Rap Version)",
        artist: "Clean",
        duration: "3:45",
        file: "/muzyka/After Party (Rap Version) (Clean).mp3",
      },
      {
        title: "After Party (Wolf Lose Version)",
        artist: "Wolf",
        duration: "4:20",
        file: "/muzyka/After Party (Wolf Lose Version).mp3",
      },
      {
        title: "Akatsuki - Theme Song (All)",
        artist: "DonVip! - 3RunDonVip",
        duration: "3:30",
        file: "/muzyka/Akatsuki - Theme Song (All) by DonVip! - 3RunDonVip.mp3",
      },
      
      {
        title: "Are 'Friends' Electric?",
        artist: "Electro Version",
        duration: "5:15",
        file: "/muzyka/Are 'Friends' Electric？ (Electro Version).mp3",
      },
      {
        title: "Around The Horn (Rock Version)",
        artist: "Rock",
        duration: "4:30",
        file: "/muzyka/Around The Horn (Rock Version).mp3",
      },
      {
        title: "Belt (Tuner Theme)",
        artist: "Tuner",
        duration: "2:45",
        file: "/muzyka/Belt (Tuner Theme).mp3",
      },
      {
        title: "Bending Light (Crew Race Track 2)",
        artist: "Full Mix",
        duration: "5:20",
        file: "/muzyka/Bending Light (Crew Race Track 2) (Full Mix).mp3",
      },
      {
        title: "Bounce (Rap Version)",
        artist: "Clean",
        duration: "3:15",
        file: "/muzyka/Bounce (Rap Version) (Clean).mp3",
      },
      {
        title: "Burnout (Muscle Theme)",
        artist: "Muscle",
        duration: "4:10",
        file: "/muzyka/Burnout (Muscle Theme).mp3",
      },
      {
        title: "Control Onegaishimasu (Canyon Track 2)",
        artist: "Full Mix",
        duration: "3:55",
        file: "/muzyka/Control Onegaishimasu (Canyon Track 2) (Full Mix).mp3",
      },
      {
        title: "Don't Speak (I Came To Make A Bang!)",
        artist: "Rock Version Clean",
        duration: "4:25",
        file: "/muzyka/Don't Speak (I Came To Make A Bang!) (Rock Version) (Clean).mp3",
      },
      {
        title: "Drift Itsumo (Canyon Track 1)",
        artist: "Full Mix",
        duration: "5:00",
        file: "/muzyka/Drift Itsumo (Canyon Track 1) (Full Mix).mp3",
      },
      {
        title: "Feel The Rush (Junkie XL Remix)",
        artist: "Electro Version",
        duration: "6:30",
        file: "/muzyka/Feel The Rush (Junkie XL Remix) (Electro Version).mp3",
      },
      {
        title: "Fighting In Built Up Areas",
        artist: "Electro Version",
        duration: "4:45",
        file: "/muzyka/Fighting In Built Up Areas (Electro Version).mp3",
      },
      {
        title: "Fighting In Built Up Areas (Kenji Lose)",
        artist: "Kenji Lose Version",
        duration: "4:50",
        file: "/muzyka/Fighting In Built Up Areas (Kenji Lose Version).mp3",
      },
      {
        title: "Girl Fight! (Mr. D Hyphy Instrumental)",
        artist: "Rap Version",
        duration: "3:40",
        file: "/muzyka/Girl Fight! (Mr. D Hyphy Instrumental Remix) (Rap Version).mp3",
      },
      {
        title: "Good As Gold",
        artist: "Electro Version",
        duration: "5:05",
        file: "/muzyka/Good As Gold (Electro Version).mp3",
      },
      {
        title: "Hard Drivers (Canyon Mix)",
        artist: "Canyon",
        duration: "4:35",
        file: "/muzyka/Hard Drivers (Canyon Mix).mp3",
      },
      {
        title: "Hard Drivers (Instrumental Mix)",
        artist: "Rap Version",
        duration: "4:40",
        file: "/muzyka/Hard Drivers (Instrumental Mix) (Rap Version).mp3",
      },
      {
        title: "Heatseeker (Rock Version)",
        artist: "Clean",
        duration: "3:50",
        file: "/muzyka/Heatseeker (Rock Version) (Clean).mp3",
      },
      {
        title: "Hurricane (Angie Lose Version)",
        artist: "Angie",
        duration: "4:15",
        file: "/muzyka/Hurricane (Angie Lose Version).mp3",
      },
      {
        title: "Hurricane (Rock Version)",
        artist: "Clean",
        duration: "4:20",
        file: "/muzyka/Hurricane (Rock Version) (Clean).mp3",
      },
      {
        title: "Hype Boys (Darius Lose Version)",
        artist: "Darius",
        duration: "3:30",
        file: "/muzyka/Hype Boys (Darius Lose Version).mp3",
      },
      {
        title: "Hype Boys (Rap Version)",
        artist: "Clean",
        duration: "3:35",
        file: "/muzyka/Hype Boys (Rap Version) (Clean).mp3",
      },
      {
        title: "I Am The Night, Colour Me Black",
        artist: "Rock Version",
        duration: "5:10",
        file: "/muzyka/I Am The Night, Colour Me Black (Rock Version).mp3",
      },
      {
        title: "I'm No Good (Rock Version)",
        artist: "Clean",
        duration: "3:45",
        file: "/muzyka/I'm No Good (Rock Version) (Clean).mp3",
      },
      {
        title: "Induction Kit (Exotic Theme)",
        artist: "Exotic",
        duration: "2:55",
        file: "/muzyka/Induction Kit (Exotic Theme).mp3",
      },
      {
        title: "Joker And The Thief",
        artist: "Rock Version",
        duration: "4:50",
        file: "/muzyka/Joker And The Thief (Rock Version).mp3",
      },
      {
        title: "Konbawa (Canyon Track 4)",
        artist: "Full Mix",
        duration: "4:30",
        file: "/muzyka/Konbawa (Canyon Track 4) (Full Mix).mp3",
      },
      {
        title: "Logo Screen Track",
        artist: "NFS Carbon",
        duration: "0:45",
        file: "/muzyka/Logo Screen Track.mp3",
      },
      {
        title: "Love Me Or Hate Me",
        artist: "Rap Version Clean",
        duration: "3:25",
        file: "/muzyka/Love Me Or Hate Me (Rap Version) (Clean).mp3",
      },
      {
        title: "My Friend Dario",
        artist: "Electro Version Clean",
        duration: "4:05",
        file: "/muzyka/My Friend Dario (Electro Version) (Clean).mp3",
      },
      {
        title: "NFS Carbon - Nikki theme",
        artist: "NFS Carbon",
        duration: "3:15",
        file: "/muzyka/NFS Carbon - Nikki theme.mp3",
      },
      {
        title: "No Love (Rap Version)",
        artist: "Clean",
        duration: "3:40",
        file: "/muzyka/No Love (Rap Version) (Clean).mp3",
      },
      {
        title: "One of Dem Days (Remix)",
        artist: "Rap Version Clean",
        duration: "4:00",
        file: "/muzyka/One of Dem Days (Remix) (Rap Version) (Clean).mp3",
      },
      {
        title: "People Always Talk About The Weather",
        artist: "Junkie XL Mix Electro",
        duration: "3:50",
        file: "/muzyka/People Always Talk About The Weather (Junkie XL Mix) (Electro Version).mp3",
      },
      {
        title: "Porsches (Menu Theme)",
        artist: "Menu",
        duration: "2:20",
        file: "/muzyka/Porsches (Menu Theme).mp3",
      },
      {
        title: "Pursuit Track 1",
        artist: "Carbon Version",
        duration: "3:35",
        file: "/muzyka/Pursuit Track 1 (Carbon Version).mp3",
      },
      {
        title: "Pursuit Track 2",
        artist: "Carbon",
        duration: "3:40",
        file: "/muzyka/Pursuit Track 2.mp3",
      },
      {
        title: "Ride A White Horse",
        artist: "Serge Santiago Re-Edit",
        duration: "5:25",
        file: "/muzyka/Ride A White Horse (Serge Santiago Re-Edit) (Electro Version).mp3",
      },
      {
        title: "Scorpio (Rap Version)",
        artist: "Rap",
        duration: "3:30",
        file: "/muzyka/Scorpio (Rap Version).mp3",
      },
      {
        title: "Show You How To Hustle",
        artist: "Rap Version Clean",
        duration: "3:55",
        file: "/muzyka/Show You How To Hustle (Rap Version) (Clean).mp3",
      },
      {
        title: "Signs of Life",
        artist: "Rock Version",
        duration: "4:10",
        file: "/muzyka/Signs of Life (Rock Version).mp3",
      },
      {
        title: "Sounding Streets (Crew Race Track 3)",
        artist: "Full Mix",
        duration: "5:15",
        file: "/muzyka/Sounding Streets (Crew Race Track 3) (Full Mix).mp3",
      },
      {
        title: "Steamworks",
        artist: "Electro Version",
        duration: "4:25",
        file: "/muzyka/Steamworks (Electro Version).mp3",
      },
      {
        title: "Suckers, OgenkiDesuka? (Canyon Track 3)",
        artist: "Full Mix",
        duration: "3:45",
        file: "/muzyka/Suckers, OgenkiDesuka？ (Canyon Track 3) (Full Mix).mp3",
      },
      {
        title: "Sugar (Jagz Kooner Remix)",
        artist: "Electro Version",
        duration: "5:30",
        file: "/muzyka/Sugar (Jagz Kooner Remix) (Electro Version).mp3",
      },
      {
        title: "Thee Small Faces",
        artist: "Rock Version Clean",
        duration: "3:20",
        file: "/muzyka/Thee Small Faces (Rock Version) (Clean).mp3",
      },
      {
        title: "Urban Assault (Crew Race Track 1)",
        artist: "Full Mix",
        duration: "5:00",
        file: "/muzyka/Urban Assault (Crew Race Track 1) (Full Mix).mp3",
      },
      {
        title: "Washing Up (Tiga Remix)",
        artist: "Electro Version",
        duration: "6:15",
        file: "/muzyka/Washing Up (Tiga Remix) (Electro Version).mp3",
      },
      {
        title: "What It Look Like",
        artist: "Rap Version Clean",
        duration: "3:35",
        file: "/muzyka/What It Look Like (Rap Version) (Clean).mp3",
      },
      {
        title: "Юлия Гаврилова: Тихий шепот",
        artist: "ПФКИ",
        duration: "4:00",
        file: "/muzyka/Юлия Гаврилова： Тихий шепот (ПФКИ Режисер： Ю.Волев ; Продюсер ： С.Пудовкин).mp3",
      },
      {
        title: "MR Robot",
        artist: "ПФКИ",
        file: "/muzyka/Mr.Robot - Mr.Robot O.S.T Volume 1- (MAC QUAYLE) (OriginalSoundtrack).mp3",
      },
    ]);
  }, []);
 
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
 
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
 
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
 
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);
 
  const playTrack = (track, index) => {
    if (currentTrack === index) {
      togglePlay();
    } else {
      setCurrentTrack(index);
      audioRef.current.src = track.file;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
 
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
 
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
 
  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audioRef.current.currentTime = percentage * duration;
  };
 
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <audio ref={audioRef} />
      
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
             Itachi Ucicha Music Library
            </span>
          </h1>
          <p className="text-gray-500 text-sm">
            {music.length} utworów w bibliotece
          </p>
        </div>
 
        {/* Current Playing Info */}
        {currentTrack !== null && (
          <div className="mb-6 p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center text-3xl border border-red-700/50 flex-shrink-0">
                {isPlaying ? "▶" : "⏸"}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-red-100 truncate">
                  {music[currentTrack].title}
                </h3>
                <p className="text-gray-400 text-sm truncate">
                  {music[currentTrack].artist}
                </p>
              </div>
            </div>
 
            {/* Progress Bar */}
            <div className="mt-4">
              <div 
                className="w-full h-2 bg-gray-800 rounded-full cursor-pointer overflow-hidden"
                onClick={handleSeek}
              >
                <div 
                  className="h-full bg-gradient-to-r from-red-700 to-red-500 transition-all"
                  style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
 
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/50"
            >
              {isPlaying ? "⏸ Pauza" : "▶ Odtwórz"}
            </button>
          </div>
        )}
 
        {/* Playlist */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-red-900/30">
            <h2 className="text-lg font-bold text-red-100">Playlista</h2>
          </div>
          <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-gray-900">
            {music.map((track, index) => (
              <div
                key={index}
                onClick={() => playTrack(track, index)}
                className={`flex items-center justify-between p-4 hover:bg-red-900/10 transition-colors cursor-pointer border-b border-red-900/10 last:border-b-0 group ${
                  currentTrack === index ? 'bg-red-900/20' : ''
                }`}
              >
                {/* Number and Info */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <span className={`text-sm font-mono w-8 flex-shrink-0 ${
                    currentTrack === index ? 'text-red-500 font-bold' : 'text-gray-500'
                  }`}>
                    {index + 1}.
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm truncate transition-colors ${
                      currentTrack === index ? 'text-red-100 font-semibold' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {track.title}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {track.artist}
                    </div>
                  </div>
                </div>
 
                {/* Duration and Play Icon */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-gray-500 text-sm font-mono">
                    {track.duration}
                  </span>
                  {currentTrack === index && isPlaying ? (
                    <span className="text-red-500 text-lg animate-pulse">♪</span>
                  ) : (
                    <span className="text-gray-600 group-hover:text-red-500 text-lg transition-colors">▶</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs italic">
            "Muzyka jest odzwierciedleniem duszy."
          </p>
          <p className="text-red-700 text-xs mt-1">— Toni's Collection</p>
        </div>
      </div>
 
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-600/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}