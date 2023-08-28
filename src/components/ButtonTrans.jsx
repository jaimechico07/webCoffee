import React from 'react';

import { Link } from 'react-router-dom';

import { BsArrowUpRight } from 'react-icons/bs';

const ButtonTrans = ({ nameBtn, isIcon, to }) => {
  return (
    <Link
      to={to}
      onClick={to}
      className="border-2 flex items-center gap-2 w-fit text-white transition duration-300 ease-in-out rounded-full px-6 py-2 hover:text-[#dda15e] border-white bg-transparent hover:bg-[#ffff]"
    >
      <p className="text-lg font-semibold">{nameBtn}</p>
      {!isIcon ? <BsArrowUpRight /> : ''}
    </Link>
  );
};

export default ButtonTrans;
