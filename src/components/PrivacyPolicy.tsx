import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="ju-reveal text-4xl sm:text-5xl font-bold text-center">
          Privacy Policy
        </h1>
        <div className="w-32 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>

        <div className="mt-8 space-y-4 text-gray-300 text-lg leading-relaxed">
          <p className="ju-reveal">
            Your privacy is important to us. We collect only necessary data to improve our services and ensure a safe experience. All personal information is handled securely and will not be shared with third parties without your consent.
          </p>
          <p className="ju-reveal">
            By using our website, you agree to this privacy policy and consent to data collection as described.
          </p>
          <p className="ju-reveal">
            We may update this policy from time to time. Any updates will be posted here, and we encourage you to review it regularly.
          </p>
      </div>
    </div>
  </div>
  );
};

export default PrivacyPolicy;
