
    
    import React from 'react';
    
    function Input({ htmlfor1, type, name, value, onChange, required, rounded }) {
        const inputStyle = `bg-[#191C1F] text-white ${rounded ==true? "sm:w-185 h-60 rounded-xl ": "rounded-full mt-3 w-90  "}  p-4 hover:border-[#1f3C15]`;
        return (
            <div className="flex flex-col">
            <label  className="flex items-center gap-1" htmlFor={htmlfor1}>{name}   {required && <span className="text-red-500">*</span>}</label>
            <input
                id={htmlfor1}
                type={type}
                name={htmlfor1}
                value={value}
                onChange={onChange}
                required={required}
                className={inputStyle}
                
            />
    </div>
  );
}

export default Input;



/* in this show the error 
import React from 'react'
function Input({htmlFor1,type,name,rounded,value,onChange,required}) {
        const inputStyle = `bg-[#191C1F] text-white ${rounded ==true? "w-185 h-60 rounded-xl ": "rounded-full "}  mt-3 w-90 p-4 hover:border-[#1f3C15]`;
  return (
            <div>
                    <label htmlFor={htmlFor1}>
                            <p className="flex items-center gap-1">
                                {name} 
                                {required && <span className="text-red-500">*</span>}
                            </p>
                    </label>
                            <input  className={inputStyle}  type={type} name={name} id={htmlFor1} required={required} value={value}  onChange={onChange}/>
            </div>
      )
    }
    export default Input;
*/