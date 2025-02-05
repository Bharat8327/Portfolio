import React from 'react'

function AboutSkills() {

    const skill1 = [{src:'./img/html.svg',name:"html"},{src:'./img/html.svg',name:"html"},{src:'./img/html.svg',name:"html"},{src:'./img/html.svg',name:"html"},{src:'./img/html.svg',name:"html"},{src:'./img/html.svg',name:"html"},{src:'./img/html.svg',name:"html"},{src:'./img/html.svg',name:"html"},{src:'./img/html.svg',name:"html"},{src:'./img/html.svg',name:"html"}];
    const imag = [{src:'./img/quote.svg',nmae:"quote"},{src:'./img/review.svg',nmae:"review"}]


  return (
    <div className="flex items-center justify-center -mt-3">
        <div className="w-[70vw] text-white min-h-[50vh] flex gap-8 items-center justify-between rounded-2xl">
                <div className="w-[65%] bg-[var(--main-bg)] min-h-[40vh] rounded-2xl py-10 px-12 flex flex-col gap-8">
                
                        <div className="flex gap-2 items-center ">
                            <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
                            <h2 className="text-2xl font-semibold">About Me</h2>
                        </div>

                        <div className='flex gap-3 flex-wrap'>
                            {
                            skill1.map((value,idx)=>{
                               return <div key ={idx} className="w-20 h-20 flex items-center justify-center rounded-full bg-white "> 
                                <img src= {value.src} alt={value.name} />
                                </div>
                            })
                            }
                        </div>
                </div>

            <div className="w-[55%] bg-[var(--main-bg)] min-h-[40vh] rounded-2xl p-10">
                    <div>
                        <div className='flex gap-5 items-end'>
                            {
                            imag.map((el,idx)=>(
                                <div>
                                <img src={el.src} alt={el.name} />
                                </div>
                            ))
                        }
                        </div>

                        <div className='pt-3'>
                            <p>Since 1985 Reed has pioneered specialist recruitment Sourcing knowledgeable,skilled professionals pioneered Specialist
                            pioneered specialist recruitment skilled professionals</p>
                        </div>

                        <div className='pt-3 flex items-start '>
                            <img src="./img/testimonial.svg" alt="user1" />
                            <div className='flex flex-col gap-1 pl-3 text-xl font-semibold'>
                                <h3>Tandre Flop</h3>
                                <p className='text-sm font-'>CEO, Squaround</p>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSkills