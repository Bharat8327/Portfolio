import React, { useState } from 'react';

function CertificateCarousel() {
  const [imgIdx, setImgIdx] = useState(0);
  const certificate = [
    { src: './img/DSA.png', alt: 'DSA' },
    { src: './img/C++.png', alt: 'C++' },
    { src: './img/JAVA.png', alt: 'JAVA' },
    { src: './img/OOPS.png', alt: 'OOPS' },
    { src: './img/C.png', alt: 'C' },
    { src: './img/Pledege.png', alt: 'Pledege' },
  ];

  const left = () => {
    const val = imgIdx === 0 ? certificate.length - 1 : imgIdx - 1;
    setImgIdx(val);
  };

  const right = () => {
    const val = imgIdx === certificate.length - 1 ? 0 : imgIdx + 1;
    setImgIdx(val);
  };

  return (
    <div className="flex justify-center px-2 mt-6">
      <div className="bg-[var(--main-bg)] sm:w-[67vw]   text-white sm:min-h-[80vh] flex flex-col gap-4 sm:p-15 max-sm:py-8 max-sm:px-4 rounded-2xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl">
              My Certificates
            </h1>
          </div>
        </div>

        <div className="sm:pt-6">
          <div className="flex justify-between items-center">
            <button
              className="pr-3 text-cyan-300 hover:text-cyan-500 transition cursor-pointer px-3 py-1  rounded-md"
              onClick={left}
            >
              Left
            </button>
            <img
              className="sm:w-260 w-auto sm:h-140 md:w-[80%] md:h-auto max-sm:w-[70%] sm:object-cover rounded-2xl px-2"
              src={certificate[imgIdx].src}
              alt={certificate[imgIdx].alt}
            />
            <button
              className="pl-1 text-cyan-300 hover:text-cyan-500 transition cursor-pointer px-3 py-1 rounded-md"
              onClick={right}
            >
              Right
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateCarousel;
