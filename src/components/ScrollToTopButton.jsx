import React, { useEffect, useState } from 'react';
import { TbSquareRoundedArrowUpFilled } from 'react-icons/tb';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled to the bottom of the page
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= documentHeight - 2000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-10 h-14 hidden lg:block rounded-tr-full right-10 p-2.5 hover:bg-[#FA6006] active:bg-red-500 bg-blue-600 text-white border-none rounded-md cursor-pointer shadow-md transition-opacity duration-300`}
        >
          <TbSquareRoundedArrowUpFilled />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
