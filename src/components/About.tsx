import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

const About = () => {
  return (
    <>
      <div className='max-w-4xl mt-20 mx-auto'>
        <p className='text-2xl text-black  md:text-4xl font-bold text-center'>
          Hey 👋
        </p>
        <p className='text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center'>
          I'm a passionate about web and ReactJS developer. I love coding. I
          also love freelancing and contributing to open-source projects.
        </p>
        <ScrollIntoView selector='#tech'>
          <div className='mx-auto p-20'>
            <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500' />
          </div>
        </ScrollIntoView>
      </div>
    </>
  );
};

export default About;
