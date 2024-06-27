import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero-section relative text-white px-8 lg:px-16 pt-24 py-4">
            <div className="mx-auto flex flex-col lg:flex-row justify-between items-center relative z-10">
                <div className='flex flex-col justify-center'>
                    <h1 className="text-[24px] lg:text-[48px] w-full text-center lg:text-left lg:w-[620px] mb-4">Get the best knowledge from our Versatile Tutors</h1>
                    <button className="bg-white text-[#072951] w-full lg:w-1/2 px-2 py-4 rounded-[12px] font-bold text-[14px] lg:text-[28px]">Start learning!</button>
                </div>
                <div>
                    <Image src="/assets/hero.png" alt="Hero Image" width={377} height={378} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
