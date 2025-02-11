import React, { useState } from 'react'
import Input from './Input';

function Contact() {
    const style = [{htmlfor1:"uname",type:"text",name:"YOUR NAME"}, {htmlfor1:"userMobileNumber",type:"tel",name:"PHONE NUMBER"},{htmlfor1:"Email",type:"email",name:"EMAIL"},{htmlfor1:"subject",type:"text",name:"SUBJECT"},{htmlfor1:"description",type:"text",name:"YOUR MESSAGE"}];
    
        const [formData,setFormData] = useState({
                uname: '',
                userMobileNumber: '',
                Email: '',
                subject: '',
                description: '',
        });
        
        const handleChange =(event)=>{
                const {name,value} = event.target;
                setFormData((prevdata)=>({
                    ...prevdata,
                    [name]:value
                }));
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formData);
            setFormData({
                uname: '',
                userMobileNumber: '',
                Email: '',
                subject: '',
                description: '',
            });
        };

  return (
    <div className="flex justify-center max-sm:w-[100%] mt-10">
                <div className="bg-[var(--main-bg)] sm:w-[70vw] text-white min-h-[80vh] justify-center items-center flex-col gap-4 flex w-[70%] sm:p-15 max-sm:py-10 rounded-2xl">
                            <div className="flex flex-col items-center gap-5 ">
                                <div className="flex items-center gap-5 ">
                                    <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
                                    <h1 className="text-2xl">Contact With Me</h1>
                                </div>
                            </div>

                            

                        <form className="items-center mt-2 flex flex-col" onSubmit={handleSubmit}>
                            
                            <div className='flex mt-4 gap-4 max-sm:flex-col max-sm:items-center'> 
                                    <Input {...style[0]} value={formData.uname} onChange={handleChange}  required={true}/>
                                    <Input {...style[1]} value={formData.userMobileNumber} onChange={handleChange} required={true} />
                            </div>
                            <div className=' flex mt-4 gap-4 max-sm:flex-col max-sm:items-center' >
                                <Input {...style[2]} value={formData.Email} onChange={handleChange} required={true} />
                                <Input {...style[3]} value={formData.subject} onChange={handleChange} />
                            </div>
                            <div className='mt-5'>
                                <Input {...style[4] } value={formData.description} onChange={handleChange}   rounded={true} />
                            </div>
                            <button className='mt-4 bg-[#FA6006] p-3 w-30 rounded-full mx-auto max-sm:w-[100%]' type="submit">Submit</button>
                        </form>
                        
                </div>
</div>
  )
}

export default Contact
