import Profile from '../images/profile.jpg';
import { FaGithub, FaYoutube, FaTwitter, FaRegEnvelope } from 'react-icons/fa';

const Card = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
        <div className=''>
          <img
            className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm'
            src={Profile}
            alt='profile'
          />
        </div>
        <div className='text-center mt-5'>
          <p className='text-xl sm:text-2xl text-blue-500'>Sumit Deshmukh</p>
          <p className='text-xs sm:text-base text-gray-900 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
            ReactJS / MERN Developer
          </p>
          <div className='flex align-center justify-center mt-4'>
            <a
              className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300'
              href='https://github.com/sumitdeshmukh9922'
            >
              <FaGithub />
              <span className='sr-only'>Github</span>
            </a>
            <a
              className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300'
              href='https://github.com/sumitdeshmukh9922'
            >
              <FaYoutube />
              <span className='sr-only'>YouTube</span>
            </a>
            <a
              className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'
              href='https://github.com/sumitdeshmukh9922'
            >
              <FaTwitter />
              <span className='sr-only'>Twitter</span>
            </a>
            <a
              className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300'
              href='https://github.com/sumitdeshmukh9922'
            >
              <FaRegEnvelope />
              <span className='sr-only'>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
