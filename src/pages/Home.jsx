import React from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Hero from './sectionsHome/Hero';
import AboutUs from './sectionsHome/AboutUs';
import MeetPeople from './sectionsHome/MeetPeople';
import OurMenu from './sectionsHome/OurMenu';
import Customer from './sectionsHome/Customer';
import Contact from './sectionsHome/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <MeetPeople />
        <OurMenu />
        <Customer />

        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
