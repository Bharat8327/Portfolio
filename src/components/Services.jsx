import React from 'react';
import SkillsData from './SkillsData';

function Services() {
  return (
    <div className="flex justify-center mt-6 w-full px-2 ">
      <div className="bg-[var(--main-bg)] sm:w-[67vw]  text-white min-h-[80vh] flex justify-center p-5 sm:p-10 rounded-2xl">
        <div className="flex flex-col items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-3.5 bg-gradient-to-r from-red-600 to-orange-500 inline-block rounded-full"></span>
            <h1 className="text-xl sm:text-2xl">My Services</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10">
            <SkillsData
              color={'bg-yellow-300'}
              skills={'javaScript'}
              per={60}
            />
            <SkillsData color={'bg-blue-500'} skills={'React'} per={80} />
            <SkillsData color={'bg-zinc-600'} skills={'Tailwindcss'} per={60} />
            <SkillsData color={'bg-[#884498]'} skills={'Nodejs'} per={70} />
            <SkillsData color={'bg-blue-400'} skills={'express'} per={60} />
            <SkillsData color={'bg-[#8DC601]'} skills={'Mongoose'} per={70} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
