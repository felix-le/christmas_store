import { ChevronRightIcon } from '@heroicons/react/20/solid';
import tw from 'tailwind-styled-components';
import DefaultBgImg from '../../assets/images/bg/bg-image-2.jpeg';
// TODO: Add background image
// const HeroWrapper = tw.section`
//   relative
//   overflow-hidden
// `;
// const HeroImg = tw.div`
//   absolute
//   h-full
//   lg:min-h-[500px]
//   md:min-h-full
//   ${(p) => (p.imgSrc ? `bg-${p.imgSrc}` : 'bg-indigo-600')}
// `;

const HeroBanner_C = tw.div`
`;

const HeroBannerWrapper = tw.div`
  relative
  min-h-full
  flex
`;

const HeroBannerTextWrapper = tw.div`
  flex
  flex-col
  white
  z-2
  uppercase
`;

const HeroBannerTitle = tw.h1`
  lg:text-lg
  md:text-2xl
`;
const HeroBannerSubtitle = tw.h2`
  text-base
`;
// TODO: let the text be centered
const HeroBannerBgWrapper = tw.div`
  absolute
  h-full
  lg:min-h-[700px]
  sm:min-h-[500px]
  inset-0
  bg-cover
  bg-no-repeat
  bg-center
  w-full
  lg:grid lg:grid-cols-4 lg:gap-8
`;

const Overlay = tw.div`
  absolute
  inset-0
  w-full
  h-full
  bg-gradient-to-r from-[#CDB297] to-[#D1B597]
  z-1
  opacity-0
  content-none
  hover:opacity-5
`;

const Hero = ({ imgSrc = DefaultBgImg, title = '', subTitle = '' }) => {
  return (
    <>
      <section>
        <HeroBanner_C>
          <HeroBannerWrapper>
            <HeroBannerBgWrapper
              style={{
                backgroundImage: `url(${imgSrc.src})`,
              }}
            >
              <Overlay />
              <HeroBannerTextWrapper>
                <HeroBannerTitle>{title}</HeroBannerTitle>
                <HeroBannerSubtitle>{subTitle}</HeroBannerSubtitle>
              </HeroBannerTextWrapper>
            </HeroBannerBgWrapper>
          </HeroBannerWrapper>
        </HeroBanner_C>
      </section>
    </>
  );
};

export default Hero;
