import React from 'react';

const PageLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full bg-transparent">
      <div className="relative flex flex-col items-center justify-center space-y-4">
        {/* Modern clean spinner */}
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-sm text-gray-500 uppercase tracking-widest animate-pulse">Loading</p>
      </div>
    </div>
  );
};

export default PageLoader;
