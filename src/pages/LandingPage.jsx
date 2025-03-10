import React from 'react';

const LandingPage = () => {

  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="opacity-100 hero-text mt-8 text-5xl font-semibold">
              <span className="text-[#b5b25c] block mt-5">
                Identity Management System
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-10 mt-16">
              A revolutionary platform that combines decentralized identifiers
              and non-fungible tokens to give you complete control over your digital identity
              and secure access to your files.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="h-11 px-5 py-2.5 text-lg bg-[#b5b25c] text-white rounded-md transition flex items-center justify-center cursor-pointer">
                Get Started
              </button>
              <button className="h-11 px-5 py-2.5 text-lg border border-gray-300 bg-[#b5b25c] text-white rounded-md transition flex items-center justify-center cursor-pointer">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
