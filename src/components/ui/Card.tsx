import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}