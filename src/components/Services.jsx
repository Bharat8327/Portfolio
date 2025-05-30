import React from 'react';
import ServicesCards from './ServicesCards';
import { MessageSquare, TrendingUp, Globe } from 'lucide-react';

function Services() {
  const cards = [
    {
      id: 1,
      title: "Study Performance",
      description: "B.Tech CSE student passionate about software development, continuously learning and improving technical skills to excel in the industry. ",
      icon: MessageSquare,
      borderColor: "from-purple-500 via-blue-500 to-purple-500",
      emoji: "📚"
    },
    {
      id: 2,
       title: "Web Development",
      description: "I am a Web Developer and I have completed many projects. All truly with my knowledge. ",
        icon: TrendingUp,
      borderColor: "from-orange-500 via-yellow-500 to-orange-500",
      emoji: "🌐"
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "End-to-end development solutions covering both frontend and backend technologies.",
      icon: Globe,
      borderColor: "from-green-500 via-teal-500 to-green-500",
      emoji: "💻"
    }
  ];
  return (
    <div className="flex justify-center mt-6 w-full px-2">
       <div className="bg-[var(--main-bg)] sm:w-[67vw]  text-white  flex justify-center p-5 sm:p-10 rounded-2xl">
       
      <div className="flex flex-col items-center gap-6 sm:gap-10 w-full max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="w-8 h-3.5 bg-gradient-to-r from-red-600 to-orange-500 inline-block rounded-full"></span>
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white">My Services</h1>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full justify-center items-stretch">
            <ServicesCards cards={cards} />
          </div>
        </div>
        <div className="text-center ">
          <p className="text-gray-600 mb-4">
            Want to be friends?
            <span className="font-semibold text-blue-600 ml-1 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/bharat-patell-203a62257/')}> Message me!🤗</span>
            <span className="block w-[300px] h-1 bg-gradient-to-r from-blue-600 via-orange-600 to-yellow-600"></span>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Services;