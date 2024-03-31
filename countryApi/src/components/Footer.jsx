import React from 'react';
import Kice1 from '../assets/img/logo.jpg';

function Footer() {
  return (
    <div className='bg-gray-100 mt-[6rem] h-[5rem]'>
      <img src={Kice1} alt="Footer Image" className='mt-[6rem] h-[5rem] mt-5 -mb-14 ml-[10rem] mr-[10rem]' />
      <p className='relative text-right mb-7 py- ml-[10rem] mr-[10rem]'>
        Copyright &copy; {new Date().getFullYear()} . All rights reserved.
      </p>
    </div>
  );
}

export default Footer;