import React from "react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="ju-reveal text-4xl sm:text-5xl font-bold text-center">
          Cookie Policy
        </h1>
        <div className="w-32 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>

        <div className="mt-8 space-y-4 text-gray-300 text-lg leading-relaxed">
          <p className="ju-reveal">
            This website uses cookies to enhance your experience. Cookies are small files stored on your device to help remember your preferences and improve functionality.
          </p>
          <p className="ju-reveal">
            You can control or disable cookies in your browser settings, but some features may not function properly without them.
          </p>
          <p className="ju-reveal">
            By continuing to use this site, you consent to the use of cookies as described in this policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
