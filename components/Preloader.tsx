import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-blue transition-opacity duration-700 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-4xl animate-bounce shadow-2xl">
          S
        </div>
        <div className="absolute -inset-4 bg-brand-yellow rounded-full opacity-20 animate-ping"></div>
      </div>
      
      <div className="text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-2 tracking-widest animate-pulse">SAA FORCE</h2>
        <p className="text-brand-yellow text-sm font-semibold tracking-wider">JANN SHAKTI REVOLUTION</p>
      </div>

      <div className="w-64 h-1 bg-blue-900 rounded-full mt-8 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-brand-orange to-brand-yellow transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-white/50 text-xs mt-2">{Math.round(progress)}%</p>
    </div>
  );
};