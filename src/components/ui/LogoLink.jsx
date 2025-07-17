import React from 'react';
import clsx from 'clsx';

export default function LogoLink({ src, className = '' }) {
  return (
    <div className={clsx('flex-shrink-0', className)}>
      <a href="/" className="flex items-center space-x-3">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-yellow-800/60 backdrop-blur-sm border border-white/30 shadow-lg">
          <img
            src={src}
            alt="ELLA SKIN & SPA WELLNESS"
            className="h-10 w-auto"
          />
        </div>
      </a>
    </div>
  );
}
