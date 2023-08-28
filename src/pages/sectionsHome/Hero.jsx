import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ButtonSolid from '../../components/ButtonSolid';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    '/assets/images/hero/sincere-laugh-showing-picture-smartphone-casual-meeting-with-best-friends-restaurant-terrace.jpeg',
    '/assets/images/hero/happy-waitress-giving-coffee-customers-while-serving-them-coffee-shop.jpeg',
    '/assets/images/hero/young-female-barista-wear-face-mask-serving-take-away-hot-coffee-paper-cup-consumer-cafe.jpeg',
  ];

  const [showHistory, setShowHistory] = useState(false);

  const scrollToSection = (sectionId, setShowState) => {
    setShowState(true);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4500);

    const initialTransition = setTimeout(() => {
      setActiveIndex(1);
    }, 100); // Ajusta este valor según tus preferencias

    return () => {
      clearInterval(interval);
      clearTimeout(initialTransition);
    };
  }, []);

  return (
    <section
      id="homeSection"
      className="image-container relative w-full h-screen overflow-hidden after:content-['*']   after:w-[200px] after:h-[200px] md:after:w-[250px] md:after:h-[350px] after:absolute after:bg-black/50 after:rounded-2xl after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:origin-center after:top-[50%] after:left-[50%] after:pointer-events-none after:z-[5]"
    >
      <div className="relative z-[9]">
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="text-white text-5xl md:text-7xl font-semibold mb-4">Cafe Klang</h2>
          <p className="text-white text-lg md:text-2xl font-normal">your favourite coffee daily lives</p>
          <div className="flex gap-4 mt-5">
            <Link
              to="#"
              onClick={() => scrollToSection('aboutSection', setShowHistory)}
              className=" text-lg flex items-center gap-2 text-white transition duration-300 ease-in-out rounded-full px-6 py-2 hover:text-[#dda15e] font-semibold bg-transparent hover:bg-[#ffff]"
            >
              Our History
            </Link>
            <ButtonSolid nameBtn="Check Menu" to={() => scrollToSection('menuSection', setShowHistory)} />
          </div>
        </div>
      </div>
      <div>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            className={`animated-image ${index === activeIndex ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`}
            src={imageUrl}
            alt={`Imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
