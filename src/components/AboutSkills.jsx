import React from 'react';
import aashish from '../../public/img/Harry.png';

function AboutSkills() {
  const skill1 = [
    { src: './skills/atom.png', name: 'react' },
    { src: './img/javascript.webp', name: 'javascript' },
    { src: './img/tailwind.Default', name: 'tailwind' },
    { src: './skills/nodejs.png', name: 'nodejs' },
    { src: './skills/database-storage.png', name: 'monogdb' },
    { src: './skills/c- (1).png', name: 'c++' },
    { src: './skills/social.png', name: 'social' },
    { src: './img/html.svg', name: 'html' },
    { src: './img/css.webp', name: 'css' },
    { src: './img/html.svg', name: 'html' },
  ];
  const imag = [
    { src: './img/quote.svg', name: 'quote' },
    { src: './img/review.svg', name: 'review' },
  ];

  return (
    <div className="flex items-center flex-wrap justify-center px-2 ">
      <div className="sm:w-[68vw] text-white min-h-[50vh] max-sm:flex-wrap flex gap-8 items-center justify-between rounded-2xl">
        <div className="sm:w-[65%]  bg-[var(--main-bg)] min-h-[40vh] rounded-2xl py-10 px-12 flex flex-col gap-8">
          <div className="flex gap-2 items-center justify-center">
            <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
            <h2 className="text-2xl font-semibold">About My Skill</h2>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            {skill1.map((value, idx) => {
              return (
                <div
                  key={idx}
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-white "
                >
                  <img src={value.src} alt={value.name} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="sm:w-[55%]  bg-[var(--main-bg)] min-h-[40vh] gap-5 rounded-2xl p-10">
          <div>
            <div className="flex gap-5 items-end">
              {imag.map((el, idx) => (
                <div key={idx}>
                  <img src={el.src} alt={el.name} />
                </div>
              ))}
            </div>
            <div className="pt-3 flex items-center ">
              <img src={aashish} className='w-25 h-24 rounded-full' alt="user1" />
              <div className="flex flex-col  gap-1 pl-3 text-xl font-semibold">
                <h3>Aashish Joshi</h3>
                <p className="text-sm text-amber-200">Friends</p>
              </div>
            </div>
            <div className="pt-3">
              <p>
                Since 1985 Reed has pioneered specialist recruitment Sourcing
                knowledgeable,skilled professionals.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSkills;
