import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#072951] text-white py-24 px-8 lg:px-16 flex flex-col gap-12 lg:gap-0 items-start mx-auto lg:flex-row justify-between">
      <div>
        <div className="font-bold text-[36px] md:text-[72px] leading-none">LOGO</div>
        <p className='w-full sm:w-[300px] py-4 font-normal'>Subscribe to our newsletters and stay up to date on features and releases.</p>
        <p className='font-medium'>Copyrights © Progfams 2024</p>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-24">
        <div className="text-left flex flex-col text-[15px] md:text-[20px] font-medium gap-8">
          <p>Home</p>
          <p>About Us</p>
          <p>Service</p>
        </div>
        <div className="text-left flex flex-col text-[15px] md:text-[20px] font-medium gap-8">
          <p>Works</p>
          <p>Boot Camp</p>
        </div>
        <div className="text-left flex flex-col text-[15px] md:text-[20px] font-medium gap-8">
          <p>Consultation</p>
          <p>Blog</p>
        </div>
        <div>
          <p className='text-[15px] md:text-[20px] pb-4 font-medium'>Contact</p>
          <p className="py-2 font-normal text-[15px] md:text-[20px]">+234 810 112 8072</p>
          <p className='py-2 font-normal text-[15px] md:text-[20px]'>info@Progfams.com</p>
          <p className='py-2 font-normal text-[15px] md:text-[20px]'>10B, Harmony Close, Ikeja, Lagos.</p>
          <div className="flex space-x-2 mt-2">
            <a href="#"><Image src='/assets/facebook.png' alt='facebook' width={32} height={32} /></a>
            <a href="#"><Image src='/assets/linkedin.png' alt='linkedin' width={32} height={32} /></a>
            <a href="#"><Image src='/assets/twitter.png' alt='twitter' width={32} height={32} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
