import React from 'react';

function NavBar() {
  const header = ['About', 'Services', 'Projects', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-between sm:w-[78vw] items-center h-12 bg-[var(--main-bg)] rounded-br-full rounded-tl-full mt-3 mx-auto px-15 text-[16px] text-white">
      <div>
        <h1>Bharat</h1>
      </div>
      <ul className="hidden md:flex gap-10 text-sm cursor-pointer">
        {header.map((el, idx) => (
          <li key={idx} className="text-black-800 hover:text-[#FA6006]" onClick={() => scrollToSection(el)}>
            {el}
          </li>
        ))}
      </ul>
      <ul className="flex md:hidden gap-5 text-sm cursor-pointer">
        {header.slice(0, 2).map((el, idx) => (
          <li key={idx} className="text-black-800 hover:text-[var(--p-text)]" onClick={() => scrollToSection(el)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;