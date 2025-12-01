import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'gray' | 'blue' | 'pattern';
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'white' }) => {
  let bgClass = 'bg-white';
  if (bg === 'gray') bgClass = 'bg-gray-50';
  if (bg === 'blue') bgClass = 'bg-brand-blue text-white';
  if (bg === 'pattern') bgClass = 'bg-brand-light bg-[url("https://www.transparenttextures.com/patterns/cubes.png")]';

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};
