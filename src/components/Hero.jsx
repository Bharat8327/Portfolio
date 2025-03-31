import React, { useState } from 'react';

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
    const email = 'bp609213@gmail.com';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex items-center justify-center px-2 flex-wrap mt-8">
      <div className="py-10 bg-[var(--main-bg)]  sm:w-[70vw] text-white min-h-[80vh] flex flex-col sm:flex-row items-center justify-center sm:justify-between px-5 sm:px-20 rounded-2xl">
        <div className="mb-6 sm:mb-0">
          <img
            className="w-[60vw] sm:w-[25vw] rounded-2xl"
            src="./img/bharat.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center sm:items-start sm:pr-10 gap-6 sm:gap-10">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <div className="mx-3 flex items-center gap-2 mt-4 justify-center sm:justify-start">
              <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
              <h4 className="sm:text-base font-semibold">HELLO, MY NAME IS</h4>
            </div>

            <h1 className="sm:text-7xl text-3xl font-bold">Bharat Patel</h1>

            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-14 h-3.5 bg-red-500 inline-block rounded-full"></span>
              <h4 className="text-base font-semibold">I AM web Developer</h4>
            </div>

            <p className="sm:text-sm text-xs text-[var(--p-text)] max-w-120 font-medium">
              From Jodhpur, Rajasthan. I have rich experience in web design,
              also I am good at problem Solving Skills. I love to talk with you
              about our unique
            </p>
          </div>

          <div className="flex gap-4">
            <button
              className="bg-orange-500 px-5 sm:px-7 font-bold py-3 hover:text-black active:text-white sm:py-4 rounded-full cursor-pointer text-xs"
              onClick={handleDownload}
            >
              Download CV
            </button>
            <button
              className="bg-gray-950 px-5 font-bold py-3 sm:py-4 rounded-full hover:text-[#FA6006] active:text-white  text-xs cursor-pointer"
              onClick={HireActionPerform}
            >
              Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
