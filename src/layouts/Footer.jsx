import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsWhatsapp, BsPinMap } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#BC6C25] bg-cover object-cover bg-center py-20">
      <div className="max-w-[85rem] mx-auto px-6 grid lg:grid-cols-3 gap-10 text-white">
        <div className="grid gap-4 place-items-center lg:place-items-start">
          <h2 className="italic text-lg">Where to find us?</h2>
          <div className="flex flex-col  items-center lg:flex-row  gap-2">
            <BsPinMap className="text-xl" />
            <p className="font-semibold text-center lg:text-start">Av. Mariano Ignacio Prado #238, Peru, Lima</p>
          </div>
          <ul className="flex justify-start gap-5 items-center">
            <li>
              <Link to="https://www.facebook.com/jaime.chicoloayza.5/" target="_blank" rel="noopener noreferrer">
                <BsFacebook className="text-4xl md:text-5xl p-2 hover:rounded-full hover:bg-white hover:text-[#BC6C25]" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <BsTwitter className="text-4xl md:text-5xl p-2 hover:rounded-full hover:bg-white hover:text-[#BC6C25]" />
              </Link>
            </li>
            <li>
              <Link to="https://wa.link/x1c8qz" target="_blank" rel="noopener noreferrer">
                <BsWhatsapp className="text-4xl md:text-5xl p-2 hover:rounded-full hover:bg-white hover:text-[#BC6C25]" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 place-items-center lg:place-items-start">
          <h2 className="italic text-lg">Contact</h2>
          <div className="italic grid text-center lg:text-start">
            <Link to="tel:+51970730986" target="_blank" rel="noopener noreferrer">
              <strong>Phone:</strong> +51 970 730 986
            </Link>

            <Link to="mailto:jaimechico14@gmail.com" target="_blank" rel="noopener noreferrer">
              <strong>Email:</strong> jaimechico14@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <h2 className="italic text-lg">Opening Hours</h2>
          <div className="flex">
            <p>Monday - Friday</p>
            <span className="border-b-1 grow mx-4 border-white/50"></span>
            <p className="font-semibold">9:00 - 18:00</p>
          </div>
          <div className="flex">
            <p>Saturday</p>
            <span className="border-b-1 grow mx-4 border-white/50"></span>
            <p className="font-semibold">11:00 - 16:30</p>
          </div>
          <div className="flex">
            <p>Sunday</p>
            <span className="border-b-1 grow mx-4 border-white/50"></span>
            <p className="font-semibold">Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
