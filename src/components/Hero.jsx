// Importing necessary modules and assets
import React from 'react';
import hero from '../assets/Hero.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import reactLogo from '../assets/React.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Tailwind Css.png';

// Hero Component - Main introductory section
const Hero = () => {
  return (
    // Main section wrapper
    <section className='relative'>
      {/* Container to center content */}
      <div className='max-w-7xl mx-auto'>
        {/* Flexbox to arrange text and image side by side */}
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          {/* Left side content: Heading, description, and button */}
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            {/* Main heading */}
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
              Hi There, <br />I'm Rohit <span className='text-red-500'>Singh</span>
            </h1>
            {/* Subheading */}
            <p className='md:text-2xl text-xl mb-4'>Web Developer & Designer</p>
            {/* Brief introduction */}
            <p className='mb-4'>
              I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional websites that solve real-world problems.
            </p>
            {/* Button to download CV */}
            <button className='bg-black text-white px-3 py-2 w-max rounded-md'>
              <a href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing" download target='_blank'>Download CV</a>
            </button>
          </div>

          {/* Right side content: Hero image with logos */}
          <div className='md:w-1/2 relative flex justify-center items-end'>
            {/* Hero image */}
            <img src={hero} alt="" className='lg:h-[90vh] h-96' />
            {/* React logo (visible only on smaller screens) */}
            <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
            {/* Redux logo (visible only on smaller screens) */}
            <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
            {/* Tailwind CSS logo (visible only on smaller screens) */}
            <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
          </div>
        </div>
      </div>

      {/* Social media icons (visible on larger screens) */}
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'>
        <img src={facebook} alt="" className='w-20'/>
        <img src={instagram} alt="" className='w-20'/>
        <img src={twitter} alt="" className='w-20'/>
        <img src={linkedin} alt="" className='w-20'/>
      </div>
    </section>
  );
};

export default Hero;
