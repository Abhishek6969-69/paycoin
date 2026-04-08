import React from 'react';

const Sparkline = () => {
  return (
    <div className="h-8 w-full">
      <svg width="100%" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
        <polyline points="0,24 20,20 40,12 60,16 80,8 100,10 120,6" stroke="#0EA5E9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </svg>
    </div>
  );
};

export default Sparkline;
