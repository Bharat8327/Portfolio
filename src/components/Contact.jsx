import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const [result, setResult] = useState('Send message ...');
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
    setResult('Submit');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <div className="flex justify-center w-full mt-6 px-2">
      <div className="bg-[var(--main-bg)] w-full max-w-5xl text-white min-h-[80vh] flex flex-col gap-4 items-center p-6 sm:p-10 rounded-2xl">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-5">
            <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
            <h1 className="text-2xl sm:text-3xl">Send mail</h1>
          </div>
        </div>

        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[250px]">
              <label htmlFor="name" className="block">
                Full Name<span className="text-[#FA6006]"> *</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 bg-[#191C1F] rounded-2xl outline-none px-5 py-4"
                placeholder="Your name"
                name="name"
                required
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <label htmlFor="email" className="block">
                Email<span className="text-[#FA6006]"> *</span>
              </label>
              <input
                className="w-full mt-2 bg-[#191C1F] rounded-2xl outline-none px-5 py-4"
                type="email"
                id="email"
                placeholder="Email adress"
                name="email"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[250px]">
              <label htmlFor="mobile" className="block">
                Mobile No<span className="text-[#FA6006]"> *</span>
              </label>
              <input
                className="w-full mt-2 bg-[#191C1F] rounded-2xl outline-none px-5 py-4"
                type="tel"
                id="mobile"
                minLength="10"
                maxLength="10"
                placeholder="Phone Number"
                name="number"
                required
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <label htmlFor="subject" className="block">
                Subject<span className="text-[#FA6006]"> *</span>
              </label>
              <input
                className="w-full mt-2 bg-[#191C1F] rounded-2xl outline-none px-5 py-4"
                type="text"
                id="subject"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="msg" className="block">
              Your Message<span className="text-[#FA6006]"> *</span>
            </label>
            <textarea
              className="w-full mt-2 bg-[#191C1F] rounded-2xl outline-none px-5 py-4 min-h-[100px]"
              id="msg"
              required
              placeholder="Message....."
              name="message"
            ></textarea>
          </div>
          <div className="w-full">
            <button
              className="w-full p-3 text-lg font-bold cursor-pointer bg-[#FA6006] rounded-full active:bg-amber-600"
              type="submit"
            >
              {result}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
