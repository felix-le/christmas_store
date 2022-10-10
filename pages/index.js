import { Navigation } from 'components/Navigation';
import React from 'react';
import { Layout } from '../components/common';

import { Hero } from '../components/Hero';
import Hero1 from '../assets/images/bg/hero-1.png';
import Hero2 from '../assets/images/bg/hero-2.png';
import Hero3 from '../assets/images/bg/hero-3.jpg';

import Slide from '../components/slide';
import ShopSteps from 'components/ShopSteps';
import FavoriteProducts from 'components/FavoriteProducts';
import ProductSlide from 'components/ProductSlide';
const heroSlides = [
  {
    id: 1,
    imgSrc: Hero1,
    title: 'Handmade Soap',
    subTitle: 'Complete natural clean',
    link: '#',
  },
  {
    id: 2,
    imgSrc: Hero2,
    title: 'Artisan Soap',
    subTitle: 'Handcrafted',
    link: '#',
  },
  {
    id: 3,
    imgSrc: Hero3,
    title: 'Creative Soap Making',
    subTitle: 'Natural',
    link: '#',
  },
];

function Index() {
  return (
    <Layout>
      <Navigation />
      {/* Slider */}
      <Slide>
        {heroSlides.map((slide) => (
          <Hero
            key={slide.id}
            imgSrc={slide.imgSrc}
            title={slide.title}
            subTitle={slide.subTitle}
          />
        ))}
      </Slide>
      <ShopSteps />
      <FavoriteProducts />
      <ProductSlide />
    </Layout>
  );
}
export default Index;
