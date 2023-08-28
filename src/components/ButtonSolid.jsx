import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSolid = ({ nameBtn, to }) => {
  return (
    <Link
      onClick={to}
      className="bg-[#bc6c25] hover:bg-white hover:text-[#bc6c25] text-lg font-semibold text-white px-6 py-2 transition duration-300 ease-in-out rounded-full "
    >
      {nameBtn}
    </Link>
  );
};

export default ButtonSolid;
