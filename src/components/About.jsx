import React from 'react';
import telegram from '../../public/img/telegram.png';
import instagram from '../../public/img/instagram.png';
import github from '../../public/img/github.png';
import twitter from '../../public/img/twitter.png';

function About() {
  const content = [
    {
      title: 'AGE:',
      src: './img/icons/user.svg',
      info: '19',
    },
    {
      title: 'FREELANCE:',
      src: './img/icons/work.svg',
      info: 'Available',
    },
    {
      title: 'PHONE:',
      src: './img/icons/call.svg',
      info: '+91-8345983456',
    },
    {
      title: 'RESIDENCE:',
      src: './img/icons/rocket.svg',
      info: 'India',
    },
    {
      title: 'ADDRESS:',
      src: './img/icons/save.svg',
      info: 'Jodhpur',
    },
    {
      title: 'E-Mail:',
      src: './img/icons/share.svg',
      info: 'bharat@gmail.com',
    },
  ];

  const connect = [
    {
      img: telegram,
      title: 'telegram',
      link: 'https://t.me/bpatell014',
    },
    {
      img: instagram,
      title: 'instagram',
      link: 'https://www.instagram.com/bharat_patell9_/',
    },
    {
      img: github,
      title: 'github',
      link: 'https://github.com/Bharat8327',
    },
    {
      img: twitter,
      title: 'twitter',
      link: 'https://twitter.com/Bharatpatell_',
    },
  ];

  return (
    <div className="flex items-center justify-center mt-6 mb-2">
      <div className="sm:w-[71vw] w-[95%] text-white min-h-[50vh] flex flex-col sm:flex-row gap-6 rounded-2xl">
        <div className="w-full sm:w-[55%] bg-[var(--main-bg)] min-h-[40vh] rounded-2xl py-10 px-6 sm:px-12 flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <span className="w-8 h-3.5 bg-gradient-to-r from-red-600 to-orange-500 inline-block rounded-full"></span>
            <h2 className="text-2xl font-semibold">About Me</h2>
          </div>
          <p className="font-light text-sm sm:text-base">
            Hello,👋 i am Bharat college student , and i am pursuing BTech cse
            now , also i have good experience in MERN stack devloper.
          </p>
          <p className="italic text-[var(--italic)] font-semibold text-sm sm:text-base">
            Apart from this you can also connect with me through this
          </p>
          <div className="flex gap-5 flex-wrap  justify-center">
            {connect.map((value, idx) => {
              return (
                <div
                  key={idx}
                  className="w-15 h-15 no-select flex  select-none items-center justify-center rounded-b-full  hover:bg-amber-100 cursor-pointer active:bg-red-200  "
                  onClick={() => window.open(value.link,'_self')}
                >
                  <img
                    className="pointer-events-none"
                    src={value.img}
                    style={{ width: 30 }}
                    alt={value.title}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full sm:w-[41%] bg-[var(--main-bg)] h-auto rounded-2xl flex flex-col p-6 sm:p-10 gap-4">
          <div className="flex gap-2 items-center">
            <span className="w-8 h-3.5 bg-gradient-to-r from-red-600 to-orange-500 inline-block rounded-full"></span>
            <h2 className="text-2xl font-semibold">Contact Info</h2>
          </div>

          <div className="flex flex-wrap gap-7">
            <div className="flex flex-col gap-2">
              {content.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <img src={item.src} alt="" className="w-4 h-4" />
                  <p className="text-sm text-[var(--italic)]">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {content.map((item, index) => (
                <p key={index} className="text-sm ">
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
