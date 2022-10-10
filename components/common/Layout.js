import React from 'react';
import Header from './Header';
import Footer from './Footer';
function Layout({ children, pageTitle, pageDescription, pageKeywords }) {
  return (
    <>
      <Header
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
