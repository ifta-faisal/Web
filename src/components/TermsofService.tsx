import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Terms of Service
        </h1>
        <div className="w-32 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600"></div>

        <div className="mt-8 space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            By using this website, you agree to comply with our terms and conditions. The services provided are for informational purposes and may be updated without notice.
          </p>
          <p>
            Users are responsible for maintaining the confidentiality of any account credentials and for all activities under their account.
          </p>
          <p>
            We reserve the right to suspend or terminate accounts that violate our policies or misuse the platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
