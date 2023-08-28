import React from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import ReservationHome from './reservation/ReservationHome';

const Reservation = () => {
  return (
    <>
      <Header />
      <main>
        <ReservationHome />
      </main>
      <Footer />
    </>
  );
};

export default Reservation;
