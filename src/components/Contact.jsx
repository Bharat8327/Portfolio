import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const [result, setResult] = useState('');
  const noramlData = 'db925b55-8526-4580-a3be-18baedfe2d53';
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', noramlData);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully',
        icon: 'success',
      });
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <div className="flex justify-center max-sm:w-[100%] mt-10">
      <div className="bg-[var(--main-bg)] sm:w-[70vw] text-white min-h-[80vh] justify-center items-center flex-col gap-4 flex w-[70%] sm:p-15 max-sm:py-10 rounded-2xl">
        <div className="flex flex-col items-center gap-5 ">
          <div className="flex items-center gap-5 ">
            <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
            <h1 className="text-3xl">Contact with me</h1>
          </div>
        </div>

        <form
          className="items-center mt-2 flex flex-col px-3"
          onSubmit={handleSubmit}
        >
          <div className="flex mt-4 gap-4 max-sm:flex-col max-sm:items-center">
            <div>
              <label htmlFor="name" className="items-start">
                Full Name<span className="text-[#FA6006]"> *</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-[100%] mt-2   bg-[#191C1F]  rounded-2xl outline-none px-5 py-4"
                placeholder="Enter Your name"
                name="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">
                Email<span className="text-[#FA6006]"> *</span>{' '}
              </label>
              <input
                className="w-[100%] mt-2 bg-[#191C1F]  rounded-2xl outline-none px-5 py-4"
                type="email"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                required
              />
            </div>
          </div>
          <div className=" flex mt-4 gap-4 max-sm:flex-col max-sm:items-center">
            <div>
              <label htmlFor="mobile">
                Mobile No<span className="text-[#FA6006]"> *</span>
              </label>
              <input
                className="w-[100%] mt-2  bg-[#191C1F]  rounded-2xl outline-none px-5 py-4"
                type="tel"
                id="mobile"
                minLength="10"
                maxLength="10"
                placeholder="Enter Your mobile no"
                name="number"
                required
              />
            </div>
            <div>
              <label htmlFor="subject">
                Subject<span className="text-[#FA6006]"> *</span>
              </label>
              <input
                className="w-[100%] mt-2  bg-[#191C1F]  rounded-2xl outline-none px-5 py-4"
                type="subject"
                id="subject"
                placeholder="Enter your subject"
                name="subject"
                required
              />
            </div>
          </div>
          <div className="mt-2 w-full">
            <div>
              <label htmlFor="msg">
                Your Message<span className="text-[#FA6006]"> *</span>
              </label>
              <textarea
                className="w-[100%] mt-2 transform outline-none min-h-50  bg-[#191C1F]    rounded-2xl px-5 py-4"
                type="text"
                id="msg"
                required
                placeholder="enter your mssg"
                name="message"
              ></textarea>
            </div>
          </div>
          <div
            className="w-full text-center mt-2 bg-[#FA6006] rounded-full mx-auto max-sm:w-[100%] active:bg-amber-600 "
            onSubmit={handleSubmit}
          >
            <button className="p-3  w-full text-lg font-bold " type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
