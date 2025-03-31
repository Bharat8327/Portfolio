import React from 'react';

function SkillsData(props) {
  return (
    <div className="bg-[var(--bg-service)] sm:min-w-[18vw] max-sm:w-[80vw] min-h-40 rounded-full relative mt-10">
      <div
        className={`absolute -top-5 -left-5 w-20 h-20 sm:w-25 sm:h-25 ${props.color} rounded-full flex items-center justify-center border-8 border-[var(--main-bg)]`}
      >
        <h1 className="text-2xl sm:text-4xl font-semibold text-[var(--main-bg)]">
          {props.skills.slice(0, 2)}
        </h1>
      </div>

      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-[var(--main-bg)] -top-8 rounded-full right-2">
        <h1 className="text-sm sm:text-base text-[var(--p-text)]">1</h1>
      </div>

      <div className="relative top-16 sm:top-18 left-10 sm:left-15 flex flex-col gap-2 sm:gap-4">
        <h1 className="text-sm sm:text-base">{props.skills}</h1>
        <div className="w-32 sm:w-[60%] h-4 sm:h-5 bg-[#314450] rounded-full">
          <div
            className={`${props.color} h-4 sm:h-5 rounded-full flex items-center justify-end px-2 sm:px-4`}
            style={{ width: `${props.per}%` }} 
          >
            <h1 className="text-[10px] sm:text-xs text-black font-semibold">
              {props.per}%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsData;