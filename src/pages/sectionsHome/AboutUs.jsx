import React from 'react';
import ButtonTrans from '../../components/ButtonTrans';

const AboutUs = () => {
  return (
    <section id="aboutSection" className="bg-[#694720] py-28 px-6  grid place-content-center ">
      <div className="max-w-[82rem]  grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 place-items-center ">
        <div className="relative h-full ">
          <img
            className="rounded-3xl h-full w-full object-cover  "
            src="/assets/images/About/E6NW2BP46BBLPP4GW7FRW2TQTQ.avif"
            alt=""
          />
          <div className="absolute rounded-3xl flex flex-col justify-end p-6 bottom-0 bg-gradient-brown h-full w-full">
            <p className=" font-semibold text-white text-lg  lg:text-3xl ">We Started Since 2009.</p>
            <p className="ont-semibold text-white text-lg lg:text-3xl ">Best Cafe in Klang.</p>
          </div>
        </div>
        <div className="text-white flex flex-col gap-5">
          <div>
            <p className="italic text-sm lg:text-lg">Barista.co</p>
            <h2 className=" text-3xl md:text-5xl font-semibold">Cafe KL</h2>
          </div>
          <p className=" text-lg lg:text-2xl text-gray-300">
            The café had been in the town for as long as anyone could remember, and it had become a beloved institution
            among the locals.
          </p>
          <p className="text-lg lg:text-2xl  text-gray-300">
            The café was run by a friendly and hospitable couple, Mr. and Mrs. Johnson. Barista Cafe is free Bootstrap 5
            HTML layout provided by Tooplate.
          </p>
          <ButtonTrans nameBtn="Meet Baristas" isIcon={true} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
