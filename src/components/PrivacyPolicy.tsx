import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Privacy Policy
        </h1>
        <div className="w-32 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600"></div>

        <div className="mt-8 space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            Your privacy is important to us. We collect only necessary data to improve our services and ensure a safe experience. All personal information is handled securely and will not be shared with third parties without your consent.
          </p>
          <p>
            By using our website, you agree to this privacy policy and consent to data collection as described.
          </p>
          <p>
            We may update this policy from time to time. Any updates will be posted here, and we encourage you to review it regularly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
