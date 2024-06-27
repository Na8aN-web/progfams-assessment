import Image from 'next/image';
import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section className="bg-[#4393D8] bg-opacity-25 px-8 lg:px-16 py-20">
            <div className="mx-auto flex flex-col lg:flex-row gap-4 items-start lg:items-end justify-between">
                <div>
                    <h2 className="text-[#8D8D8D] text-[20px] lg:text-[28px] mb-4">Testimonials</h2>
                    <h1 className='text-black text-[24px] lg:text-[36px] font-bold w-full lg:w-[500px] mb-24'>See what others are saying about us</h1>
                    <p className="mb-4 text-[20px] lg:text-[28px] w-full lg:w-[600px]">“Explore the course catalog and syllables to identify courses that align with personal learning objectives. Take advantage of interactive tutorials we offer to reinforce your understanding and apply concepts in real world scenarios.”</p>
                    <div className="flex flex-col text-[16px] lg:text-[24px] my-10">
                        <p className='font-bold'>Faaruq Azeez</p>
                        <p>Founder, Justwear</p>
                        <p className='text-[#8D8D8D]'>United Arab Emirate</p>
                    </div>
                    <div className='flex gap-12'>
                        <Image src="/assets/prevarrow.png" width={40} height={1.5} alt="prev" />
                        <Image src="/assets/nextarrow.png" width={40} height={1.5} alt="next" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="max-w-full">
                        <Image src="/assets/testimonials.png" alt="Sign Up" layout="responsive" width={578} height={543} className="rounded-l-[24px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
