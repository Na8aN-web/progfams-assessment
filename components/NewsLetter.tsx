import React from 'react';

const NewsLetter: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 lg:px-16 py-24 bg-white">
      <h2 className="text-[24px] lg:text-[36px] font-bold mb-2">Email capture form for updates and promotions</h2>
      <p className="text-[16px] lg:text-[24px] mb-4">Subscribe to our newsletters and stay up to date on features and releases.</p>
      <form className="flex flex-col my-8 relative sm:flex-row w-">
        <input 
          type="email" 
          placeholder="Enter your work email" 
          className="px-4 md:px-8 py-4 text-[16px] lg:text-[24px] border rounded-[50px] border-black sm:flex-1 w-[300px] sm:w-[590px]" 
        />
        <button 
          type="submit" 
          className="bg-[black] py-3 px-4 md:px-8 absolute right-[5px] top-[-3px] sm:top-[5px] text-white text-[16px] lg:text-[24px] rounded-[50px] mt-2 sm:mt-0"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
