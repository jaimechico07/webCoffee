import React, { useState } from 'react';
import { BsTriangleFill, BsCircleFill } from 'react-icons/bs';

function imprimirCalificacion(estrellas) {
  if (estrellas === 1) {
    return '★☆☆☆☆ Muy malo';
  } else if (estrellas === 2) {
    return '★★☆☆☆ Regular';
  } else if (estrellas === 3) {
    return '★★★☆☆ Aceptable';
  } else if (estrellas === 4) {
    return '★★★★☆ Bueno';
  } else if (estrellas === 5) {
    return '★★★★★ Excelente';
  } else {
    return 'Valor inválido. Debes ingresar un número del 1 al 5.';
  }
}

const Customer = () => {
  return (
    <section id="reviewsSection" className=" bg-[#7c5c52]  py-28 ">
      <div className="max-w-[85rem] p-6 grid  mx-auto gap-20 ">
        <div className="text-white">
          <p className="italic text-xl text-center">Reviews by Customers</p>
          <h2 className="text-5xl font-semibold text-center">Testimonials</h2>
        </div>
        <div className="grid relative grid-cols-1 gap-y-6 lg:grid-cols-2 after:content-['']  after:absolute after:w-[5px] after:bg-white after:top-0 after:bottom-0 lg:after:left-[50%] after:-ml-[3px] after:box-border">
          <div className="lg:px-10 pl-10 col-start-2 col-end-3 row-start-1 row-end-2  lg:col-start-1 lg:col-end-2 ">
            <div className="border-5 border-white rounded-3xl relative">
              <div className="bg-back-customer object-cover bg-center bg-cover rounded-t-2xl">
                <div className=" flex items-center p-8 gap-6">
                  <img
                    className="rounded-full w-16 h-16 object-cover"
                    src="/assets/images/Customers/young-woman-with-round-glasses-yellow-sweater.jpeg"
                    alt=""
                  />
                  <div className="text-white">
                    <h2 className="text-2xl font-semibold">Sandra</h2>
                    <p className="italic text-lg">Customers</p>
                  </div>
                </div>
              </div>
              <div className="text-white bg-[#b78752] p-4 lg:p-8 rounded-b-2xl">
                <p className="pb-3 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua
                </p>
                <div className="border-t-1 pt-3 border-white text-center flex justify-between items-center">
                  <p className="font-semibold">5 Rating </p>
                  <p className="text-xl">{imprimirCalificacion(5)}</p>
                </div>
              </div>
              <BsCircleFill className="absolute text-white text-3xl top-2 -left-[60px] lg:-right-[60px] lg:left-auto  border-[6px] rounded-full z-10 border-[#7c5c52]" />
              <BsTriangleFill className="absolute text-white text-2xl top-3 -left-[24px] lg:-right-[24px] lg:left-auto -rotate-90  lg:rotate-90" />
            </div>
          </div>
          <div className="lg:px-10 pl-10 col-start-2 col-end-3 row-start-2 row-end-3 ">
            <div className="border-5 rounded-3xl  border-white relative">
              <div className="bg-back-customer object-cover bg-center bg-cover rounded-t-2xl">
                <div className=" flex items-center p-8 gap-6">
                  <img
                    className="rounded-full w-16 h-16 object-cover"
                    src="/assets/images/Customers/senior-man-white-sweater-eyeglasses.jpeg"
                    alt=""
                  />
                  <div className="text-white">
                    <h2 className="text-2xl font-semibold">Don</h2>
                    <p className="italic text-lg">Customers</p>
                  </div>
                </div>
              </div>
              <div className="text-white bg-[#b78752] p-4 lg:p-8 rounded-b-2xl">
                <p className="pb-3 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua
                </p>
                <div className="border-t-1 pt-3 border-white text-center flex justify-between items-center">
                  <p className="font-semibold">4.5 Rating </p>
                  <p className="text-xl">{imprimirCalificacion(4)}</p>
                </div>
              </div>
              <BsCircleFill className="absolute text-white text-3xl top-2 -left-[60px] border-[6px] rounded-full z-10 border-[#7c5c52]" />
              <BsTriangleFill className="absolute text-white text-2xl top-3 -left-[24px] -rotate-90" />
            </div>
          </div>
          <div className="lg:px-10 pl-10 col-start-2 col-end-3 row-start-3 row-end-4 lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2">
            <div className="border-5 rounded-3xl border-white relative">
              <div className="bg-back-customer object-cover bg-center bg-cover rounded-t-2xl">
                <div className=" flex items-center p-8 gap-6">
                  <img
                    className="rounded-full w-16 h-16 object-cover"
                    src="/assets/images/Customers/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpeg"
                    alt=""
                  />
                  <div className="text-white">
                    <h2 className="text-2xl font-semibold">Olivia</h2>
                    <p className="italic text-lg">Customers</p>
                  </div>
                </div>
              </div>
              <div className="text-white bg-[#b78752] p-4 lg:p-8 rounded-b-2xl">
                <p className="pb-3 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua
                </p>
                <div className="border-t-1 pt-3 border-white text-center flex justify-between items-center">
                  <p className="font-semibold">5 Rating </p>
                  <p className="text-xl">{imprimirCalificacion(5)}</p>
                </div>
              </div>
              <BsCircleFill className="absolute text-white text-3xl top-2 -left-[60px] lg:-right-[60px] lg:left-auto  border-[6px] rounded-full z-10 border-[#7c5c52]" />
              <BsTriangleFill className="absolute text-white text-2xl top-3 -left-[24px] lg:-right-[24px] lg:left-auto -rotate-90  lg:rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
