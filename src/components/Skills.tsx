import React from 'react';
import { SiFlutter, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';

const Skills = () => {
  return (
    <>
      <div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
        <p className='text-2xl text-black  md:text-4xl font-bold text-center pt-4'>
          Tech I Use
        </p>
        <div className='flex flex-wrap justify-center pt-2'>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
            <FaReact color='#2196f3' className='mx-auto text-4xl' />
            <p className='mt-6 text-xl font-semibold text-center'>ReactJS</p>
          </div>

          <div className='flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
            <DiNodejs color='green' className='mx-auto text-4xl' />
            <p className='mt-6 text-xl font-semibold text-center'>NodeJS</p>
          </div>

          <div className='flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
            <SiTailwindcss color='#00C0A3' className='mx-auto text-4xl' />
            <p className='mt-6 text-base font-semibold text-center'>
              TailwindCSS
            </p>
          </div>

          <div className='flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
            <SiJavascript color='#ffdf00' className='mx-auto text-4xl' />
            <p className='mt-6 text-xl font-semibold text-center'>JavaScript</p>
          </div>

          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
            <SiFlutter color='#2196f3' className='mx-auto text-4xl' />
            <p className='mt-6 text-xl font-semibold text-center'>Flutter</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
