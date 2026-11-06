import React, { useState, useEffect } from 'react';

// --- Inline SVG Icons ---
const IconBluetooth = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/></svg>
);
const IconBluetoothConnected = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/><line x1="18" y1="12" x2="21" y2="12"/><line x1="3" y1="12" x2="6" y2="12"/></svg>
);
const IconBattery = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="7" width="16" height="10" rx="2" ry="2"/><line x1="22" y1="11" x2="22" y2="13"/><rect x="4" y="9" width="12" height="6" fill="currentColor"/></svg>
);
const IconCoffee = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
);
const IconSun = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
);
const IconBaby = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 1.5-2 1.5c-2 0-3.5 1.1-3.5 2.5"/></svg>
);
const IconSnowflake = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/></svg>
);
const IconPower = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>
);
const IconMinus = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"/></svg>
);
const IconPlus = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);

// iOS Home Screen Icons
const IconSafari = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2 text-white" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" stroke="none"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2.5 text-white" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
  </svg>
);
const IconMessages = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2.5 text-white" fill="currentColor">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
);
const IconMusic = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2.5 text-white" fill="currentColor">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);
const IconCamera = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2.5 text-white" fill="currentColor">
    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
);
const IconSettings = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2.5 text-gray-200" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);
const IconPhotos = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);
const IconWeather = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2 text-yellow-300" fill="currentColor">
    <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.28 10.05A5.5 5.5 0 0012 9c-2.48 0-4.59 1.64-5.28 3.91A4.5 4.5 0 007.5 22h11a3.5 3.5 0 00.17-6.99z"/>
  </svg>
);

