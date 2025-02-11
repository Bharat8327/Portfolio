import React from "react";

function SkillsData(props) {
  return (
    <div className="bg-[var(--bg-service)] sm:min-w-[18vw] max-sm:w-[50vw] min-h-40 rounded-full relative mt-10">
          <div
            className={`absolute -top-5 -left-5 w-25 h-25 ${props.color} rounded-full flex items-center justify-center border-8 border-[var(--main-bg)] `}
          >
            <h1 className="text-4xl font-semibold text-[var(--main-bg)]">JS</h1>
          </div>
          
          <div className="absolute w-20 h-20 flex items-center justify-center bg-[var(--main-bg)] -top-8 rounded-full right-2">
            <h1 className="text-[var(--p-text)]">1</h1>
          </div>

            <div className="relative top-18 left-15 flex flex-col gap-4">
              <h1>JavaScript</h1>
                  <div className="w-40 h-5 bg-[#314450] rounded-full">
                      <div className={`${props.color} h-5 w-35 rounded-full flex items-center justify-end px-4`}>
                          <h1 className="text-xs text-black font-semibold">95%</h1>
                      </div>
                  </div>
            </div>
    </div>
  );
}

export default SkillsData;
