import { ChevronRightIcon } from '@heroicons/react/20/solid';
import DefaultBgImg from '../../assets/images/bg/bg-image-2.jpeg';
// TODO: Add background image

// TODO: let the text be centered

const Hero = ({ imgSrc = DefaultBgImg, title = '', subTitle = '' }) => {
  return (
    <>
      <div className='lg:min-h-[700px] sm:min-h-[500px] relative'>
        <div className='  flex min-h-full'>
          <div
            className='  absolute h-full inset-0 bg-cover bg-no-repeat bg-center w-full lg:grid lg:grid-cols-4 lg:gap-8'
            style={{
              backgroundImage: `url(${imgSrc.src})`,
            }}
          >
            <div className='  absolute inset-0 w-full h-full bg-gradient-to-r from-[#CDB297] to-[#D1B597] z-1 opacity-0 content-none hover:opacity-5' />
            <div className='flex flex-col white z-2 uppercase'>
              <div className='lg:text-lg md:text-2xl'>{title}</div>
              <div className=' text-base'>{subTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