export default function App() {
  // Navigation State
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  // Smart Cup State
  const [isConnected, setIsConnected] = useState(false);
  const [currentTemp, setCurrentTemp] = useState(25); // Room temp
  const [targetTemp, setTargetTemp] = useState(58);
  const [mode, setMode] = useState('standby'); // standby, heating, cooling, ready
  const [theme, setTheme] = useState('pink'); // pink, green, blue, cream

  // Time for iPhone status bar
  const [currentTime, setCurrentTime] = useState('09:41');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  // Theme configurations matching the physical cup colors
  const themes = {
    pink: {
      bg: 'bg-pink-50',
      text: 'text-pink-800',
      accent: 'bg-pink-400',
      accentHover: 'hover:bg-pink-500',
      textAccent: 'text-pink-500',
      border: 'border-pink-200',
      glow: 'shadow-pink-200',
      circle: 'stroke-pink-400'
    },
    green: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-800',
      accent: 'bg-emerald-400',
      accentHover: 'hover:bg-emerald-500',
      textAccent: 'text-emerald-500',
      border: 'border-emerald-200',
      glow: 'shadow-emerald-200',
      circle: 'stroke-emerald-400'
    },
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      accent: 'bg-blue-400',
      accentHover: 'hover:bg-blue-500',
      textAccent: 'text-blue-500',
      border: 'border-blue-200',
      glow: 'shadow-blue-200',
      circle: 'stroke-blue-400'
    },
    cream: {
      bg: 'bg-orange-50',
      text: 'text-amber-800',
      accent: 'bg-amber-300',
      accentHover: 'hover:bg-amber-400',
      textAccent: 'text-amber-500',
      border: 'border-amber-200',
      glow: 'shadow-amber-200',
      circle: 'stroke-amber-300'
    }
  };

  const t = themes[theme];

  // Temperature simulation effect
  useEffect(() => {
    let interval;
    if (isConnected && mode !== 'standby') {
      interval = setInterval(() => {
        setCurrentTemp((prev) => {
          if (prev < targetTemp) {
            setMode('heating');
            return Math.min(prev + 1, targetTemp);
          } else if (prev > targetTemp) {
            setMode('cooling');
            return Math.max(prev - 1, targetTemp);
          } else {
            setMode('ready');
            return prev;
          }
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isConnected, targetTemp, currentTemp, mode]);

  // Handle Target Temp Change
  const adjustTemp = (amount) => {
    const newTemp = targetTemp + amount;
    if (newTemp >= 0 && newTemp <= 100) {
      setTargetTemp(newTemp);
      if (newTemp !== currentTemp) {
        setMode(newTemp > currentTemp ? 'heating' : 'cooling');
      }
    }
  };

  // Launch app with zoom animation
  const handleLaunchApp = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsAppOpen(true);
      setIsOpening(false);
    }, 250);
  };

  // Close app (Home bar click)
  const handleCloseApp = () => {
    setIsAppOpen(false);
  };

  // Presets
  const presets = [
    { name: 'Coffee', temp: 85, icon: <IconCoffee size={18} /> },
    { name: 'Warm', temp: 58, icon: <IconSun size={18} /> },
    { name: 'Baby Milk', temp: 40, icon: <IconBaby size={18} /> },
    { name: 'Cold', temp: 10, icon: <IconSnowflake size={18} /> }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-950 flex flex-col items-center justify-center p-2 sm:p-6 font-sans select-none overflow-x-hidden">
      
      {/* Interactive Guide Banner */}
      <div className="mb-3 text-center px-2">
        <h2 className="text-white font-bold text-lg sm:text-xl tracking-tight flex items-center justify-center gap-2">
          <span>📱</span> iPhone Experience Simulator
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          {isAppOpen ? (
            <span className="text-emerald-400 font-medium">⚡ กำลังอยู่ในแอป Smart Cup — แตะแถบ Home Bar สีดำด้านล่างเพื่อกลับหน้าจอหลัก</span>
          ) : (
            <span className="text-pink-300 font-medium">👉 แตะที่ไอคอน <b>Smart Cup</b> บนหน้าจอ iPhone เพื่อเปิดเข้าแอป</span>
          )}
        </p>
      </div>

      {/* --- iPhone 16 Pro Device Mockup --- */}
      <div className="relative w-full max-w-[380px] h-[750px] sm:h-[800px] bg-[#1a1a1a] rounded-[48px] sm:rounded-[52px] p-[8px] sm:p-[10px] shadow-[0_25px_70px_rgba(0,0,0,0.85)] ring-1 ring-white/20 border-2 sm:border-4 border-[#2d2d2d] flex flex-col mx-auto">
        
        {/* Physical Side Buttons (desktop/tablet only to avoid mobile horizontal scroll) */}
        <div className="hidden sm:block absolute -left-[14px] top-28 w-[3px] h-12 bg-zinc-600 rounded-l-md" title="Action Button"></div>
        <div className="hidden sm:block absolute -left-[14px] top-44 w-[3px] h-14 bg-zinc-600 rounded-l-md" title="Volume Up"></div>
        <div className="hidden sm:block absolute -left-[14px] top-60 w-[3px] h-14 bg-zinc-600 rounded-l-md" title="Volume Down"></div>
        <div className="hidden sm:block absolute -right-[14px] top-40 w-[3px] h-20 bg-zinc-600 rounded-r-md" title="Power Button"></div>

        {/* --- iPhone Screen Bezel & Display --- */}
        <div className="relative w-full h-full rounded-[44px] overflow-hidden flex flex-col bg-black">
          
          {/* Top Status Bar (Always Visible) */}
          <div className="relative z-40 w-full pt-3 px-7 flex justify-between items-center text-xs font-semibold text-white">
            <span className="tracking-tight text-[13px]">{currentTime}</span>
            <div className="flex items-center gap-1.5 text-white">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.64 10.56 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
              </svg>
              <span className="text-[11px] font-bold">5G</span>
              <div className="w-5 h-2.5 border border-white/80 rounded-sm p-[1px] flex items-center">
                <div className="h-full bg-white rounded-2xs w-4"></div>
              </div>
            </div>
          </div>

          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
            {isConnected && mode !== 'standby' ? (
              // Active Dynamic Island Activity
              <div 
                onClick={() => setIsAppOpen(true)}
                className="h-7 px-3 bg-black rounded-full flex items-center gap-2 shadow-lg border border-zinc-800/80 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                <span className="text-white text-[11px] font-semibold flex items-center gap-1">
                  <span>☕</span> {currentTemp}°C ({mode})
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
              </div>
            ) : (
              // Default Island
              <div className="w-[110px] h-[28px] bg-black rounded-full flex items-center justify-end px-3">
                <div className="w-3 h-3 rounded-full bg-[#0a0a14] border border-[#1b1b22]"></div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SCREEN CONTENT: HOME SCREEN vs SMART CUP APP             */}
          {/* ======================================================== */}
          
          <div className="relative w-full h-full flex flex-col flex-1 overflow-hidden">
            
            {/* ------------------------------------------------------ */}
            {/* 1. iOS HOME SCREEN                                    */}
            {/* ------------------------------------------------------ */}
            <div 
              className={`absolute inset-0 flex flex-col justify-between p-5 pt-8 bg-cover bg-center transition-all duration-300 ${
                isAppOpen ? 'scale-90 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
              }`}
              style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, #4338ca 0%, #1e1b4b 35%, #0f172a 100%)`
              }}
            >
              {/* Widgets Row */}
              <div className="grid grid-cols-2 gap-3.5 mt-2">
                {/* Weather Widget */}
                <div className="bg-white/15 backdrop-blur-xl p-3.5 rounded-3xl border border-white/20 shadow-md text-white flex flex-col justify-between h-32">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[11px] font-medium opacity-80">Bangkok</p>
                      <h3 className="text-2xl font-bold">31°</h3>
                    </div>
                    <div className="w-8 h-8"><IconWeather /></div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Partly Cloudy</p>
                    <p className="text-[10px] opacity-75">H:34° L:26°</p>
                  </div>
                </div>

                {/* Calendar / Smart Mug Status Widget */}
                <div className="bg-white/15 backdrop-blur-xl p-3.5 rounded-3xl border border-white/20 shadow-md text-white flex flex-col justify-between h-32">
                  <div>
                    <p className="text-rose-400 text-[11px] font-bold uppercase tracking-wider">FRIDAY</p>
                    <h3 className="text-3xl font-extrabold tracking-tight">6</h3>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>Smart Cup</span>
                    </div>
                    <p className="text-[10px] text-white/70">
                      {isConnected ? `Connected • ${currentTemp}°C` : 'Tap icon to launch'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Apps Grid */}
              <div className="grid grid-cols-4 gap-y-5 gap-x-3 my-auto px-1">
                
                {/* Regular Apps */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                    <IconPhotos />
                  </div>
                  <span className="text-[11px] text-white font-medium drop-shadow">Photos</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-zinc-700 to-zinc-900 flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                    <IconCamera />
                  </div>
                  <span className="text-[11px] text-white font-medium drop-shadow">Camera</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-400 to-slate-600 flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                    <IconSettings />
                  </div>
                  <span className="text-[11px] text-white font-medium drop-shadow">Settings</span>
                </div>

                {/* ⭐⭐⭐ THE SMART CUP APP ICON (TARGET) ⭐⭐⭐ */}
                <div 
                  onClick={handleLaunchApp}
                  className="flex flex-col items-center gap-1 cursor-pointer group"
                >
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 via-rose-400 to-amber-300 flex items-center justify-center shadow-[0_8px_20px_rgba(244,63,94,0.45)] group-hover:scale-110 group-active:scale-95 transition-all duration-200 ring-2 ring-white/60">
                    <IconCoffee size={28} className="text-white drop-shadow-md" />
                    {/* Glowing Notification Pulse */}
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                    </span>
                  </div>
                  <span className="text-[11px] text-white font-bold drop-shadow flex items-center gap-0.5 group-hover:text-pink-200">
                    Smart Cup
                  </span>
                </div>

              </div>

              {/* Page Indicator Dots & Search Pill */}
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                </div>
                <div className="bg-black/30 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] text-white/90 font-medium flex items-center gap-1 border border-white/10">
                  <svg className="w-3 h-3 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  <span>Search</span>
                </div>
              </div>

              {/* iOS Bottom Dock */}
              <div className="bg-white/20 backdrop-blur-2xl p-3 rounded-[32px] border border-white/20 shadow-xl flex justify-around items-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-md active:scale-95 transition-transform">
                  <IconPhone />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center shadow-md active:scale-95 transition-transform">
                  <IconSafari />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-md active:scale-95 transition-transform">
                  <IconMessages />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shadow-md active:scale-95 transition-transform">
                  <IconMusic />
                </div>
              </div>

            </div>

            {/* ------------------------------------------------------ */}
            {/* 2. SMART CUP REACT APP INTERFACE                       */}
            {/* ------------------------------------------------------ */}
            <div 
              className={`absolute inset-0 flex flex-col justify-between transition-all duration-300 origin-center ${
                isAppOpen 
                  ? 'scale-100 opacity-100 z-30' 
                  : isOpening 
                    ? 'scale-90 opacity-50 z-30 pointer-events-none' 
                    : 'scale-75 opacity-0 pointer-events-none z-0'
              } ${t.bg}`}
            >
              
              {/* Not Connected View */}
              {!isConnected ? (
                <div className="flex-1 flex flex-col items-center justify-center px-6 text-center select-none pt-4">
                  <div className={`w-28 h-28 rounded-full ${t.accent} bg-opacity-20 flex items-center justify-center mb-6 animate-pulse`}>
                    <IconBluetooth size={44} className={t.textAccent} />
                  </div>
                  <h1 className={`text-2xl sm:text-3xl font-bold ${t.text} mb-2`}>Smart Cup</h1>
                  <p className={`${t.text} opacity-75 text-xs sm:text-sm text-center mb-8 max-w-[240px]`}>
                    Make sure your cup is powered on to pair via Bluetooth.
                  </p>
                  <button 
                    onClick={() => setIsConnected(true)}
                    className={`w-full max-w-[240px] py-3.5 rounded-2xl ${t.accent} text-white font-semibold text-base shadow-lg ${t.accentHover} active:scale-95 transition-all cursor-pointer`}
                  >
                    Connect Cup
                  </button>
                  
                  {/* Theme selector on login screen */}
                  <div className="flex gap-3.5 mt-8">
                    {Object.keys(themes).map((color) => (
                      <button
                        key={color}
                        onClick={() => setTheme(color)}
                        className={`w-8 h-8 rounded-full border-3 cursor-pointer ${theme === color ? 'border-gray-800 scale-110 shadow-md' : 'border-transparent'} transition-all ${
                          color === 'pink' ? 'bg-pink-300' :
                          color === 'green' ? 'bg-emerald-300' :
                          color === 'blue' ? 'bg-blue-300' : 'bg-amber-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                // Connected View
                <div className="flex-1 flex flex-col justify-between pt-1 pb-1">
                  
                  {/* Top Bar inside App */}
                  <div className={`flex justify-between items-center px-6 pt-3 ${t.text}`}>
                    <div className="flex items-center gap-1.5">
                      <IconBluetoothConnected size={18} className={t.textAccent} />
                      <span className="font-semibold text-xs">Connected</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-xs">84%</span>
                      <IconBattery size={20} className={t.textAccent} />
                    </div>
                  </div>

                  {/* Main Gauge Content */}
                  <div className="flex flex-col items-center justify-center px-4">
                    
                    {/* Status Badge */}
                    <div className="mb-2.5 h-6 flex items-center">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${
                        mode === 'heating' ? 'bg-red-100 text-red-600' :
                        mode === 'cooling' ? 'bg-blue-100 text-blue-600' :
                        mode === 'ready' ? 'bg-green-100 text-green-600' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {mode === 'ready' ? 'Ready to Drink' : mode}
                      </span>
                    </div>

                    {/* Circular Temp Gauge */}
                    <div className="relative w-46 h-46 sm:w-50 sm:h-50 flex items-center justify-center mb-3">
                      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                        <circle 
                          cx="50%" cy="50%" r="42%" 
                          className={`stroke-current ${t.text} opacity-10`} 
                          strokeWidth="7" fill="transparent" 
                        />
                        <circle 
                          cx="50%" cy="50%" r="42%" 
                          className={`${t.circle} transition-all duration-500 ease-out`} 
                          strokeWidth="7" fill="transparent"
                          strokeDasharray="550"
                          strokeDashoffset={550 - (550 * (currentTemp / 100))}
                          strokeLinecap="round"
                        />
                      </svg>
                      
                      {/* Inner Circle Info */}
                      <div className={`absolute inset-3 rounded-full bg-white shadow-lg ${t.glow} flex flex-col items-center justify-center`}>
                        <span className={`text-5xl font-black ${t.text} tracking-tighter`}>
                          {currentTemp}°
                        </span>
                        <span className={`${t.textAccent} font-medium text-xs mt-0.5`}>
                          Current Temp
                        </span>
                      </div>
                    </div>

                    {/* Temperature Controls */}
                    <div className={`w-full max-w-[280px] bg-white/70 backdrop-blur-sm rounded-2xl p-2.5 flex items-center justify-between shadow-sm border ${t.border} mb-2.5`}>
                      <button 
                        onClick={() => adjustTemp(-1)}
                        className={`w-11 h-11 rounded-full flex items-center justify-center cursor-pointer ${t.bg} ${t.textAccent} hover:bg-white active:scale-90 transition-all`}
                      >
                        <IconMinus size={20} />
                      </button>
                      
                      <div className="flex flex-col items-center">
                        <span className={`text-[10px] font-semibold ${t.textAccent} uppercase tracking-wider`}>Set Temp</span>
                        <span className={`text-2xl sm:text-3xl font-bold ${t.text}`}>{targetTemp}°C</span>
                      </div>

                      <button 
                        onClick={() => adjustTemp(1)}
                        className={`w-11 h-11 rounded-full flex items-center justify-center cursor-pointer ${t.accent} text-white ${t.accentHover} shadow-md active:scale-90 transition-all`}
                      >
                        <IconPlus size={20} />
                      </button>
                    </div>

                    {/* Presets Grid */}
                    <div className="grid grid-cols-4 gap-2 w-full max-w-[280px]">
                      {presets.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => {
                            setTargetTemp(preset.temp);
                            setMode(preset.temp > currentTemp ? 'heating' : preset.temp < currentTemp ? 'cooling' : 'ready');
                          }}
                          className={`flex flex-col items-center justify-center p-2 rounded-xl border cursor-pointer active:scale-90 ${
                            targetTemp === preset.temp 
                              ? `${t.accent} text-white border-transparent shadow-md` 
                              : `bg-white ${t.text} ${t.border} hover:bg-opacity-70`
                          } transition-all`}
                        >
                          <div className="mb-1">{preset.icon}</div>
                          <span className="text-[10px] font-bold text-center leading-tight">{preset.name}</span>
                        </button>
                      ))}
                    </div>

                  </div>

                  {/* App Bottom Bar */}
                  <div className={`px-6 py-2 flex justify-between items-center bg-white/40 backdrop-blur-md border-t ${t.border}`}>
                    <button 
                      onClick={() => {
                        setIsConnected(false);
                        setMode('standby');
                      }}
                      className={`p-2.5 rounded-full bg-white shadow-sm cursor-pointer ${t.textAccent} hover:bg-red-50 hover:text-red-500 active:scale-90 transition-colors`}
                      title="Disconnect Power"
                    >
                      <IconPower size={18} />
                    </button>
                    
                    <div className="flex gap-2.5">
                      {Object.keys(themes).map((color) => (
                        <button
                          key={color}
                          onClick={() => setTheme(color)}
                          className={`w-6 h-6 rounded-full shadow-inner cursor-pointer ${theme === color ? 'ring-2 ring-offset-1 ring-gray-600 scale-110' : ''} transition-transform ${
                            color === 'pink' ? 'bg-pink-300' :
                            color === 'green' ? 'bg-emerald-300' :
                            color === 'blue' ? 'bg-blue-300' : 'bg-amber-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>

          {/* --- iOS Home Bar (Bottom Swipe Indicator) --- */}
          <div className="relative z-50 w-full py-2 bg-transparent flex flex-col items-center justify-center">
            <button
              onClick={handleCloseApp}
              className={`w-32 h-1 rounded-full transition-all duration-300 cursor-pointer ${
                isAppOpen 
                  ? 'bg-zinc-800/80 hover:bg-zinc-950 hover:h-1.5 active:scale-95' 
                  : 'bg-white/70 hover:bg-white'
              }`}
              title={isAppOpen ? "แตะเพื่อกลับหน้า Home Screen" : "Home Indicator"}
            />
          </div>

        </div>
      </div>

    </div>
  );
}
