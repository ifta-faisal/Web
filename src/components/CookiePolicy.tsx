import React from "react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Cookie Policy
        </h1>
        <div className="w-32 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600"></div>

        <div className="mt-8 space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            This website uses cookies to enhance your experience. Cookies are small files stored on your device to help remember your preferences and improve functionality.
          </p>
          <p>
            You can control or disable cookies in your browser settings, but some features may not function properly without them.
          </p>
          <p>
            By continuing to use this site, you consent to the use of cookies as described in this policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
