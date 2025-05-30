import React, { useState } from 'react';
import AnimatedName from './AnimatedName';

function Hero() {
  const [emailDetails, setEmailDetails] = useState({
    subject: 'Hiring Inquiry',
    body: 'Hi, I would like to hire you for a project. Please provide more details.',
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Files/BHARAT(RESUME).pdf';
    link.download = 'Bharat(RESUME)';
    link.click();
  };

  const HireActionPerform = () => {
    const { subject, body } = emailDetails;
    const email = 'b4383d@gmail.com';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex items-center justify-center px-4 py-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl md:mx-55 mt-10">
      <div className="w-full max-w-7xl bg-black/30 backdrop-blur-sm border border-white/10 text-white min-h-[80vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 sm:p-10 lg:p-20 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        
        {/* Image Section with Rotating Border */}
        <div className="mb-8 lg:mb-0 group flex-shrink-0">
          <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 to-blue-500 animate-spin-slow">
            <div className="relative overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 bg-black">
              <img
                className="w-[280px] sm:w-[320px] lg:w-[350px] xl:w-[380px] h-auto object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                src="./img/bharat.png"
                alt="Bharat Patel"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center lg:items-start lg:pl-10 xl:pl-16 gap-4 lg:gap-6 w-full lg:w-auto max-w-lg lg:max-w-xl">
          
          {/* Header Section */}
          <div className="flex flex-col gap-4 text-center lg:text-left w-full">
            
            {/* Hello Section */}
            <div className="flex items-center gap-2 justify-center lg:justify-start group">
              <span className="w-6 h-3 bg-gradient-to-r from-red-500 to-orange-500 inline-block rounded-full animate-pulse group-hover:animate-bounce transition-all duration-300"></span>
              <h4 className="text-xs sm:text-sm font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent tracking-wider hover:from-green-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-500 cursor-pointer">
                👋 Hello, I'm 
              </h4>
            </div>

            {/* Animated Name */}
            <div className="transform transition-all duration-300 hover:scale-105">
              <AnimatedName/>
            </div>

            {/* Role Section */}
            <div className="flex items-center gap-2 justify-center lg:justify-start group">
              <span className="w-12 h-3 bg-gradient-to-r from-red-500 to-orange-500 inline-block rounded-full group-hover:w-16 transition-all duration-500"></span>
              <h4 className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wider hover:from-orange-400 hover:via-red-500 hover:to-yellow-500 transition-all duration-500 cursor-pointer">
                 I’m a
              </h4>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm font-medium leading-relaxed bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-500 cursor-pointer">
              B.Tech CSE student with hands-on experience in web development. I enjoy building user-friendly digital solutions and turning ideas into real projects. I’m always eager to learn more and take on new challenges to grow as a developer.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              className="bg-gradient-to-r from-orange-500 to-red-500 px-5 sm:px-6 font-bold py-2.5 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 hover:from-orange-400 hover:to-red-400 focus:outline-none focus:ring-4 focus:ring-orange-500/30"
              onClick={handleDownload}
            >
              📄 Download CV
            </button>
            <button
              className="bg-gray-900 border-2 border-gray-700 px-5 sm:px-6 font-bold py-2.5 sm:py-3 rounded-full cursor-pointer text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 hover:border-purple-500 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/30"
              onClick={HireActionPerform}
            >
              🚀 Let’s Connect
            </button>
          </div>

          {/* Social Indicators */}
          <div className="flex justify-center lg:justify-start space-x-2 mt-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
