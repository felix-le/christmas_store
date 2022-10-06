import { ChevronRightIcon } from '@heroicons/react/20/solid';
import tw from 'tailwind-styled-components';

// TODO: Add background image
const HeroWrapper = tw.section`
  relative 
  overflow-hidden
`;
const HeroImg = tw.div`
  absolute
  h-full
  lg:min-h-[500px]
  md:min-h-full
  ${(p) => (p.imgSrc ? `bg-${p.imgSrc}` : 'bg-indigo-600')}
`;

const Hero = ({}) => {
  // add props image src here
  return (
    <HeroWrapper>
      <HeroImg>
        <div className='pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14'>
          <div className='mx-auto max-w-7xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-center'>
                <div className='lg:py-24'>
                  <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                    <span className='block'>HANDMADE SOAPS</span>
                    <span className='block text-indigo-400'>
                      Complete natural clean
                    </span>
                  </h1>
                  <a
                    href='#'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg'
                  >
                    EXPLORE MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroImg>
    </HeroWrapper>
  );
};

export default Hero;
