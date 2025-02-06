import React, { useState } from 'react'

function CertificateCarousel() {
    // const certifiCate = [{src:'./img/bharat.png',name:"DSA"},{src:"./certifiCate/C++.png",name:"c++"},{src:"./certifiCate/Java.png",name:"Java"},{src:"./certifiCate/OOps.png",name:"OOPS"},{src:"./certifiCate/c.png",name:"c"},{src:"./certifiCate/Pledege.png",name:"pledege"}];
    
    const [imgIdx,setImgIdx] = useState(0);
    const certificate = [{src:"./img/DSA.png",alt:"DSA"},{src:"./img/C++.png",alt:"C++"},{src:"./img/JAVA.png",alt:"JAVA"},{src:"./img/OOPS.png",alt:"OOPS"},{src:"./img/C.png",alt:"C"},{src:"./img/Pledege.png",alt:"Pledege"}];

        const left = ()=>{
            const val = imgIdx===0?certificate.length-1:imgIdx-1;
            setImgIdx(val);
        }
        const right = ()=>{
            const val = imgIdx===certificate.length-1?0:imgIdx+1;
            setImgIdx(val);
        }
    


  return (
        
        <div className="flex justify-center mt-10">
                 <div className="bg-[var(--main-bg)] sm:w-[70vw] w-[70%] text-white min-h-[80vh] justify-center flex-col gap-4 flex p-15 rounded-2xl">
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
                            <h1 className="text-2xl">My Services</h1>
                        </div>
                    </div>

                        <div className="pt-6">
                            <div className="flex justify-between">
                                <button className="pr-3 text-cyan-300" onClick={left} >left</button>
                                <img
                                    className="w-260 h-140 object-cover object-fill rounded-2xl "
                                    src={certificate[imgIdx].src}
                                    alt={certificate[imgIdx].alt}
                                />
                                <button className="pl-3 text-cyan-300" onClick={right} >right</button>
                            </div>
                    </div>

                </div>
               
        </div>
  )
}

export default CertificateCarousel