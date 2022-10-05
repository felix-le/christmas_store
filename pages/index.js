import { Navigation } from 'components/Navigation';
import React from 'react';
import { Layout } from '../components/common';
import { Hero } from '../components/Hero';

function Index() {
  return (
    <Layout>
      <Navigation />
      <Hero />
    </Layout>
  );
}
export default Index;
