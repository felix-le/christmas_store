import { Navigation } from 'components/Navigation';
import React from 'react';
import { Layout } from '../components/common';
import { Hero } from '../components/Hero';
import HomeHero from '../assets/images/bg/home_hero.jpg';
function Index() {
  return (
    <Layout>
      <Navigation />
      <Hero ImgSrc={HomeHero} />
    </Layout>
  );
}
export default Index;
