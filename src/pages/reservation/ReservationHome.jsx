import React from 'react';

const ReservationHome = () => {
  return (
    <section className="bg-back-menu bg-cover py-24 ">
      <div className="max-w-[85rem] p-6 flex justify-center flex-col lg:flex-row  w-full  mx-auto  mt-20">
        <div className="bg-black/50 lg:p-10 p-5  rounded-l-3xl">
          <div className="mb-8 text-center">
            <p className="text-white text-sm lg:text-base italic">Fill out the booking form</p>
            <h2 className=" text-3xl md:text-5xl font-semibold text-white">Book a table</h2>
          </div>
          <div>
            <form action="#" method="post">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className=" text-white">
                  <input
                    className="p-3 bg-transparent border-1 hover:border-[#BC6C25] focus:border-[#BC6C25] focus:bg-[#BC6C25] border-white/50 hover:bg-[#BC6C25] w-full rounded-xl outline-none transition ease-in-out duration-300"
                    type="text"
                    placeholder="Full name"
                  />
                </div>
                <div className="f text-white">
                  <input
                    className="p-3 bg-transparent w-full border-1 hover:border-[#BC6C25] focus:border-[#BC6C25] focus:bg-[#BC6C25] transition ease-in-out duration-300 border-white/50 hover:bg-[#BC6C25] rounded-xl outline-none"
                    type="text"
                    placeholder="970730986"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className=" text-white">
                  <input
                    className="p-3 bg-transparent w-full border-1 hover:border-[#BC6C25] focus:border-[#BC6C25] focus:bg-[#BC6C25] border-white/50 hover:bg-[#BC6C25] rounded-xl outline-none transition ease-in-out duration-300"
                    type="time"
                  />
                </div>
                <div className="flex flex-col gap-4 text-white">
                  <input
                    className="p-3 w-full bg-transparent border-1 hover:border-[#BC6C25] focus:border-[#BC6C25] focus:bg-[#BC6C25] transition ease-in-out duration-300 border-white/50 hover:bg-[#BC6C25] rounded-xl outline-none"
                    type="date"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1gap-4 mb-6">
                <div className="flex flex-col gap-4 text-white">
                  <input
                    className="p-3 w-full bg-transparent border-1 hover:border-[#BC6C25] focus:border-[#BC6C25] focus:bg-[#BC6C25] transition ease-in-out duration-300 border-white/50 hover:bg-[#BC6C25] rounded-xl outline-none"
                    type="number"
                    placeholder="Number of Peopple"
                  />
                </div>
              </div>
              <div className=" text-white">
                <textarea
                  className="p-3 w-full bg-transparent border-1 hover:border-[#BC6C25] focus:border-[#BC6C25] focus:bg-[#BC6C25] transition ease-in-out duration-300 border-white/50 hover:bg-[#BC6C25] rounded-xl outline-none"
                  rows="4"
                  cols="50"
                  required
                  placeholder="Comment(Optional)"
                ></textarea>
              </div>
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  value="Enviar"
                  className="bg-[#bc6c25] hover:bg-white hover:text-[#bc6c25] text-lg font-semibold text-white px-16 py-3 transition duration-300 ease-in-out rounded-full "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <img
            className="rounded-r-3xl hidden lg:block lg:max-w-[400px] "
            src="/assets/images/Reservation/barman-with-fruits.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ReservationHome;
