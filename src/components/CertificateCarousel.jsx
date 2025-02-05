import React from 'react'

function CertificateCarousel() {
    const certifiCate = [{src:"./img/ai.jpeg",name:"certificateAi"}]
  return (
        
        <div className="flex justify-center mt-10">
                 <div className="bg-[var(--main-bg)] w-[70vw] text-white min-h-[80vh] justify-center flex-col gap-4 flex p-15 rounded-2xl">
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
                            <h1 className="text-2xl">My Services</h1>
                        </div>
                    </div>
                <div className='pt-6'>
                    {
                        certifiCate.map((el,idx)=>{
                           return <div key={idx}>
                                <img className='w-260 h-120 object-cover object-top rounded-2xl' src={el.src} alt={el.name} />
                            </div>
                        })
                    }
                </div>
                </div>
               
        </div>
  )
}

export default CertificateCarousel