import React from "react";

function NavBar() {
  const header = ["Home", "About", "Service", "Resume", "Project", "Contact"];

  return (
    <div className="flex justify-between sm:w-[70vw] w-[70%] items-center h-12 bg-[var(--main-bg)] rounded-full mt-8 mx-auto px-15 text-[16px] text-white">
      <div>
        <h1>Bharat</h1>
      </div>
      <ul className="flex gap-10 text-sm cursor-pointer max-sm:hidden">
        {header.map((el, idx) => (
          <li key={idx} className="text-black-800 hover:text-[var(--p-text)] ">
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
