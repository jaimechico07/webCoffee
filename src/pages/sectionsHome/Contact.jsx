import React, { useState } from 'react';
import { BsAsterisk } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contactSection" className=" bg-back-contact bg-cover object-cover bg-center py-28  ">
      <div className="max-w-[85rem] p-6 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:gap-20  gap-10">
        <div>
          <div className="mb-8">
            <p className="text-white italic">Say Hello</p>
            <h2 className="text-5xl font-semibold text-white">Contact</h2>
          </div>
          <div>
            <form action="#" method="post">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-4 text-white">
                  <label className="flex items-center gap-2">
                    Name <BsAsterisk className="text-red-500  text-xs" />
                  </label>
                  <input
                    className="p-3 bg-transparent border-1 hover:border-[#BC6C25] focus:border-[#BC6C25] focus:bg-[#BC6C25] border-white/50 hover:bg-[#BC6C25] rounded-xl outline-none transition ease-in-out duration-300"
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Jaime Chico"
                  />
                </div>
                <div className="flex flex-col gap-4 text-white">
                  <label className="flex items-center gap-2">
                    Email Address <BsAsterisk className="text-red-500  text-xs" />
                  </label>
                  <input
                    className="p-3 bg-transparent border-1 hover:border-[#BC6C25] focus:border-[#BC6C25] focus:bg-[#BC6C25] transition ease-in-out duration-300 border-white/50 hover:bg-[#BC6C25] rounded-xl outline-none"
                    type="text"
                    id="email"
                    name="email"
                    required
                    placeholder="jaimechico14@gmail.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 text-white">
                <label>How can we help?</label>
                <textarea
                  className="p-3 bg-transparent border-1 hover:border-[#BC6C25] focus:border-[#BC6C25] focus:bg-[#BC6C25] transition ease-in-out duration-300 border-white/50 hover:bg-[#BC6C25] rounded-xl outline-none"
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  cols="50"
                  required
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  value="Enviar"
                  className="bg-[#bc6c25] hover:bg-white hover:text-[#bc6c25] text-lg font-semibold text-white px-16 py-3 transition duration-300 ease-in-out rounded-full "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative  rounded-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.546201447268!2d-77.04766312397797!3d-11.936637039862063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d03a74d11b33%3A0xc5e54130d66f105d!2sAv%20Mariano%20Ignacio%20Prado%20238%2C%20Comas%2015327!5e0!3m2!1sen!2spe!4v1693156098412!5m2!1sen!2spe"
            className="absolute w-full lg:h-full rounded-3xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
