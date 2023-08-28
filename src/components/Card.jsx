import React from 'react';

const Cards = ({ image, name, description, status }) => {
  return (
    <div className="relative h-full overflow-hidden group">
      <div className="rounded-3xl overflow-hidden">
        <img
          className="h-auto w-[350px] lg:w-full object-cover  transition group-hover:scale-125"
          src={image}
          alt={name}
        />
      </div>
      <div className="absolute rounded-3xl flex flex-col justify-end p-6 bottom-0 bg-gradient-brown h-full w-full">
        <div className="flex items-center gap-5">
          <h2 className="font-semibold text-white text-xl md:text-3xl">{name}</h2>
          <p className="bg-[#bc6c25] relative text-white px-2 rounded-md">{status}</p>
        </div>
        <p className="font-semibold text-white text-sm md:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
