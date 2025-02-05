import React from "react";

function About() {
  const content = [
    {
      title: "AGE:",
      src: "./img/icons/user.svg",
      info: "19",
    },
    {
      title: "FREELANCE:",
      src: "./img/icons/work.svg",
      info: "Available",
    },
    {
      title: "PHONE:",
      src: "./img/icons/call.svg",
      info: "+91-8345983456",
    },
    {
      title: "RESIDENCE:",
      src: "./img/icons/rocket.svg",
      info: "India",
    },
    {
      title: "ADDRESS:",
      src: "./img/icons/save.svg",
      info: "Jodhpur",
    },
    {
      title: "E-Mail:",
      src: "./img/icons/share.svg",
      info: "bharat@gmail.com",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="sm:w-[70vw] w-[70%] text-white  min-h-[50vh] flex gap-8 items-center justify-between rounded-2xl max-sm:flex-wrap">
        <div className="sm:w-[100%] bg-[var(--main-bg)] min-h-[40vh] rounded-2xl py-10 px-12 flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <span className="w-8 h-3.5 bg-gradient-to-r from-red-600 to-orange-500 inline-block rounded-full"></span>
            <h2 className="text-2xl font-semibold">About Me</h2>
          </div>
          <p className="font-light">
            Hi I am a Front-End developer & I can build your website as you
            want. <br /> customize plugin & wordpress theme. And I have years of
            experience in figma. Now I am able to design your portfolio.
          </p>
          <p className="italic text-[var(--italic)] font-semibold ">
            I have three years of experience with HTML, CSS, JavaScript.
          </p>
        </div>

        <div className="sm:w-[60%] bg-[var(--main-bg)] h-[40vh] w-[100%] rounded-2xl flex flex-col p-10 gap-4">
          <div className="flex gap-2 items-center">
            <span className="w-8 h-3.5 bg-gradient-to-r from-red-600 to-orange-500 inline-block rounded-full"></span>
            <h2 className="text-2xl font-semibold">About Me</h2>
          </div>

          <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            {content.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <img src={item.src} alt="" className="w-4 h-4" />
                <p className="text-sm text-[var(--italic)] ">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {content.map((item, index) => (
                <p key={index} className="text-sm">
                  {item.info}
                </p>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
