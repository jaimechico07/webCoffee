import React from 'react';

const OurMenu = () => {
  return (
    <section id="menuSection" className=" bg-back-menu bg-cover py-28 ">
      <div className="max-w-[85rem] px-6 grid grid-cols-1 lg:grid-cols-2 mx-auto gap-20 ">
        <div className="bg-black/50 p-5 md:p-10 rounded-3xl grid gap-6">
          <div className="text-white text-center">
            <p className="italic text-sm md:text-xl ">Delicious Menu</p>
            <h2 className="text-2xl md:text-4xl font-semibold">Breakfast</h2>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-3xl font-semibold">Pancakes</h3>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$12.50</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">Fresh brewed coffee and steamed milk</p>
            </div>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-3xl font-semibold">Toasted Waffle</h3>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$12.00</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">FBrewed coffee and steamed milk</p>
            </div>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl md:text-3xl font-semibold">Fried Chips</h3>
                <p className="bg-[#bc6c25] relative text-white px-2 rounded-md">Recommend</p>
              </div>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$15.0</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">FRich Milk and Foam</p>
            </div>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-3xl font-semibold">Pancakes</h3>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$12.50</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">Fresh brewed coffee and steamed milk</p>
            </div>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-3xl font-semibold">Banana Cakes</h3>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$18.0</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">Rich Milk and Foam</p>
            </div>
          </div>
        </div>
        <div className="bg-black/50 p-5 md:p-10 rounded-3xl grid gap-6">
          <div className="text-white text-center">
            <p className="italic text-sm md:text-xl ">Favourite Menu</p>
            <h2 className="text-2xl md:text-4xl font-semibold">Coffee</h2>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-3xl font-semibold">Latte</h3>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$12.50</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">Fresh brewed coffee and steamed milk</p>
            </div>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl md:text-3xl font-semibold">White Coffee</h3>
                <p className="bg-[#bc6c25] text-sm relative text-white px-2 rounded-md">Recommend</p>
              </div>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$5.90</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">Brewed coffee and steamed milk</p>
            </div>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-3xl font-semibold">Chocolate Milk</h3>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$5.50</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">Rich Milk and Foam</p>
            </div>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-3xl font-semibold">Greentea</h3>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$7.50</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">Fresh brewed coffee and steamed milk</p>
            </div>
          </div>
          <div className="text-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl md:text-3xl font-semibold">Dark Chocolate</h3>
              <strong className="text-[#dda15e] text-sm lg:text-xl">$7.25</strong>
            </div>
            <div className="border-t-1 border-white/50 pt-2">
              <p className="text-white/50">Rich Milk and Foam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
