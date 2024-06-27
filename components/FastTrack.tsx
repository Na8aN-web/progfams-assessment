import Image from 'next/image';

const FastTrack: React.FC = () => {
    return (
        <section>
            <div className='bg-white m-8 lg:m-16 border lg:rounded-[24px] relative'>
                <div className='hero-border-gradient absolute top-0 left-0 lg:rounded-[24px] w-full h-full z-10'>
                </div>
                <div className="mx-auto flex flex-col xl:flex-row items-center justify-between relative p-1 z-20">
                    <div className="xl:w-1/2 w-full">
                        <Image src="/assets/sign-up.png" layout='cover' width={573} height={583} objectFit="cover" alt="Sign Up" className="lg:rounded-l-[24px] h-full w-full" />
                    </div>
                    <div className="xl:w-1/2 w-full h-full py-[90px] p-8 bg-white rounded-b-[24px] xl:rounded-r-[24px] xl:rounded-bl-none">
                        <h2 className="text-[24px] lg:text-[36px] font-bold mb-4">Fast track your Tech Career</h2>
                        <p className="mb-4 text-[16px] lg:text-[24px]">Get the right teams with zero worries for your project every now and then. Get the right teams with zero worries for your project every now and then.</p>
                        <div className="flex gap-4 mb-4">
                            <span className="bg-[#072951] text-white font-semibold text-[14px] lg:text-[18px] px-[14px] py-[7px] lg:px-[28px] lg:py-[14px] rounded-[12px]">#30,000.00</span>
                            <span className="bg-[#4393D8] text-white font-semibold text-[14px] lg:text-[18px] px-[14px] py-[7px] lg:px-[28px] lg:py-[14px] rounded-[12px]">3 months</span>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <span className="bg-black text-[14px] lg:text-[18px] font-semibold text-white px-[14px] py-[7px] lg:px-[28px] lg:py-[14px] rounded-[12px]">Mon-Fri (4pm-6pm)</span>
                            <span className="bg-[#8D8D8D] text-white font-semibold text-[14px] lg:text-[18px] px-[14px] py-[7px] lg:px-[28px] lg:py-[14px] rounded-[12px]">GoogleMeet</span>
                        </div>
                        <div className="text-[#072951] text-[20px] lg:text-[28px] rounded-[12px] gap-4 my-12 flex flex-row items-center font-bold">
                            <Image src="/assets/arrow.png" alt="arrow" width={48} height={48} />
                            More details
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FastTrack;
