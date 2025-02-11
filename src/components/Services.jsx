import React from "react";
import SkillsData from "./SkillsData";

function Services() {
  return (
    <div className="flex justify-center max-sm:w-[70%] mx-auto mt-10">
      <div className="bg-[var(--main-bg)] sm:w-[70vw] w=[70%] text-white min-h-[80vh] justify-center flex sm:p-15 max-sm:py-15 rounded-2xl">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-3.5 bg-gradient-to-r from-red-600 to-orange-500 inline-block rounded-full"></span>
            <h1 className="text-2xl">My Services</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <SkillsData color={"bg-yellow-300"} />
            <SkillsData color={"bg-blue-500"} />
            <SkillsData color={"bg-zinc-600"} />
            <SkillsData color={"bg-[#884498]"} />
            <SkillsData color={"bg-blue-400"} />
            <SkillsData color={"bg-[#8DC601]"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
