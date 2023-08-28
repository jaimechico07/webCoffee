import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';

import ButtonTrans from '../components/ButtonTrans';

const Header = () => {
  const openMenuMobile = useRef();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
    openMenuMobile.current.classList.toggle('hidden');
  };

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`container ${
          isScrolled ? 'fixed' : 'absolute'
        } max-w-[85rem]  left-0 right-0 font-sans-roboto px-6 font-bold z-50`}
        // onClick={handleCloseMenuMObile}
      >
        <nav className="bg-black/50 rounded-3xl mt-8 lg:px-6 px-2  max-w-[90rem] mx-auto">
          <div className="flex justify-between  items-center lg:justify-center ">
            <Link to="/" className="flex items-center ">
              <img className="w-24 h-auto" src="/assets/images/logoCoffee.png" alt="" />
              <h1 className="text-white text-4xl ">Coffee</h1>
            </Link>
            <button
              onClick={handleButtonClick}
              className={`text-white transition-transform transform flex  items-center lg:hidden text-3xl ${
                isMenuOpen ? 'rotate-180 ' : ''
              }`}
            >
              {isMenuOpen ? <VscChromeClose /> : <RxHamburgerMenu />}
            </button>

            <div className="hidden lg:grow lg:justify-end lg:flex">
              <ul className="flex gap-8 text-white items-center">
                <li>
                  <Link to="/" onClick={() => scrollToSection('homeSection')}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={() => scrollToSection('aboutSection')}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={() => scrollToSection('menuSection')}>
                    OurMenu
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={() => scrollToSection('reviewsSection')}>
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={() => scrollToSection('contactSection')}>
                    Contact
                  </Link>
                </li>
                <li>
                  <ButtonTrans nameBtn="Reservation" />
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* version mobile */}
        <section ref={openMenuMobile} className="md:px-20 md:py-5 py-5 px-5 hidden rounded-2xl  bg-black/50 ">
          <ul className="flex flex-col gap-8 text-white items-center">
            <li>
              <Link to="/" onClick={() => scrollToSection('homeSection')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => scrollToSection('aboutSection')}>
                About
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => scrollToSection('menuSection')}>
                OurMenu
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => scrollToSection('reviewsSection')}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => scrollToSection('contactSection')}>
                Contact
              </Link>
            </li>
            <li>
              <ButtonTrans nameBtn="Reservation" />
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Header;
